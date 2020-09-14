using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace StudentDemo
{
    public class Student
    {
        public int StudentId { get; set; }
        public string Name { get; set; }
        public int Age { get; set; }
    }
    public class Classroom
    {
        public int ClassroomId { get; set; }
        public string ClassName { get; set; }
        public List<Student> Students { get; set; }

        public Classroom()
        { }
        public Classroom(List<Student> students)
        {
            Students = students;
        }
    }
}
