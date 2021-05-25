using System;
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

namespace Application.Messages
{
  public class List
  {
    public class Query : IRequest<Result<List<MessageDTO>>>
    {
      public Guid PostId { get; set; }
    }
    public class Handler : IRequestHandler<Query, Result<List<MessageDTO>>>
    {
      private readonly DataContext _context;
      private readonly IMapper _mapper;

      public Handler(DataContext context, IMapper mapper)
      {
        _mapper = mapper;
        _context = context;
      }

      public async Task<Result<List<MessageDTO>>> Handle(Query request, CancellationToken cancellationToken)
      {
        var comments = await _context.Comments
          .Where(c => c.PostId == request.PostId)
          .OrderBy(c => c.CreatedTime)
          .ProjectTo<MessageDTO>(_mapper.ConfigurationProvider)
          .ToListAsync();

        return Result<List<MessageDTO>>.Success(comments);
      }
    }
  }
}