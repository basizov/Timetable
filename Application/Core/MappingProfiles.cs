using Application.DTOs;
using AutoMapper;
using Domain.Entities;
using Domain.Enums;

namespace Application.Core
{
  public class MappingProfiles : Profile
  {
    public MappingProfiles()
    {
      CreateMap<File, FileDTO>();
      CreateMap<Group, GroupDTO>();
      CreateMap<Photo, PhotoDTO>();
      CreateMap<Post, PostDTO>();
      CreateMap<Timetable, TimetableDTO>()
        .ForMember(s => s.Week, o => o.MapFrom(s => s.Week.ConvertEntityToItem()))
        .ForMember(s => s.SubjectNumber, o => o.MapFrom(s => s.SubjectNumber.ConvertEntityToItem()))
        .ForMember(s => s.SubjectType, o => o.MapFrom(s => s.SubjectType.ConvertEntityToItem()));
      CreateMap<Student, StudentDTO>();
      CreateMap<User, UserDTO>()
        .ForMember(s => s.Status, o => o.MapFrom(s => s.Status.ConvertEntityToItem()))
        .ForMember(s => s.IsAdmin, o => o.MapFrom(s => s.Status == UserStatus.Admin))
        .ForMember(d => d.Image, o => o.MapFrom(s => s.Photo.Url));
      CreateMap<User, LoginDTO>();
      CreateMap<User, Profiles.Profile>()
        .ForMember(s => s.Status, o => o.MapFrom(s => s.Status.ConvertEntityToItem()))
        .ForMember(s => s.IsAdmin, o => o.MapFrom(s => s.Status == UserStatus.Admin))
        .ForMember(d => d.Image, o => o.MapFrom(s => s.Photo.Url));
    }
  }
}