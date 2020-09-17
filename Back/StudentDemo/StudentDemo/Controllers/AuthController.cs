using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using StudentDemo.Utils;

namespace StudentDemo.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private readonly ClassRepository repo;
        private readonly ITokenService tokenService;

        public AuthController(ITokenService tokenService)
        {
            repo = new ClassRepository();
            this.tokenService = tokenService ?? throw new ArgumentNullException(nameof(tokenService));
        }


        [HttpPost, Route("login")]
        public IActionResult Login([FromBody] UserLogin userLogin)
        {
            if (userLogin == null)
                return BadRequest("Invalid client request");

            var user = repo.db.UserLogins.FirstOrDefault(u =>
                u.UserName == userLogin.UserName && u.Password == userLogin.Password);
            if (user == null)
                return Unauthorized();
            var claims = new List<Claim>
            {
                new Claim(ClaimTypes.Name, user.UserName),
                new Claim(ClaimTypes.Role,user.Role)
            };
            var accessToken = tokenService.GenerateAccessToken(claims);
            var refreshToken = tokenService.GenerateRefreshToken();

            user.RefreshToken = refreshToken;
            user.RefreshTokenExpireyTime = DateTime.Now.AddHours(1);

            repo.db.SaveChanges();

            return Ok(new
            {
                Token = accessToken,
                RefreshToken = refreshToken
            });
        }
    }
}