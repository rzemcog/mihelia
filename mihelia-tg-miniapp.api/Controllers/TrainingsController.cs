using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Mihelia.API.Models;

namespace Mihelia.API.Controllers;

[ApiController]
[Route("[controller]")]

public class TrainingsController : ControllerBase
{
    private readonly ILogger<TrainingsController> _logger;
    private readonly TrainingsContext _context;

    public TrainingsController(ILogger<TrainingsController> logger, TrainingsContext context)
    {
        _logger = logger;
        _context = context;
    }
    
    [HttpGet(Name = "GetTrainings")]
    public IEnumerable<Training> Get()
    {
        return _context.Trainings.ToList();
    }
    
    
}