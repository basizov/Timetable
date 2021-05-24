using System.Collections.Generic;
using Domain.Enums;
using Microsoft.AspNetCore.Identity;

namespace Domain.Entities
{
  public class User : IdentityUser
  {
    /// <summary>
    /// Статус пользователя
    /// </summary>
    public UserStatus Status { get; set; }
    /// <summary>
    /// Фотография пользователя 
    /// </summary>
    public Photo Photo { get; set; }
    /// <summary>
    /// ФИО пользователя
    /// </summary>
    public string Displayname { get; set; }
    /// <summary>
    /// Токены пользователя
    /// </summary>
    public ICollection<RefreshToken> RefreshTokens { get; set; } = new List<RefreshToken>();
  }
}