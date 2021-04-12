using System.Threading.Tasks;
using Application.Group;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
  public class GroupController : BaseController
  {
    [HttpGet]
    public async Task<IActionResult> GetGroups() =>
      HandleResult(await Mediator.Send(new List.Query { }));
  }
}