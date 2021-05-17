using System;
using System.Collections.Generic;

namespace Domain.Entities
{
  public class Post
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
    public IEnumerable<Photo> Photos { get; set; }
    /// <summary>
    /// Фотографии поста
    /// </summary>
    public IEnumerable<File> Files { get; set; }
  }
}