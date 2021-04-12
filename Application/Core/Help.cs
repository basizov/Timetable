using Domain.Enums;

namespace Application.Core
{
  public static class Help
  {
    public static string ConvertEntityToItem(this Week week)
    {
      if (week == Week.Even)
        return ("Чет");
      return ("Нечет");
    }
    public static string ConvertEntityToItem(this SubjectType subjectType)
    {
      if (subjectType == SubjectType.LaboratoryWork)
        return ("Лаб. работа");
      else if (subjectType == SubjectType.Lecture)
        return ("Лекция");
      return ("Практика");
    }
    public static string ConvertEntityToItem(this SubjectNumber subjectTime)
    {
      if (subjectTime == SubjectNumber.First)
        return ("8:00 - 9:30");
      else if (subjectTime == SubjectNumber.Second)
        return ("9:40 - 11:10");
      else if (subjectTime == SubjectNumber.Third)
        return ("11:20 - 12:50");
      else if (subjectTime == SubjectNumber.Fourth)
        return ("13:30 - 15:00");
      else if (subjectTime == SubjectNumber.Fiveth)
        return ("15:10 - 16:40");
      else if (subjectTime == SubjectNumber.Sixth)
        return ("16:50 - 18:20");
      return ("18:30 - 20:00");
    }
  }
}