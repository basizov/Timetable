using System.Threading.Tasks;
using Application.Photos;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
  public class PhotosController : BaseController
  {
    [HttpPost]
    public async Task<IActionResult> Add([FromForm] Add.Command command) =>
      HandleResult(await Mediator.Send(command));
  }
}