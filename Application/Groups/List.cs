using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Application.Core;
using Application.DTOs;
using AutoMapper;
using AutoMapper.QueryableExtensions;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace Application.Groups
{
  public class List
  {
    public class Query : IRequest<Result<List<GroupDTO>>>
    {
      public string Label { get; set; }
    }
    public class Handler : IRequestHandler<Query, Result<List<GroupDTO>>>
    {
      private readonly DataContext _context;
      private readonly IMapper _mapper;

      public Handler(DataContext context, IMapper mapper)
      {
        _mapper = mapper;
        _context = context;
      }

      public async Task<Result<List<GroupDTO>>> Handle(Query request, CancellationToken cancellationToken)
      {
        var groups = await _context.Groups
          .Where(g => (
            request.Label == null ||
            request.Label == "" ||
            g.Number.ToLower().Contains(request.Label.ToLower())))
          .ProjectTo<GroupDTO>(_mapper.ConfigurationProvider)
          .OrderBy(g => g.Number)
          .ToListAsync();

        return Result<List<GroupDTO>>.Success(groups);
      }
    }
  }
}