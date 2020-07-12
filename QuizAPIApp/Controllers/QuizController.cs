using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using QuizAPIApp.Db;
using QuizAPIApp.Models;

namespace QuizApp.Controllers
{
    [Route("api/quiz")]
    [ApiController]
    public class QuizController : ControllerBase
    {
        readonly QuizDbContext context;

        public QuizController(QuizDbContext context)
        {
            this.context = context;
            SeedData();
        }

        private async void SeedData()
        {
            if (context.QuestionSet.Count <Question>() == 0)
            {
                await context.AddAsync<Question>(new Question { Id = 1, Text = "How many planets are there in Solar System?", CorrectAnswer = "8" });
                await context.SaveChangesAsync();
            }
        }
        [HttpPost]
        public async Task<IActionResult> Post([FromBody] Question question)
        {
            if (context.QuizSet.SingleOrDefault<Quiz>(q => q.id == question.quizId) != null)
            {
                await context.QuestionSet.AddAsync(question);
                context.SaveChanges();
                return Ok(question);
            }
            return NotFound("Invalid QuizID");
            // console.log(question);
        }

        [HttpPut ("{id}")]
        public async Task<IActionResult> Put(int id,[FromBody] Question question)
        {
            if(id!=question.Id)
            {
                return BadRequest();
            }
            //var result = await context.QuestionSet.SingleOrDefaultAsync(q=>q.Id==id);
            context.Entry(question).State = EntityState.Modified;
            await context.SaveChangesAsync();
            return Ok(question);
            
            // console.log(question);
        }
        [HttpGet]
        public IEnumerable<Question> Get()
        {
            return context.QuestionSet.AsParallel<Question>();
            
        }
        [HttpGet("{quizId}")]
        public IEnumerable<Question> Get([FromRoute] int quizId)
        {
            return context.QuestionSet.Where<Question>(q=>q.quizId==quizId);

        }


    }
}