using System;
using System.Collections.Generic;

namespace Domain.Entities
{
  public class Group
  {
		/// <summary>
		/// Идентификатор
		/// </summary>
    public Guid Id { get; set; }
		/// <summary>
		/// Номер группы
		/// </summary>
    public string Number { get; set; }
		/// <summary>
		/// Рассписания группы по дням
		/// </summary>
    public List<Day> Days { get; set; }
  }
}