using System;
using System.Threading;
using System.Threading.Tasks;
using Application.Core;
using Application.DTOs;
using Application.Interfaces;
using AutoMapper;
using Domain.Entities;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace Application.Messages
{
  public class Create
  {
    public class Command : IRequest<Result<MessageDTO>>
    {
      public string Body { get; set; }
      public Guid PostId { get; set; }
    }
    public class Handler : IRequestHandler<Command, Result<MessageDTO>>
    {
      private readonly DataContext _context;
      private readonly IUserAccessor _userAccessor;
      private readonly IMapper _mapper;

      public Handler(DataContext context, IMapper mapper, IUserAccessor userAccessor)
      {
        _mapper = mapper;
        _userAccessor = userAccessor;
        _context = context;
      }
      public async Task<Result<MessageDTO>> Handle(Command request, CancellationToken cancellationToken)
      {
        var post = await _context.Posts.FindAsync(request.PostId);

        if (post == null)
          return (null);
        var user = await _context.Users
          .Include(u => u.Photo)
          .SingleOrDefaultAsync(u => u.UserName == _userAccessor.GetUsername());
        var comment = new Comment
        {
          AuthorId = user.Id,
          Author = user,
          Body = request.Body,
          PostId = post.Id,
          Post = post
        };

        post.Comments.Add(comment);
        var success = await _context.SaveChangesAsync() > 0;

        if (success)
          return (Result<MessageDTO>.Success(_mapper.Map<MessageDTO>(comment)));
        return (Result<MessageDTO>.Failure("Ошибка при добавлении комментария"));
      }
    }
  }
}