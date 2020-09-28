using System.Collections.Generic;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

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
        [HttpGet]
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
        [HttpPost, Authorize(Roles = "Admin")]
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
