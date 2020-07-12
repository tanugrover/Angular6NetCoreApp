using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;

using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using QuizAPIApp.Db;

namespace QuizAPIApp.Controllers
{
    public class UserCredentials
    {
        public string Email { get; set; }
        public string password { get; set; }
    }
    [Route("api/account")]
    [ApiController]
    public class AccountController : ControllerBase
    {
        private readonly UserManager<IdentityUser> userManager;
        private readonly SignInManager<IdentityUser> signInManager;

        public AccountController(UserManager<IdentityUser> userManager, SignInManager<IdentityUser> signInManager)
        {
            this.userManager = userManager;
            this.signInManager = signInManager;
        }

        public SignInManager<IdentityUser> SignInManager { get; }

        [HttpPost]
        public async Task<IActionResult> RegisterUser([FromBody] UserCredentials userCredentials)
        {
            var user = new IdentityUser { UserName=userCredentials.Email,Email=userCredentials.Email};

            var result = await userManager.CreateAsync(user,userCredentials.password);
            if(!result.Succeeded)
            {
                return BadRequest(result.Errors);
            }

            
            await signInManager.SignInAsync(user, isPersistent: false);
            return Ok(createToken(user));
            
        }
        [HttpPost("login")]
        public async Task<IActionResult> Login([FromBody] UserCredentials userCredentials )
        {
            var result= await signInManager.PasswordSignInAsync(userCredentials.Email, userCredentials.password, isPersistent: false, false);
            if (!result.Succeeded)
            {
                return BadRequest(result.ToString());
            }
            var user = await userManager.FindByEmailAsync(userCredentials.Email);
            return Ok(createToken(user));
        }

        string createToken(IdentityUser user)
        {
            var claims = new Claim[] {
                new Claim( JwtRegisteredClaimNames.Sub , user.Id )
                };
            var signingKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes("this is my secret phrase"));
            var signingCredentials = new SigningCredentials(signingKey, SecurityAlgorithms.HmacSha256);
            var jwt = new JwtSecurityToken(signingCredentials: signingCredentials, claims: claims);
            return new JwtSecurityTokenHandler().WriteToken(jwt).ToString();
        }
    }
}