using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;

public static class Seed
{
    public static void Initialize(DB db, bool canCreate, bool mustMigrate)
    {
        if(canCreate) {
            db.Database.EnsureDeleted();
            db.Database.EnsureCreated();
        }
        if(mustMigrate) db.Database.Migrate();

        Project test = new Project {
            Name = "Test"
        };
        test.Sessions = new List<Session>{
            new Session { 
                Name = "1st Test Session",
                StartTime = DateTime.Now,
                EndTime = DateTime.Now.AddHours(3)
            },
            new Session { 
                Name = "2nd Test Session",
                StartTime = DateTime.Now,
                EndTime = DateTime.Now.AddHours(5)
                // BreakTime = 1600
            },
            // new Session { 
            //     Name = "3rd Test Session",
            //     StartTime = DateTime.Now,
            //     EndTime = DateTime.Now.AddHours(5)
            // },
            // new Session { 
            //     Name = "4th Test Session",
            //     StartTime = DateTime.Now,
            //     EndTime = DateTime.Now.AddHours(5)
            // }
        };
        db.Projects.Add(test);
        db.SaveChanges();
        // if(db.Cards.Any() || db.CardLists.Any()) return;
        // db.Table.Add(...) / SaveChanges()
    }
}