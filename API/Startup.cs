using API.Extensions;
using API.Middleware;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc.Authorization;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

namespace API
{
  public class Startup
  {
    private readonly IConfiguration _config;

    public Startup(IConfiguration config) =>
      _config = config;

    public void ConfigureServices(IServiceCollection services)
    {
      services.AddControllers(opt =>
      {
        var policy = new AuthorizationPolicyBuilder()
            .RequireAuthenticatedUser()
            .Build();

        opt.Filters.Add(new AuthorizeFilter(policy));
      });
      services.AddApplicationServices(_config);
      services.AddIdentityServices(_config);
    }

    public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
    {
      app.UseMiddleware<ExtensionMiddleware>();
      app.UseRouting();
      app.UseCors("CorsPolicy");
      app.UseAuthentication();
      app.UseAuthorization();
      app.UseEndpoints(endpoints => endpoints.MapControllers());
    }
  }
}
