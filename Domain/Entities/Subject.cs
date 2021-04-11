using System;
using Domain.Enums;

namespace Domain.Entities
{
  public class Subject
  {
		/// <summary>
		/// Идентификатор
		/// </summary>
    public Guid Id { get; set; }
		/// <summary>
		/// Наименование дисциплины
		/// </summary>
    public string Discipline { get; set; }
		/// <summary>
		/// Номер кабинета
		/// </summary>
    public string Cabinet { get; set; }
		/// <summary>
		/// Номер здания
		/// </summary>
    public int Building { get; set; }
		/// <summary>
		/// Номер здания
		/// </summary>
    public string SubjectType { get; set; }
		/// <summary>
		/// Время пары (первая, вторая и т.д.)
		/// </summary>
    public string SubjectTime { get; set; }
  }
}