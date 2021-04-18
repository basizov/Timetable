using System;

namespace Domain.Entities
{
  public class Student
  {
    public Guid Id { get; set; }
    public string FIO { get; set; }
    public string UserId { get; set; }
    public User User { get; set; }
    public Guid GroupId { get; set; }
    public Group Group { get; set; }
  }
}