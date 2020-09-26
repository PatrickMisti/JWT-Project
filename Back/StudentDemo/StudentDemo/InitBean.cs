using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Reflection.Metadata.Ecma335;
using System.Security.Claims;
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

            List<Classroom> list = new List<Classroom>
            {
                new Classroom
                {
                    ClassName = "1.Klasse",
                    Students = new List<Student>(),
                    Teachers = new List<Teacher>()
                },
                new Classroom
                {
                    ClassName = "2.Klasse",
                    Students = new List<Student>(),
                    Teachers = new List<Teacher>()
                },
                new Classroom
                {
                    ClassName = "3.Klasse",
                    Students = new List<Student>(),
                    Teachers = new List<Teacher>()
                },
                new Classroom
                {
                    ClassName = "4.Klasse",
                    Students = new List<Student>(),
                    Teachers = new List<Teacher>()
                },
                new Classroom
                {
                    ClassName = "5.Klasse",
                    Students = new List<Student>(),
                    Teachers = new List<Teacher>()
                }
            };
            foreach (Classroom c in list)
            {
                db.CreateOne(c);
            }
            db.db.UserLogins.Add(new UserLogin
            {
                UserName = "Admin",
                Password = "Admin",
                Role = "Admin"
            });
            db.db.SaveChanges();
        }
    }
}