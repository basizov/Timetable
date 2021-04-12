using System;
using Domain.Enums;

namespace Domain.Entities
{
  public class Day
  {
		/// <summary>
		/// Идентификатор
		/// </summary>
    public Guid Id { get; set; }
		/// <summary>
		/// День недели
		/// </summary>
    public string Name { get; set; }
		/// <summary>
		/// Дата проведения занятия
		/// </summary>
    public DateTime? Date { get; set; }
		/// <summary>
		/// Неделя (четная, нечетная)
		/// </summary>
    public Week Week { get; set; }
  }
}