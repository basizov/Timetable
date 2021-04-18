using Domain.Entities;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace Persistence
{
  public class DataContext : IdentityDbContext<User>
  {
    public DbSet<Group> Groups { get; set; }
    public DbSet<Student> Students { get; set; }

    public DataContext(DbContextOptions options) : base(options) { }
  }
}