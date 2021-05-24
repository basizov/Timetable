using System;

namespace Application.DTOs
{
  public class MessageDTO
  {
    /// /// <summary>
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
    /// Ник автора сообщения
    /// </summary>
    public string Username { get; set; }
    /// <summary>
    /// Имя автора сообщения
    /// </summary>
    public string Displayname { get; set; }
    /// <summary>
    /// Ник автора сообщения
    /// </summary>
    public string Image { get; set; }
    /// <summary>
    /// Дата создания сообщения
    /// </summary>
    public DateTime CreatedTime { get; set; } = DateTime.UtcNow;
  }
}