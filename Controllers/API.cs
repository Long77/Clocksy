using Microsoft.AspNetCore.Mvc;
using System.Linq;
using Microsoft.EntityFrameworkCore;

[Route("/api/project")]
public class ProjectController : CRUDController<Project> {
    public ProjectController(IRepository<Project> r) : base(r){}

    [HttpGet("search")]
    public IActionResult Search([FromQuery]string term, int listId = -1){
        return Ok(r.Read(dbset => dbset.Where(project => 
            project.Name.ToLower().IndexOf(term.ToLower()) != -1
        )));
    }
} 

[Route("/api/session")]
public class SessionController : CRUDController<Session> {
    private DB db;
    public SessionController(IRepository<Session> r, DB db) : base(r){
        this.db = db;
    }
}
