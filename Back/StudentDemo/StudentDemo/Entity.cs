using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace StudentDemo
{
    [Table("StudentTable",Schema = "Student")]
    public class Student:UserLogin
    {
        public string Name { get; set; }
        public int Age { get; set; }
    }
    public class Classroom
    {
        public int ClassroomId { get; set; }
        public string ClassName { get; set; }
        public List<Student> Students { get; set; }
        public List<Teacher> Teachers { get; set; }
        public Classroom()
        { }
        public Classroom(List<Student> students)
        {
            Students = students;
        }
    }
    [Table("TeacherTable",Schema = "Teacher")]
    public class Teacher:UserLogin
    {
        public string Name { get; set; }
        public int Age { get; set; }
    }
    public class UserLogin
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public long Id { get; set; }

        public string UserName { get; set; }
        public string Password { get; set; }
        public string RefreshToken { get; set; }
        public DateTime RefreshTokenExpireyTime { get; set; }
        public string Role { get; set; }
    }

    public class TokenApiModel
    {
        public string AccessToken { get; set; }
        public string RefreshToken { get; set; }
    }
}
