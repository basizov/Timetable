using Application.DTOs;
using AutoMapper;
using Domain.Entities;

namespace Application.Core
{
  public class Mapping : Profile
  {
    public Mapping()
    {
      CreateMap<Subject, SubjectDTO>();
      CreateMap<Day, DayDTO>();
      CreateMap<Domain.Entities.Group, GroupDTO>();
    }
  }
}