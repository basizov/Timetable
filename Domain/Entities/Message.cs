using System;

namespace Domain.Entities
{
  public class Message
  {
    /// <summary>
    /// Идентификатор сообщения
    /// </summary>
    public int Id { get; set; }
    /// <summary>
    /// Тело сообщения
    /// </summary>
    public string Body { get; set; }
    /// <summary>
    /// Идентификатор автора
    /// </summary>
    public string AuthorId { get; set; }
    /// <summary>
    /// Автор сообщения
    /// </summary>
    public User Author { get; set; }
    /// <summary>
    /// Дата создания сообщения
    /// </summary>
    public DateTime CreatedTime { get; set; } = DateTime.UtcNow;
  }
}