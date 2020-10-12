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
    public class TeacherController : ControllerBase
    {
        private readonly ClassRepository repo;

        public TeacherController()
        {
            repo = new ClassRepository();
        }
        [HttpGet]
        [Authorize(Roles = "User" + "," + "Admin")]
        public IEnumerable<Teacher> Get()
        {
            return repo.GetAll<Teacher>();
        }

        [HttpPost]
        [Authorize(Roles = "Admin")]
        public Teacher Post(Teacher teacher)
        {
            repo.CreateOne(teacher);
            return repo._teacher.GetById(teacher.Id);
        }
        [HttpDelete("{id}")]
        [Authorize(Roles = "Admin")]
        public Teacher Delete(int id)
        {
            var teacher = repo._teacher.GetById(id);
            repo.DeleteOne<Teacher>(id);
            return teacher;
        }
    }
}
