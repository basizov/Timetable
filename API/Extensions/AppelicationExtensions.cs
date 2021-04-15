using Application.Core;
using Application.Group;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Persistence;

namespace API.Extensions
{
  public static class AppelicationExtensions
  {
    public static IServiceCollection AddApplicationServices(this IServiceCollection services, IConfiguration config)
    {
      services.AddDbContext<DataContext>(opt => opt.UseSqlite(config.GetConnectionString("DefaultConnection")));
      services.AddCors(o => o.AddPolicy("CorsPolicy", policy =>
        policy.AllowAnyMethod().AllowAnyHeader().WithOrigins("http://localhost:3000")));
      services.AddMediatR(typeof(List.Handler).Assembly);
      services.AddAutoMapper(typeof(Mapping).Assembly);
      return (services);
    }
  }
}