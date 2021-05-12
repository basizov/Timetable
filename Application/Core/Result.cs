namespace Application.Core
{
  public class Result<T>
  {
    /// <summary>
    /// Значение результата
    /// </summary>
    public T Value { get; set; }
    /// <summary>
    /// Строка ошибки
    /// </summary>
    public string Error { get; set; }
    /// <summary>
    /// Флаг, который символизирует успешность выполнения задачи
    /// </summary>
    public bool IsSuccess { get; set; }
    
    /// <summary>
    /// Успешное выполнение задачи
    /// </summary>
    /// <param name="value">Значение, которое следует передать в задаче</param>
    /// <returns>Экземпляр рещультата</returns>
    public static Result<T> Success(T value) => new Result<T> { IsSuccess = true, Value = value };
    /// <summary>
    /// Не успешное выполнение задачи
    /// </summary>
    /// <param name="error">Строка ошики</param>
    /// <returns>Экземпляр рещультата</returns>
    public static Result<T> Failure(string error) => new Result<T> { IsSuccess = false, Error = error };
  }
}