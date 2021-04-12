using System;
using System.Collections.Generic;
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
		/// Тип предмета
		/// </summary>
    public SubjectType SubjectType { get; set; }
		/// <summary>
		/// Время пары (первая, вторая и т.д.)
		/// </summary>
    public SubjectNumber SubjectTime { get; set; }
		/// <summary>
		/// Рассписание предмета по дням
		/// </summary>
    public List<Day> Days { get; set; }
  }
}