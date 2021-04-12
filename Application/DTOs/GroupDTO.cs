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
		/// Рассписание группы по предметам
		/// </summary>
    public List<SubjectDTO> Subjects { get; set; }
  }
}