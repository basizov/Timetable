using System;
using System.Threading;
using System.Threading.Tasks;
using Application.Core;
using Application.Interfaces;
using Domain.Entities;
using MediatR;
using Microsoft.AspNetCore.Http;
using Persistence;

namespace Application.Photos
{
  public class Add
  {
    public class Command : IRequest<Result<Photo>>
    {
      public IFormFile File { get; set; }
    }

    public class Handler : IRequestHandler<Command, Result<Photo>>
    {
      private readonly DataContext _context;
      private readonly IPhotoAccessor _photoAccessor;

      public Handler(DataContext context, IPhotoAccessor photoAccessor)
      {
        _photoAccessor = photoAccessor;
        _context = context;
      }
      
      public async Task<Result<Photo>> Handle(Command request, CancellationToken cancellationToken)
      {
        var photoUploadResult = await _photoAccessor.AddPhoto(request.File);
        var photo = new Photo
        {
          Url = photoUploadResult.Url
        };

        _context.Photos.Add(photo);
        var result = await _context.SaveChangesAsync() > 0;

        if (result)
          return (Result<Photo>.Success(photo));
        return (Result<Photo>.Failure("Ошибка при добавление фото"));
      }
    }
  }
}