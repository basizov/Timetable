using Application.DTOs;
using AutoMapper;
using Domain.Entities;

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
      CreateMap<Student, StudentDTO>();
      CreateMap<User, UserDTO>()
        .ForMember(d => d.Image, o => o.MapFrom(s => s.Photo.Url));
      CreateMap<User, LoginDTO>();
      CreateMap<User, Profiles.Profile>()
        .ForMember(d => d.Image, o => o.MapFrom(s => s.Photo.Url));
    }
  }
}