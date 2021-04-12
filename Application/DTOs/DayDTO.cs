using System;
using System.Collections.Generic;
using Domain.Enums;

namespace Application.DTOs
{
  public class DayDTO
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
    public string Week { get; set; }
  }
}