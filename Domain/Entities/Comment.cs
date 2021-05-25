using System;

namespace Domain.Entities
{
  public class Comment : Message
  {
    /// <summary>
    /// Идентификатор поста
    /// </summary>
    public Guid PostId { get; set; }
    /// <summary>
    /// Пост
    /// </summary>
    public Post Post { get; set; }
  }
}