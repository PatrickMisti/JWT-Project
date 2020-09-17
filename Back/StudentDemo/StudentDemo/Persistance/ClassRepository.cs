using Microsoft.EntityFrameworkCore;
using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace StudentDemo
{
    public class ClassRepository
    {
        public ClassDbContext db;
        public Repository<Student,ClassDbContext> _students { get; set; }
        public Repository<Teacher,ClassDbContext> _teacher { get; set; }
        public Repository<Classroom,ClassDbContext> _classroom { get; set; }
        
        public ClassRepository()
        {
            db = new ClassDbContext();
            _students = new Repository<Student,ClassDbContext>();
            _classroom = new Repository<Classroom,ClassDbContext>();
            _teacher = new Repository<Teacher, ClassDbContext>();
        }

        public IEnumerable<T> GetAll<T>() where T:new()
        {
            T tmp = new T();
            if (tmp is Student)
                return (IEnumerable<T>) _students.Get();
            else if (tmp is Classroom)
                return (IEnumerable<T>) _classroom.Get();
            else if (tmp is Teacher)
                return (IEnumerable<T>) _teacher.Get();

            return null;
        }
        public void CreateOne<T>(T input) where T : class
        {
            if (input is Classroom)
            {
                _classroom.Create(input as Classroom);
            }
            else if (input is Student)
            {
                _students.Create(input as Student);
            }
            else if (input is Teacher)
            {
                _teacher.Create(input as Teacher);
            }
        }
        public void UpdateOne<T>(T input) where T:class
        {
            if (input is Classroom)
            {
                _classroom.Update(input as Classroom);
            }
            if (input is Student)
            {
                _students.Update(input as Student);
            }
        }
        public Object DeleteOne<T>(int id) where T : new()
        {
            T temp = new T();
            if (temp is Classroom)
            {
                var all = _classroom.GetById(id);
                _classroom.Delete(all);
                return (T)(object)all;
            }
            if (temp is Student)
            {
                var all = _students.GetById(id);
                _students.Delete(all);
                return (T)(object)all;
            }
            return (T)(object)false;
        }
        public void DeleteAll<T>(List<T> input) where T:class
        {
            foreach(T temp in input)
            {
                if (temp is Student)
                    DeleteOne<Student>((int)(temp as Student).Id);
                if (temp is Classroom)
                    DeleteOne<Classroom>((temp as Classroom).ClassroomId);
            }
        }
    }
}
