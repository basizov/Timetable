using System.Threading.Tasks;
using Application.Photos;
using Microsoft.AspNetCore.Http;

namespace Application.Interfaces
{
  public interface IPhotoAccessor
  {
    /// <summary>
    /// Добавление фото
    /// </summary>
    /// <param name="file">Фотография</param>
    /// <returns>Сущность фотографии</returns>
    Task<PhotoUploadResult> AddPhoto(IFormFile file);
    /// <summary>
    /// Удаление фото
    /// </summary>
    /// <param name="publicId">Id фото</param>
    /// <returns>Статус удаления</returns>
    Task<string> DeletePhoto(string publicId);
  }
}