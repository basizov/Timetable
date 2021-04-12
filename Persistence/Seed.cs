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
      }

      await context.Groups.AddRangeAsync(groups);
      await context.SaveChangesAsync();
    }
  }
}