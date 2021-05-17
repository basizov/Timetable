using System;
using System.Collections.Generic;

namespace Application.DTOs
{
  public class PostDTO
  {
    /// <summary>
    /// Идентификатор поста 
    /// </summary>
    public Guid Id { get; set; }
    /// <summary>
    /// Дата создания поста 
    /// </summary>
    public DateTime CreatedTime { get; set; }
    /// <summary>
    /// Название поста 
    /// </summary>
    public string Title { get; set; }
    /// <summary>
    /// Описание поста 
    /// </summary>
    public string Description { get; set; }
    /// <summary>
    /// Фотографии поста
    /// </summary>
    public IEnumerable<PhotoDTO> Photos { get; set; }
    /// <summary>
    /// Фотографии поста
    /// </summary>
    public IEnumerable<FileDTO> Files { get; set; }
  }
}