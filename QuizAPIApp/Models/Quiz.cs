using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace QuizAPIApp.Models
{
    public class Quiz
    {
        public int id { get; set; }
        public string title { get; set; }

        public string userId { get; set; }
    }
}
