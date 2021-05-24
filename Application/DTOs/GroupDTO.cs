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
    public ICollection<StudentDTO> Students { get; set; }
    /// <summary>
    /// Расписание группы
    /// </summary>
    public ICollection<TimetableDTO> Timetable { get; set; }
  }
}