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
    public static async Task SeedAsync(DataContext context, UserManager<User> userManager)
    {
      if (context.Groups.Any())
        return;
      var groups = new List<Group>();
      var users = new List<User>();
      var students = new List<Student>();

      if (!userManager.Users.Any())
      {
        users.AddRange(
          new List<User>
          {
            new User { DisplayName = "Boris", UserName = "boris", Email = "boris@test.com" },
            new User { DisplayName = "Adel", UserName = "adel", Email = "adel@test.com" },
            new User { DisplayName = "Vova", UserName = "vova", Email = "vova@test.com" }
          }
        );
        foreach (var user in users)
          await userManager.CreateAsync(user, "Pa$$w0rd");
        foreach (var user in users)
        {
          students.Add(
            new Student
            {
              UserId = user.Id,
              User = user,
            }
          );
        }
      }

      for (int i = 1301; i <= 5344; ++i)
      {
        if (i % 100 == 45)
          i += 1000 - 44;
        groups.Add(
          new Group
          {
            Number = $"{i}",
            Subjects = new List<Subject>
            {
              new Subject
              {
                Discipline = "ТРПО",
                Cabinet = "216a",
                Building = 7,
                SubjectType = SubjectType.LaboratoryWork,
                SubjectTime = SubjectNumber.Second,
                Days = new List<Day>
                {
                  new Day { Name = "Понедельник", Week = Week.Even },
                  new Day { Name = "Суббота", Week = Week.Even }
                }
                },
                new Subject
                {
                  Discipline = "БЖД",
                  Cabinet = "510",
                  Building = 7,
                  SubjectType = SubjectType.Practice,
                  SubjectTime = SubjectNumber.First,
                  Days = new List<Day>
                  { 
                    new Day { Name = "Понедельник", Week = Week.Even },
                    new Day { Name = "Вторник", Week = Week.Even },
                    new Day { Name = "Среда", Week = Week.Even }
                  }
                },
                new Subject
                {
                  Discipline = "Информационные технологии",
                  Cabinet = "216a",
                  Building = 7,
                  SubjectType = SubjectType.LaboratoryWork,
                  SubjectTime = SubjectNumber.Fourth,
                  Days = new List<Day>
                  {
                    new Day { Name = "Четверг", Week = Week.Even }
                  }
                },
                new Subject
                {
                  Discipline = "Системное программирование",
                  Cabinet = "425",
                  Building = 7,
                  SubjectType = SubjectType.LaboratoryWork,
                  SubjectTime = SubjectNumber.First,
                  Days = new List<Day>
                  {
                    new Day { Name = "Пятница", Week = Week.Even },
                  }
                }
            }
          }
        );
        if (i == 4343)
        {
          groups.Last().Students = students;
          foreach (var student in groups.Last().Students)
          {
            student.GroupId = groups.Last().Id;
            student.Group = groups.Last();
          }
        }
      }

      await context.Groups.AddRangeAsync(groups);
      await context.SaveChangesAsync();
    }
  }
}