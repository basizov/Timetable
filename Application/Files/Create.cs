using System.Collections.Generic;
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
    public class Command : IRequest<Result<List<Domain.Entities.File>>>
    {
      public IFormFileCollection Files { get; set; }
    }

    public class Handler : IRequestHandler<Command, Result<List<Domain.Entities.File>>>
    {
      private readonly DataContext _context;
      private readonly IConfiguration _config;

      public Handler(DataContext context, IConfiguration config)
      {
        _context = context;
        _config = config;
      }

      public async Task<Result<List<Domain.Entities.File>>> Handle(Command request, CancellationToken cancellationToken)
      {
        var files = new List<Domain.Entities.File>();
        
        if (request.Files != null && request.Files.Count > 0)
        {
          foreach(var uploadedFile in request.Files)
          {
            var path = _config["FilesPath"] + uploadedFile.FileName;
            
            using (var fileStream = new FileStream(path, FileMode.Create))
              await uploadedFile.CopyToAsync(fileStream);
            var file = new Domain.Entities.File { Name = uploadedFile.FileName, Path = path };

            _context.Files.Add(file);
            files.Add(file);
          }
          var result = await _context.SaveChangesAsync() > 0;

          if (!result)
            return (Result<List<Domain.Entities.File>>.Failure("Ошибка при добавлении файла(-ов)"));
        }
        return (Result<List<Domain.Entities.File>>.Success(files));
      }
    }
  }
}