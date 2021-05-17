using System;
using System.Collections.Generic;
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
    public class Command : IRequest<Result<List<Photo>>>
    {
      public IFormFileCollection Files { get; set; }
    }

    public class Handler : IRequestHandler<Command, Result<List<Photo>>>
    {
      private readonly DataContext _context;
      private readonly IPhotoAccessor _photoAccessor;

      public Handler(DataContext context, IPhotoAccessor photoAccessor)
      {
        _photoAccessor = photoAccessor;
        _context = context;
      }
      
      public async Task<Result<List<Photo>>> Handle(Command request, CancellationToken cancellationToken)
      {
        var photos = new List<Photo>();

        if (request.Files != null && request.Files.Count > 0)
        {
          foreach(var uploadedFile in request.Files)
          {
            var photoUploadResult = await _photoAccessor.AddPhoto(uploadedFile);
            var photo = new Photo
            {
              Url = photoUploadResult.Url
            };

            _context.Photos.Add(photo);
            photos.Add(photo);
          }
          var result = await _context.SaveChangesAsync() > 0;
            
          if (!result)
            return (Result<List<Photo>>.Failure("Ошибка при добавление фото"));
        }
        return (Result<List<Photo>>.Success(photos));
      }
    }
  }
}