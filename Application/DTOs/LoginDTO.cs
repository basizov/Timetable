namespace Application.DTOs
{
  public class LoginDTO
  {
		/// <summary>
		/// Электронная почта пользователя
		/// </summary>
    public string Email { get; set; }
		/// <summary>
		/// Пароль пользователя
		/// </summary>
    public string Password { get; set; }
  }
}