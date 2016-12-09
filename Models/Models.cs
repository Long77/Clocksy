using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

// Create Project Class Models
public class User : HasId
{
    [Required]
    public int Id { get; set; }
    [Required]
    public string Name { get; set; }
    [Required]
    public string Password{ get; set; }

}
public class Project : HasId
{
    [Required]
    public int Id { get; set; }
    [Required]
    public string Name { get; set; }
    public List<Session> Sessions { get; set; }
}

public class Session : HasId
{
    [Required]
    public int Id { get; set; }
    [Required]
    public int ProjectId { get; set; }
    public string Name {get; set; }
    public DateTime StartTime { get; set; }
    public DateTime Date  { get; set; }
    public DateTime EndTime { get; set; }
    public double TotalTime { get; set; }
    public double BillableTime { get; set; }
    public double BreakTime { get; set; }
}

public class Time : HasId
{
    [Required]
    public int Id { get; set; }
    [Required]
    public int SessionId {get; set; }
    public double HourlyRate {get; set;}
}

// declare the DbSet<T>'s of our DB context, thus creating the tables
public partial class DB : IdentityDbContext<IdentityUser> {
    public DbSet<Project> Projects { get; set; }
    public DbSet<Time> Times { get; set; }
}
// create a Repo<T> services
public partial class Handler {
    public void RegisterRepos(IServiceCollection services){
        Repo<Project>.Register(services, "Projects");
        Repo<Time>.Register(services, "Times");
           // d => d.Include(l => l.Projects));
    }
}