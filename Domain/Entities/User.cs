using Microsoft.AspNetCore.Identity;

namespace Domain.Entities
{
  public class User : IdentityUser
  {
    /// <summary>
    /// Статус пользователя
    /// </summary>
    public int Status { get; set; }
    /// <summary>
    /// Фотография пользователя 
    /// </summary>
    public Photo Photo { get; set; }
  }
}