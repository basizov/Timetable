using System;

namespace Domain.Entities
{
  public class Student
  {
    /// <summary>
    /// Идентификатор студента
    /// </summary>
    public Guid Id { get; set; }
    /// <summary>
    /// ФИО студента
    /// </summary>
    public string FIO { get; set; }
    /// <summary>
    /// Статус студента (true - староста)
    /// </summary>
    public bool Status { get; set; }
    /// <summary>
    /// Id пользователя системы
    /// </summary>
    public int UserId { get; set; }
    /// <summary>
    /// Пользователь системы
    /// </summary>
    public User User { get; set; }
    /// <summary>
    /// Id группы студента
    /// </summary>
    public Guid GroupId { get; set; }
    /// <summary>
    /// Группа студента
    /// </summary>
    public Group Group { get; set; }
  }
}