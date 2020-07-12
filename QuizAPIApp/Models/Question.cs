using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace QuizAPIApp.Models
{
    public class Question
    {
        public int Id { get; set; }
        public string Text { get; set; }
        public string CorrectAnswer { get; set; }
        public string answer1 { get; set; }
        public string answer2 { get; set; }

        public string answer3 { get; set; }
        public string answer4 { get; set; }

        public int quizId { get; set; }
    }
}
