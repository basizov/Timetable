using System.Collections.Generic;
using Domain.Enums;

namespace Application.DTOs
{
  public class UserDTO
  {
    /// <summary>
    /// Идентификатор пользователя
    /// </summary>
    public string Id { get; set; }
    /// <summary>
    /// Ник пользователя
    /// </summary>
    public string Username { get; set; }
    /// <summary>
    /// Токен для входа пользователя
    /// </summary>
    public string Token { get; set; }
    /// <summary>
    /// Фотография пользователя
    /// </summary>
    public string Image { get; set; }
    /// <summary>
    /// Статус пользователя
    /// </summary>
    public string Status { get; set; }
    /// <summary>
    /// Флаг о админстве пользователя
    /// </summary>
    public bool IsAdmin { get; set; }
  }
}