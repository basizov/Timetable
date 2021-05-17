using System;
using System.Threading;
using System.Threading.Tasks;
using Application.Core;
using Domain.Entities;
using MediatR;
using Persistence;

namespace Application.Posts
{
  public class Create
  {
    public class Command : IRequest<Result<Post>>
    {
      public Post Post { get; set; }
    }
    public class Handler : IRequestHandler<Command, Result<Post>>
    {
     private readonly DataContext _context;
    
     public Handler(DataContext context) =>
       _context = context;
    
     public async Task<Result<Post>> Handle(Command request, CancellationToken cancellationToken)
     {
       request.Post.CreatedTime = DateTime.UtcNow;
       _context.Add(request.Post);
    
       var result = await _context.SaveChangesAsync() > 0;
    
       if (!result)
         return (Result<Post>.Failure("Ошибка в добавлении поста"));
       return (Result<Post>.Success(request.Post));
     }
    }
  }
}