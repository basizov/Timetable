using System.Linq;
using System;
using System.Threading.Tasks;
using Application.Files;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.StaticFiles;
using Persistence;

namespace API.Controllers
{
  public class FilesController : BaseController
  {
      private readonly DataContext _context;

    public FilesController(DataContext context) =>
      _context = context;
      
    [HttpPost]
    public async Task<IActionResult> CreateFile([FromForm] IFormFileCollection files) =>
      HandleResult(await Mediator.Send(new Create.Command { Files = files }));

    [HttpGet("{id}")]
    public async Task<IActionResult> GetFile(Guid id)
    {
      var fileProvider = new FileExtensionContentTypeProvider();
      var file = await _context.Files.FindAsync(id);
      var mas = System.IO.File.ReadAllBytes(file.Path);
      var subpath = $".{file.Name.Split('.').Last()}";

      if (!fileProvider.TryGetContentType(subpath, out string contentType))
        throw new ArgumentOutOfRangeException($"Unable to find Content Type for file name {file.Name}.");
      return File(mas, contentType, file.Name);
    }
  }
}