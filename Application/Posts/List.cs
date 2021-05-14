using System.Collections.Generic;
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
  public class List
  {
    public class Query : IRequest<Result<List<PostDTO>>> { }
    public class Handler : IRequestHandler<Query, Result<List<PostDTO>>>
    {
      private readonly DataContext _context;
      private readonly IMapper _mapper;

      public Handler(DataContext context, IMapper mapper)
      {
        _mapper = mapper;
        _context = context;
      }

      public async Task<Result<List<PostDTO>>> Handle(Query request, CancellationToken cancellationToken)
      {
        var posts = await _context.Posts
          .ProjectTo<PostDTO>(_mapper.ConfigurationProvider)
          .ToListAsync();

        return Result<List<PostDTO>>.Success(posts);
      }
    }
  }
}