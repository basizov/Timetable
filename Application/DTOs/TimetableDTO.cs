using System;

namespace Application.DTOs
{
  public class TimetableDTO
  {
    /// <summary>
    /// Идентификатор расписания
    /// </summary>
    public Guid Id { get; set; }
    /// <summary>
    /// Идентификатор группы
    /// </summary>
    public Guid GroupId { get; set; }
    /// <summary>
    /// Группа
    /// </summary>
    public GroupDTO Group { get; set; }
    /// <summary>
    /// День недели
    /// </summary>
    public string Day { get; set; }
    /// <summary>
    /// Неделя (чет или нечет)
    /// </summary>
    public string Week { get; set; }
    /// <summary>
    /// Предмет
    /// </summary>
    public string Subject { get; set; }
    /// <summary>
    /// Преподаватель
    /// </summary>
    public string Teacher { get; set; }
    /// <summary>
    /// Номер пары (первая, вторая ...)
    /// </summary>
    public string SubjectNumber { get; set; }
    /// <summary>
    /// Тип предмета (лекция, лаба, пратика)
    /// </summary>
    public string SubjectType { get; set; }
  }
}