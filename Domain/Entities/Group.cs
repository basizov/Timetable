using System;
using System.Collections.Generic;

namespace Domain.Entities
{
  public class Group
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
    public ICollection<Student> Students { get; set; }
    /// <summary>
    /// Расписание группы
    /// </summary>
    public ICollection<Timetable> Timetable { get; set; }
  }
}