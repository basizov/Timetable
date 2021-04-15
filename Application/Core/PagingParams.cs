namespace Application.Core
{
  public class PagingParams
  {
    private const int MAX_PAGESIZE = 50;
    private int _pageSize = 10;

    public int PageNumber { get; set; } = 1;
    public int PageSize
    {
      get => _pageSize;
      set => _pageSize = value > MAX_PAGESIZE ? MAX_PAGESIZE : value;
    }
    
  }
}