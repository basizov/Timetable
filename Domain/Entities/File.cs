using System;

namespace Domain.Entities
{
  public class File
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