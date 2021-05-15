using System;

namespace Domain.Entities
{
  public class Photo
  {
    /// <summary>
    /// Идентификатор фото 
    /// </summary>
    public Guid Id { get; set; }
    /// <summary>
    /// Адрес фото 
    /// </summary>
    public string Url { get; set; }
  }
}