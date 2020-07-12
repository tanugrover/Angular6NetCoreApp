using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using QuizAPIApp.Db;
using QuizAPIApp.Models;

namespace QuizAPIApp.Controllers
{
    [Route("api/quizzes")]
    [ApiController]
    public class QuizsController : ControllerBase
    {
        private readonly QuizDbContext _context;

        public QuizsController(QuizDbContext context)
        {
            _context = context;
        }

        // GET: api/Quizs
        [Authorize]
        [HttpGet]
        public IEnumerable<Quiz> GetQuizSet()
        {
            var userId = HttpContext.User.Claims.First().Value;
            return  _context.QuizSet.Where(q=> q.userId ==userId);
        }

        [HttpGet("all")]
        public IEnumerable<Quiz> GetAllQuizSet()
        {
            //var userId = HttpContext.User.Claims.First().Value;
            return _context.QuizSet;//.Where(q => q.userId == userId);
        }

        // GET: api/Quizs/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Quiz>> GetQuiz(int id)
        {
            var quiz = await _context.QuizSet.FindAsync(id);

            if (quiz == null)
            {
                return NotFound();
            }

            return quiz;
        }

        // PUT: api/Quizs/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutQuiz(int id, Quiz quiz)
        {
            if (id != quiz.id)
            {
                return BadRequest();
            }

            _context.Entry(quiz).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!QuizExists(id))
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

        // POST: api/Quizs
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [Authorize]
        [HttpPost]
        public async Task<ActionResult<Quiz>> PostQuiz([FromBody]Quiz quiz)
        {
            var userId = HttpContext.User.Claims.First().Value;
            quiz.userId = userId;
            _context.QuizSet.Add(quiz);
            await _context.SaveChangesAsync();

            
           
            return CreatedAtAction("GetQuiz", new { id = quiz.id }, quiz);
        }

        // DELETE: api/Quizs/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<Quiz>> DeleteQuiz(int id)
        {
            var quiz = await _context.QuizSet.FindAsync(id);
            if (quiz == null)
            {
                return NotFound();
            }

            _context.QuizSet.Remove(quiz);
            await _context.SaveChangesAsync();

            return quiz;
        }

        private bool QuizExists(int id)
        {
            return _context.QuizSet.Any(e => e.id == id);
        }
    }
}
