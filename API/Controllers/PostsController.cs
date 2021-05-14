using System.Threading.Tasks;
using Application.Core;
using Application.Posts;
using Domain.Entities;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
  public class PostsController : BaseController
  {
    [HttpGet]
    public async Task<IActionResult> GetPosts([FromQuery]PagingParams pagingParams) =>
      HandlePagedResult(await Mediator.Send(new List.Query { PagingParams = pagingParams }));
    [HttpPost]
    public async Task<IActionResult> CreatePost(Post post) =>
      HandleResult(await Mediator.Send(new Create.Command { Post = post }));
  }
}