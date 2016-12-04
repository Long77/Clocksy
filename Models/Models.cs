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
    public string Email { get; set; }
    [Required]
    public string UserName { get; set; }
    [Required]
    public string Password { get; set; }

}
public class Project : HasId
{
    [Required]
    public int Id { get; set; }
    [Required]
    public string Title { get; set; }
    public string Text { get; set; }
    public int ProjectListId { get; set; }
}

public class ProjectList : HasId
{
    [Required]
    public int Id { get; set; }
    [Required]
    public string Title { get; set; }
    public string Summary { get; set; }
    public List<Project> Projects { get; set; }
    public int ProjectId { get;set; }
}

public class Session : HasId
{
    [Required]
    public int Id { get; set; }
    
    public class TimeWorked
    {
        //Create a Timespan object and display its value.
        static void CreateTimeSpan ( int hours, int minutes, int seconds)
        {
            TimeSpan elapsedTime = 
                new TimeSpan (hours, minutes, seconds);
                
                //Format the constructor for display.
            string ctor = String.Format( "TimeSpan( {0}, {1}, {2})",
                hours, minutes, seconds);

                //Display the constructor and its value.
            Console.WriteLine( "{0, -37}{1,16}",
                ctor, elapsedTime.ToString());
        }

        static void TimeCounter()
        {
            Console.WriteLine();
            Console.WriteLine( "{0,-37}{1,16}", "Constructor", "Value" );
            Console.WriteLine( "{0,-37}{1,16}", "-----------", "-----" );
        }
    }

    // public class BreakTime {
    //     int hours;
    //     int minutes; 
    //     int seconds;
    // }
}

// declare the DbSet<T>'s of our DB context, thus creating the tables
public partial class DB : IdentityDbContext<IdentityUser> {
    public DbSet<Project> Projects { get; set; }
    public DbSet<ProjectList> ProjectLists { get; set; }
}
// create a Repo<T> services
public partial class Handler {
    public void RegisterRepos(IServiceCollection services){
        Repo<Project>.Register(services, "Projects");
        Repo<ProjectList>.Register(services, "ProjectLists",
            d => d.Include(l => l.Projects));
    }
}