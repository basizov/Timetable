using Application.DTOs;
using FluentValidation;

namespace Application.Group
{
  public class GroupValidator : AbstractValidator<GroupDTO>
  {
    public GroupValidator()
    {
      RuleFor(x => x.Number).NotEmpty();
      RuleFor(x => x.Subjects).NotEmpty();
    }
  }
}