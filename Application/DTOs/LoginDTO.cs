namespace Application.DTOs
{
  public class LoginDTO
  {
    /// <summary>
    /// Логин для авторизации (username или email)
    /// </summary>
    public string Login { get; set; }
    /// <summary>
    /// Пароль пользователя
    /// </summary>
    public string Password { get; set; }
  }
}