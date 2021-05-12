using System;

namespace Application.DTOs
{
  public class FileDTO
  {
    /// <summary>
    /// Идентификатор файла 
    /// </summary>
    public Guid Id { get; set; }
    /// <summary>
    /// Название файла 
    /// </summary>
    public string Name { get; set; }
    /// <summary>
    /// Путь к файлу 
    /// </summary>
    public string Path { get; set; }
  }
}