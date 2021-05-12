using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Domain.Entities;
using Microsoft.AspNetCore.Identity;

namespace Persistence
{
  public class Seed
  {
    public static async Task SeedDataAsync(DataContext context, UserManager<User> userManager)
    {
      var students = new List<User>();

      if (!userManager.Users.Any())
      {
        students.AddRange(
          new List<User>
          {
            new User { UserName = "boris", Email = "boris@test.com" },
            new User { UserName = "adel", Email = "adel@test.com" },
            new User { UserName = "vova", Email = "vova@test.com" }
          }
        );

        foreach (var user in students)
          await userManager.CreateAsync(user, "Pa$$w0rd");
      }
    }
  }
}