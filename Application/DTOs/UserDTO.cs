namespace Application.DTOs
{
  public class UserDTO
  {
		/// <summary>
		/// Псевдоним пользователя
		/// </summary>
    public string DisplayName { get; set; }
		/// <summary>
		/// Токен пользователя
		/// </summary>
    public string Token { get; set; }
		/// <summary>
		/// Имя пользователя
		/// </summary>
    public string Username { get; set; }
		/// <summary>
		/// Изображение пользователя
		/// </summary>
    public string Image { get; set; }
  }
}