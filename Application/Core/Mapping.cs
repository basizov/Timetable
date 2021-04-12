using Application.DTOs;
using AutoMapper;
using Domain.Entities;

namespace Application.Core
{
  public class Mapping : Profile
  {
    public Mapping()
    {
      CreateMap<Subject, SubjectDTO>()
        .ForMember(s => s.SubjectType, o => o.MapFrom(s => s.SubjectType.ConvertEntityToItem()))
        .ForMember(s => s.SubjectTime, o => o.MapFrom(s => s.SubjectTime.ConvertEntityToItem()));
      CreateMap<Day, DayDTO>()
        .ForMember(d => d.Week, o => o.MapFrom(d => d.Week.ConvertEntityToItem()));
      CreateMap<Domain.Entities.Group, GroupDTO>();
    }
  }
}