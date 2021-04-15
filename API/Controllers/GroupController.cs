using System;
using System.Threading.Tasks;
using Application.Group;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
  public class GroupController : BaseController
  {
    [HttpGet]
    public async Task<IActionResult> GetGroups([FromQuery]GroupParams pagingParams) =>
      HandlePagedResult(await Mediator.Send(new List.Query { PagingParams = pagingParams }));
    [HttpGet("{id}")]
    public async Task<IActionResult> GetGroup(Guid id) => 
      HandleResult(await Mediator.Send(new Details.Query { Id = id }));
  }
}