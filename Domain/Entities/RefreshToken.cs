using System;

namespace Domain.Entities
{
  public class RefreshToken
  {
    /// <summary>
    /// Идентификатор
    /// </summary>
    public int Id { get; set; }
    /// <summary>
    /// Пользователь
    /// </summary>
    public User User { get; set; }
    /// <summary>
    /// Токен пользователя
    /// </summary>
    public string Token { get; set; }
    /// <summary>
    /// Срок действия (Истекает)
    /// </summary>
    public DateTime Expires { get; set; } = DateTime.UtcNow.AddDays(7);
    /// <summary>
    /// Истечен ли токен
    /// </summary>
    public bool IsExpired => DateTime.UtcNow >= Expires;
    /// <summary>
    /// Дата отзыва токена
    /// </summary>
    public DateTime? Revoked { get; set; }
    /// <summary>
    /// Активен ли токен
    /// </summary>
    public bool IsActive => Revoked == null && !IsExpired;
  }
}