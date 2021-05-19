using System;
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
    [HttpGet("{id}")]
    public async Task<IActionResult> GetGroup(Guid id) =>
      HandleResult(await Mediator.Send((new Details.Query { Id = id })));
  }
}