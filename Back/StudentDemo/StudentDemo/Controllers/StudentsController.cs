using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
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
        [HttpGet]
        public IEnumerable<Student> Get_studentsDb()
        {
            return repo._students.Get();
        }

        // GET: api/Students/1
        [HttpGet("{id}")]
        public Student GetStudentById(int id)
        {
            return repo._students.GetById(id);
        }

        // Post: api/Students
        [HttpPost]
        public Student PostStudent(Student student)
        {
            repo._students.Create(student);
            return repo._students.GetById(student.StudentId);
        }

        // Delete: api/Students/1
        [HttpDelete("{id}")]
        public Student DeleteStudent(int id)
        {
            return (Student) repo.DeleteOne<Student>(id);
        }
        /*
        // GET: api/Students/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Student>> GetStudent(int id)
        {
            /*var student = await _context._studentsDb.FindAsync(id);

            if (student == null)
            {
                return NotFound();
            }

            return student;
            return null;
        }

        // PUT: api/Students/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutStudent(int id, Student student)
        {
            if (id != student.StudentId)
            {
                return BadRequest();
            }

            //_context.Entry(student).State = EntityState.Modified;

            try
            {
                //await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!StudentExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Students
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<Student>> PostStudent(Student student)
        {
            //_context._studentsDb.Add(student);
            //await _context.SaveChangesAsync();

            return CreatedAtAction("GetStudent", new { id = student.StudentId }, student);
        }

        // DELETE: api/Students/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<Student>> DeleteStudent(int id)
        {
            /*var student = await _context._studentsDb.FindAsync(id);
            if (student == null)
            {
                return NotFound();
            }

            /_context._studentsDb.Remove(student);
            //await _context.SaveChangesAsync();

            return null;
        }

        private bool StudentExists(int id)
        {
            //return _context._studentsDb.Any(e => e.StudentId == id);
            return false;
        }
    */
    }
}
