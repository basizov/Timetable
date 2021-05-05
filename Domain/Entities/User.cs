using System.Collections.Generic;
using Microsoft.AspNetCore.Identity;

namespace Domain.Entities
{
  public class User : IdentityUser
  {
    /// <summary>
    /// Фотографии пользователя 
    /// </summary>
    public IEnumerable<Photo> Photos { get; set; }
  }
}