using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Application.Core;
using Application.DTOs;
using AutoMapper;
using AutoMapper.QueryableExtensions;
using MediatR;
using Persistence;

namespace Application.Posts
{
  public class List
  {
    public class Query : IRequest<Result<PagedList<PostDTO>>>
    {
      public PagingParams PagingParams { get; set; }
    }
    public class Handler : IRequestHandler<Query, Result<PagedList<PostDTO>>>
    {
      private readonly DataContext _context;
      private readonly IMapper _mapper;

      public Handler(DataContext context, IMapper mapper)
      {
        _mapper = mapper;
        _context = context;
      }

      public async Task<Result<PagedList<PostDTO>>> Handle(Query request, CancellationToken cancellationToken)
      {
        var posts = await PagedList<PostDTO>.CreateAsync(_context.Posts
          .ProjectTo<PostDTO>(_mapper.ConfigurationProvider)
          .AsQueryable(), request.PagingParams.PageNumber, request.PagingParams.PageSize);

        return Result<PagedList<PostDTO>>.Success(posts);
      }
    }
  }
}