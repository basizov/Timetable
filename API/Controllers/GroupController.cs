using System;
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
    [HttpGet("{id}")]
    public async Task<IActionResult> GetGroup(Guid id) => 
      HandleResult(await Mediator.Send(new Details.Query { Id = id }));
  }
}