using Microsoft.EntityFrameworkCore;
using QuizAPIApp.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace QuizAPIApp.Db
{
    public class QuizDbContext : DbContext        
    {
        public DbSet<Question> QuestionSet { get; set; }
        public DbSet<Quiz> QuizSet { get; set; }
        public QuizDbContext(DbContextOptions<QuizDbContext> options) : base(options)
        {

        }
    }
}
