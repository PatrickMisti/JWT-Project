using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Reflection.Metadata.Ecma335;
using System.Threading.Tasks;

namespace StudentDemo
{
    public static class InitBean
    {
        
        public static void Init()
        {
            var db = new ClassRepository();

            if (!db.db.Database.EnsureCreated())
            {
                return;
            }

            var a = new Student
            {
                Name = "Hallo",
                Age = 11
            };
            db.CreateAll(a);



            var classroom = new Classroom
            {
                Students = new List<Student>()
            };
            classroom.Students.Add(new Student
            {
                Name = "Peter",
                Age = 10
            });

            classroom.Students.Add(new Student
            {
                Name = "Lisa",
                Age = 12
            });
            classroom.Students.Add(new Student
            {
                Name = "Herbert",
                Age = 14
            });
            classroom.ClassName = "1a";
            db.CreateAll(classroom);
        }
    }
}