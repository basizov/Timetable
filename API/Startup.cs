using API.Extensions;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Persistence;

namespace API
{
  public class Startup
  {
    public IConfiguration Configuration { get; }

    public Startup(IConfiguration configuration) =>
        Configuration = configuration;

    public void ConfigureServices(IServiceCollection services)
    {
      services.AddControllers();
      services.AddApplicationServices(Configuration);
      services.AddIdentityServices(Configuration);
    }

    public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
    {
      app.UseRouting();
      app.UseAuthorization();
      app.UseAuthentication();
      app.UseEndpoints(endpoints => endpoints.MapControllers());
    }
  }
}
