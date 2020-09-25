using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using StudentDemo;

namespace StudentDemo.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class StudentsController : ControllerBase
    {
        private readonly ClassRepository repo;

        public StudentsController()
        {
            repo = new ClassRepository();
        }

        // GET: api/Students
        [HttpGet, Authorize(Roles = "Super Admin")]
        public IEnumerable<Student> Get_studentsDb()
        {
            return repo._students.Get();
        }

        // GET: api/Students/1
        [HttpGet("{id}")]
        public Student GetStudentById(long id)
        {
            return repo._students.GetById(id);
        }
        //Put: api/students/id
        [HttpPut("{id}")]
        public Student PutStudent(int id, Student student)
        {
            //muss noch implementiert werden
            return student;
        }
        // Post: api/Students
        [HttpPost]
        public Student PostStudent(Student student)
        {
            repo._students.Create(student);
            return repo._students.GetById(student.Id);
        }

        // Delete: api/Students/1
        [HttpDelete("{id}")]
        public Student DeleteStudent(int id)
        {
            return (Student) repo.DeleteOne<Student>(id);
        }
    }
}
