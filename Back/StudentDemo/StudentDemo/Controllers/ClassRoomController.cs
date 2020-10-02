using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace StudentDemo.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ClassRoomController : ControllerBase
    {
        private readonly ClassRepository repo;

        public ClassRoomController()
        {
            repo = new ClassRepository();
        }

        [HttpGet]
        //[Authorize(Roles = "User" +","+ "Admin")]
        public IEnumerable<Classroom> Get()
        {
            return repo.GetAll<Classroom>();
        }

        [HttpPost]
        [Authorize(Roles = "Admin")]
        public Classroom Post(Classroom classroom)
        {
            repo.CreateOne(classroom);
            return repo._classroom.GetById(classroom.ClassroomId);
        }
        [HttpDelete("{id}")]
        [Authorize(Roles = "Admin")]
        public Classroom Delete(int id)
        {
            var classRoom = repo._classroom.GetById(id);
            repo.DeleteOne<Classroom>(id);
            return classRoom;
        }
    }
}
