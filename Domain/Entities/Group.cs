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
		/// Рассписание группы по предметам
		/// </summary>
    public List<Subject> Subjects { get; set; }
  }
}