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
// give it some logic through DB
public class User : HasId
{
    [Required]
    public int Id { get; set; }
    [Required]
    public string Name { get; set; }
    [Required]
    public string Password{ get; set; }

}

/*

    -TODO List-
*** Must figure out why breakTime is logging a date from 1969 instead of break time taken.
** Also must address issue of Swagger's management of session data and making new projects in database.
*** Figure out how the hell to use Heroku to give database a brain.

More to Follow. Giggity.

*/
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
    public int ProjectId { get; set; }
    public Project Project { get;set; }
    public string Name {get; set; }
    public DateTime StartTime { get; set; }
    public DateTime EndTime { get; set; }
    public double TotalTime { get; set; }
    public double BillableTime { get; set; }
    public double BreakTime { get; set; }
}

// public class Time : HasId
// {
//     [Required]
//     public int Id { get; set; }
//     [Required]
//     public int SessionId {get; set; }
//     public double HourlyRate {get; set;}
// }

// declare the DbSet<T>'s of our DB context, thus creating the tables
public partial class DB : IdentityDbContext<IdentityUser> {
    public DbSet<Project> Projects { get; set; }
    // public DbSet<Time> Times { get; set; }
    public DbSet<Session> Sessions {get;set;}
}
// create a Repo<T> services
public partial class Handler {
    public void RegisterRepos(IServiceCollection services){
        Repo<Project>.Register(services, "Projects",
            d => d.Include(p => p.Sessions));
        // Repo<Time>.Register(services, "Times");
        Repo<Session>.Register(services, "Sessions");
    }
}