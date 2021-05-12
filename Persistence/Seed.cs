using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Domain.Entities;
using Domain.Enums;
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
            new User { UserName = "boris", Email = "boris@test.com", Status = (int)UserStatus.Student },
            new User { UserName = "adel", Email = "adel@test.com", Status = (int)UserStatus.Student },
            new User { UserName = "vova", Email = "vova@test.com", Status = (int)UserStatus.Student }
          }
        );

        foreach (var user in students)
          await userManager.CreateAsync(user, "Pa$$w0rd");
      }
    }
  }
}