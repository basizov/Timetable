namespace Application.Profiles
{
  public class Profile
  {
    /// <summary>
    /// Логин пользователя
    /// </summary>
    public string Username { get; set; }
    /// <summary>
    /// Имя пользователя
    /// </summary>
    public string DisplayName { get; set; }
    /// <summary>
    /// Фотография пользователя
    /// </summary>
    public string Image { get; set; }
    /// <summary>
    /// Номер группы пользователя
    /// </summary>
    public string Group { get; set; }
  }
}