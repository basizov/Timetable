using System;
using System.Collections.Generic;

namespace Application.DTOs
{
  public class GroupDTO
  {
    /// <summary>
    /// Идентификатор группы 
    /// </summary>
    public Guid Id { get; set; }
    /// <summary>
    /// Номер группы 
    /// </summary>
    public string Number { get; set; }
    /// <summary>
    /// Студенты группы 
    /// </summary>
    public IEnumerable<StudentDTO> Students { get; set; }
  }
}