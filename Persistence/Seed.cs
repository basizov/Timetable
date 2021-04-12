using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Domain.Entities;
using Domain.Enums;

namespace Persistence
{
  public class Seed
  {
    public static async Task SeedAsync(DataContext context)
    {
      if (context.Groups.Any())
        return;
      var groups = new List<Group>();

      for (int i = 1301; i <= 5344; ++i)
      {
        if (i % 100 == 45)
          i += 1000 - 44;
        groups.Add(
          new Group
          {
            Number = $"{i}",
            Days = new List<Day>
            {
              new Day
              {
                Name = "Понедельник",
                Week = Week.Even,
                Subjects = new List<Subject>
                {
                  new Subject
                  {
                    Discipline = "ТРПО",
                    Cabinet = "216a",
                    Building = 7,
                    SubjectType = "Лаб. работа",
                    SubjectTime = "9:40 - 12:50"
                  },
                  new Subject
                  {
                    Discipline = "БЖД",
                    Cabinet = "510",
                    Building = 7,
                    SubjectType = "Практика",
                    SubjectTime = "8:00 - 9:30"
                  }
                }
              },
              new Day
              {
                Name = "Вторник",
                Week = Week.Even,
                Subjects = new List<Subject>
                {
                  new Subject
                  {
                    Discipline = "Информационные технологии",
                    Cabinet = "216a",
                    Building = 7,
                    SubjectType = "Лаб. работа",
                    SubjectTime = "15:00 - 18:10"
                  }
                }
              },
              new Day
              {
                Name = "Среда",
                Week = Week.Even,
                Subjects = new List<Subject>
                {
                  new Subject
                  {
                    Discipline = "ТРПО",
                    Cabinet = "416",
                    Building = 7,
                    SubjectType = "Лекция",
                    SubjectTime = "13:30 - 15:00"
                  },
                  new Subject
                  {
                    Discipline = "Системное программирование",
                    Cabinet = "425",
                    Building = 7,
                    SubjectType = "Лаб. работа",
                    SubjectTime = "8:00 - 9:30"
                  },
                }
              },
              new Day
              {
                Name = "Четверг",
                Week = Week.Even,
                Subjects = new List<Subject>
                {
                  new Subject
                  {
                    Discipline = "БЖД",
                    Cabinet = "410",
                    Building = 7,
                    SubjectType = "Практика",
                    SubjectTime = "8:00 - 9:30"
                  }
                }
              },
              new Day
              {
                Name = "Пятница",
                Week = Week.Even
              },
              new Day
              {
                Name = "Суббота",
                Week = Week.Even,
                Subjects = new List<Subject>
                {
                  new Subject
                  {
                    Discipline = "ТРПО",
                    Cabinet = "126",
                    Building = 7,
                    SubjectType = "Практика",
                    SubjectTime = "8:00 - 9:30"
                  }
                }
              }
            }
          }
        );
      }

      await context.Groups.AddRangeAsync(groups);
      await context.SaveChangesAsync();
    }
  }
}