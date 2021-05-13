namespace Infrastructure.Photos
{
  public class CloudinarySettings
  {
    /// <summary>
    /// Название фото
    /// </summary>
    public string CloudName { get; set; }
    /// <summary>
    /// Открытый ключ cloudinary
    /// </summary>
    public string ApiKey { get; set; }
    /// <summary>
    /// Секретный ключ cloudinary
    /// </summary>
    public string ApiSecret { get; set; }
  }
}