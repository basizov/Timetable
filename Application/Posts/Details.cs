using System;
using System.Threading;
using System.Threading.Tasks;
using Application.Core;
using Application.DTOs;
using AutoMapper;
using AutoMapper.QueryableExtensions;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace Application.Posts
{
  public class Details
  {
    public class Query : IRequest<Result<PostDTO>>
    {
      public Guid Id { get; set; }
    }
    public class Handler : IRequestHandler<Query, Result<PostDTO>>
    {
      private readonly DataContext _context;
      private readonly IMapper _mapper;

      public Handler(DataContext context, IMapper mapper)
      {
        _mapper = mapper;
        _context = context;
      }
      
      public async Task<Result<PostDTO>> Handle(Query request, CancellationToken cancellationToken) =>
        Result<PostDTO>.Success(await _context.Posts
          .ProjectTo<PostDTO>(_mapper.ConfigurationProvider)
          .FirstOrDefaultAsync(g => g.Id == request.Id));
    }
  }
}