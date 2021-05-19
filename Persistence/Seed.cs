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
      var groups = new List<Group>();
      var users = new List<User>();

      if (!userManager.Users.Any())
      {
        users.AddRange(
          new List<User>
          {
            new User { UserName = "boris", Email = "boris@test.com", Status = UserStatus.Admin },
            new User { UserName = "adel", Email = "adel@test.com", Status = UserStatus.Student },
            new User { UserName = "vova", Email = "vova@test.com", Status = UserStatus.Student }
          }
        );

        foreach (var user in users)
          await userManager.CreateAsync(user, "Pa$$w0rd");
      }
      
      if (context.Groups.Any())
        return;

      for (int i = 1301; i <= 5344; ++i)
      {
        if (i % 100 == 45)
          i += 1000 - 44;
        if (i != 4343)
          groups.Add(new Group { Number = $"{i}" });
        else
        {
          groups.Add(new Group
          {
            Number = $"{i}",
            Timetable = new List<Timetable>
            {
              new Timetable
              {
                Day = "Понедельник",
                Week = true,
                Subject = "Технология разработки программного обеспечения",
                Teacher = "Александров Александр Александрович",
                Building = 7,
                Cabinet = "431",
                SubjectNumber = SubjectNumber.Third,
                SubjectType = SubjectType.Lecture
              },
              new Timetable
              {
                Day = "Понедельник",
                Week = true,
                Subject = "Безопасность жизнедеятельности",
                Teacher = "Калинин Петр Петрович",
                Building = 5,
                Cabinet = "411",
                SubjectNumber = SubjectNumber.First,
                SubjectType = SubjectType.Practice
              },
              new Timetable
              {
                Day = "Понедельник",
                Week = true,
                Subject = "Информационные технологии",
                Teacher = "Иванова Людмилла Ивановна",
                Building = 7,
                Cabinet = "211",
                SubjectNumber = SubjectNumber.Second,
                SubjectType = SubjectType.Lecture
              },
              new Timetable
              {
                Day = "Вторник",
                Week = true,
                Subject = "Информационные технологии",
                Teacher = "Иванова Людмилла Ивановна",
                SubjectNumber = SubjectNumber.Fourth,
                Building = 3,
                Cabinet = "215a",
                SubjectType = SubjectType.Laborotory
              },
              new Timetable
              {
                Day = "Вторник",
                Week = true,
                Subject = "Системное программирование",
                Teacher = "Безлепкин Антон Антоныч",
                SubjectNumber = SubjectNumber.Third,
                Building = 5,
                Cabinet = "341",
                SubjectType = SubjectType.Lecture
              },
              new Timetable
              {
                Day = "Среда",
                Week = true,
                Subject = "Системное программирование",
                Teacher = "Безлепкин Антон Антоныч",
                SubjectNumber = SubjectNumber.Third,
                Building = 1,
                Cabinet = "111",
                SubjectType = SubjectType.Laborotory
              },
              new Timetable
              {
                Day = "Среда",
                Week = true,
                Subject = "Экономика",
                Teacher = "Васильева Дина Васильевна",
                SubjectNumber = SubjectNumber.Fourth,
                Building = 8,
                Cabinet = "551",
                SubjectType = SubjectType.Practice
              },
              new Timetable
              {
                Day = "Четверг",
                Week = true,
                Subject = "Физическая культура",
                Teacher = "Василисова Василиса Ивановна",
                Building = 7,
                Cabinet = "Спорт зал",
                SubjectNumber = SubjectNumber.Second,
                SubjectType = SubjectType.Practice
              },
              new Timetable
              {
                Day = "Четверг",
                Week = true,
                Subject = "Безопасность жизнедеятельности",
                Teacher = "Калинин Петр Петрович",
                Building = 7,
                Cabinet = "410",
                SubjectNumber = SubjectNumber.First,
                SubjectType = SubjectType.Practice
              },
              new Timetable
              {
                Day = "Пятница",
                Week = true,
                Subject = "Наладчик технического оборудования",
                Teacher = "Пелагеин Алексндр Александрович",
                Building = 7,
                Cabinet = "214a",
                SubjectNumber = SubjectNumber.First,
                SubjectType = SubjectType.Laborotory
              },
              new Timetable
              {
                Day = "Пятница",
                Week = true,
                Subject = "Дискретная математика",
                Teacher = "Третнев Александр Александрович",
                Building = 5,
                Cabinet = "401",
                SubjectNumber = SubjectNumber.Third,
                SubjectType = SubjectType.Practice
              },
              new Timetable
              {
                Day = "Пятница",
                Week = true,
                Subject = "Английский язык",
                Teacher = "Петрова Наташа Петровна",
                Building = 5,
                Cabinet = "421",
                SubjectNumber = SubjectNumber.Fourth,
                SubjectType = SubjectType.Practice
              },
              new Timetable
              {
                Day = "Суббота",
                Week = true,
                Subject = "Документирование и сертификация",
                Teacher = "Петров Иван Петрович",
                Building = 3,
                Cabinet = "202",
                SubjectNumber = SubjectNumber.Third,
                SubjectType = SubjectType.Practice
              }
            }
          });
        }
      }

      await context.Groups.AddRangeAsync(groups);
      await context.SaveChangesAsync();
    }
  }
}