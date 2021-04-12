using System;
using System.Collections.Generic;

namespace Application.DTOs
{
  public class GroupDTO
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
    public List<DayDTO> Days { get; set; }
  }
}