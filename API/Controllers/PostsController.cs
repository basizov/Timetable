using System.Threading.Tasks;
using Application.Posts;
using Domain.Entities;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
  public class PostsController : BaseController
  {
    [HttpGet]
    public async Task<IActionResult> GetGroups() =>
      HandleResult(await Mediator.Send(new List.Query { }));
    [HttpPost]
    public async Task<IActionResult> CreateFile(Post post) =>
      HandleResult(await Mediator.Send(new Create.Command { Post = post }));
  }
}