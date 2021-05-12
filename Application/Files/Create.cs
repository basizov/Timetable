using System.IO;
using System.Threading;
using System.Threading.Tasks;
using Application.Core;
using MediatR;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Configuration;
using Persistence;

namespace Application.Files
{
  public class Create
  {
    public class Command : IRequest<Result<Unit>>
    {
      public IFormFileCollection Files { get; set; }
    }

    public class Handler : IRequestHandler<Command, Result<Unit>>
    {
      private readonly DataContext _context;
      private readonly IConfiguration _config;

      public Handler(DataContext context, IConfiguration config)
      {
        _context = context;
        _config = config;
      }

      public async Task<Result<Unit>> Handle(Command request, CancellationToken cancellationToken)
      {
        if (request.Files != null && request.Files.Count > 0)
        {
          foreach(var uploadedFile in request.Files)
          {
              var path = _config["FilesPath"] + uploadedFile.FileName;
              
              using (var fileStream = new FileStream(path, FileMode.Create))
                await uploadedFile.CopyToAsync(fileStream);
              var file = new Domain.Entities.File { Name = uploadedFile.FileName, Path = path };

              _context.Files.Add(file);
          }
          var result = await _context.SaveChangesAsync() > 0;

          if (!result)
            return (Result<Unit>.Failure("Ошибка при добавлении файла(-ов)"));
        }
        return (Result<Unit>.Success(Unit.Value));
      }
    }
  }
}