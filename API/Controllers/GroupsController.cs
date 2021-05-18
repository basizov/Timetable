using System.Threading.Tasks;
using Application.Groups;
using MediatR;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
  public class GroupsController : BaseController
  {
    [HttpGet]
    public async Task<IActionResult> GetGroups(string label) =>
      HandleResult(await Mediator.Send(new List.Query { Label = label }));
  }
}