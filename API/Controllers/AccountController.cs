using System.Linq;
using System;
using System.Security.Claims;
using System.Threading.Tasks;
using API.Services;
using Application.Core;
using Application.DTOs;
using Domain.Entities;
using Domain.Enums;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{
  [ApiController]
  [Route("api/[controller]")]
  public class AccountController : ControllerBase
  {
    private readonly UserManager<User> _userManager;
    private readonly SignInManager<User> _signInManager;
    private readonly TokenService _tokenService;

    public AccountController(UserManager<User> userManager, SignInManager<User> signInManager, TokenService tokenService)
    {
      _tokenService = tokenService;
      _signInManager = signInManager;
      _userManager = userManager;
    }
    
    [AllowAnonymous]
    [HttpPost("login")]
    public async Task<ActionResult<UserDTO>> Login(LoginDTO loginDTO)
    {
      var user = await _userManager.Users
        .Include(u => u.Photo)
        .FirstOrDefaultAsync(u => u.Email == loginDTO.Login || u.UserName == loginDTO.Login);

      if (user == null)
        return (Unauthorized("Неправильная почта"));
      var result = await _signInManager.CheckPasswordSignInAsync(user, loginDTO.Password, false);

      if (result.Succeeded)
      {
        await SetRefreshToken(user);
        return (ConvertEntityToUser(user));
      }
      return (Unauthorized("Неправильный пароль"));
    }
    [Authorize]
    [HttpGet]
    public async Task<ActionResult<UserDTO>> GetCurrentUser()
    {
      var user = await _userManager.Users
        .Include(u => u.Photo)
        .FirstOrDefaultAsync(u => u.Email == User.FindFirstValue(ClaimTypes.Email));
      
      if (user != null)
      {
        await SetRefreshToken(user);
        return (ConvertEntityToUser(user));
      }
      return (Unauthorized());
    }
    [Authorize]
    [HttpPost("refreshToken")]
    public async Task<ActionResult<UserDTO>> RefreshToken()
    {
      var refreshToken = Request.Cookies["refreshToken"];
      var user = await _userManager.Users
        .Include(u => u.RefreshTokens)
        .Include(u => u.Photo)
        .FirstOrDefaultAsync(u => u.UserName == User.FindFirstValue(ClaimTypes.Name));

      if (user == null)
        return Unauthorized();
      var oldToken = user.RefreshTokens.SingleOrDefault(u => u.Token == refreshToken);

      if (oldToken != null && !oldToken.IsActive)
        return Unauthorized();
      return (ConvertEntityToUser(user));
    }

    private async Task SetRefreshToken(User user)
    {
      var refreshToken = _tokenService.GenerateRefreshToken();

      user.RefreshTokens.Add(refreshToken);
      await _userManager.UpdateAsync(user);
      var cookieOptions = new CookieOptions
      {
        HttpOnly = true,
        Expires = DateTime.UtcNow.AddDays(7)
      };

      Response.Cookies.Append("refreshToken", refreshToken.Token, cookieOptions);
    }
    private UserDTO ConvertEntityToUser(User user)
    {
      if (user == null)
        return (null);
      return (new UserDTO
      {
        Image = user?.Photo?.Url,
        Token = _tokenService.CreateToken(user),
        Username = user.UserName,
        Status = user.Status.ConvertEntityToItem(),
        IsAdmin = user.Status == UserStatus.Admin
      });
    }
  }
}