using System;

namespace Application.DTOs
{
  public class PhotoDTO
  {
    /// <summary>
    /// Идентификатор фото 
    /// </summary>
    public Guid Id { get; set; }
    /// <summary>
    /// Адрес фото 
    /// </summary>
    public string Url { get; set; }
    /// <summary>
    /// Статус фото (true - основная)
    /// </summary>
    public bool Status { get; set; }
  }
}