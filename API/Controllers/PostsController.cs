using System.Collections.Generic;
using System.Threading.Tasks;
using Application.Core;
using Application.Posts;
using Domain.Entities;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
  public class PostsController : BaseController
  {
    [HttpGet]
    public async Task<IActionResult> GetPosts([FromQuery]PagingParams pagingParams) =>
      HandlePagedResult(await Mediator.Send(new List.Query { PagingParams = pagingParams }));
    [HttpPost]
    public async Task<IActionResult> CreatePost([FromForm] IFormFileCollection files, [FromForm] IFormFileCollection photos, [FromForm] Post post)
    {
      var filesEntity = HandleResult(await Mediator.Send(new Application.Files.Create.Command { Files = files }));
      var photosEntity = HandleResult(await Mediator.Send(new Application.Photos.Add.Command { Files = photos }));

      post.Files = (IEnumerable<File>)((filesEntity as ObjectResult).Value);
      post.Photos = (IEnumerable<Photo>)((photosEntity as ObjectResult).Value);
      return HandleResult(await Mediator.Send(new Create.Command { Post = post }));
    }
  }
}