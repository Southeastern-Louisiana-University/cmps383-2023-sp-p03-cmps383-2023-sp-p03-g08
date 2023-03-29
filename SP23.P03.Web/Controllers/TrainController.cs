using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using SP23.P03.Web.Data;
using SP23.P03.Web.Features.Authorization;
using SP23.P03.Web.Features.Trains;

namespace SP23.P03.Web.Controllers;
[Route("api/trains")]
[ApiController]


public class TrainController : ControllerBase
{
    private readonly DbSet<Train> trains; 
    private readonly DataContext dataContext;

    public TrainController(DataContext dataContext)
    {
        this.dataContext = dataContext;
        trains = dataContext.Set<Train>();
    }

    [HttpGet]
    public IQueryable<TrainDto> GetTrains()
    {
        return GetTrainDtos(trains);
    }
    [HttpGet("{id}")]
    public ActionResult GetTrainById(int id)
    {
        var result = GetTrainDtos(trains.Where(x => x.Id == id)).FirstOrDefault();
        if (result == null)
        {
            return NotFound();
        }
        return Ok(result);
    }

    [HttpPost]
    [Authorize(Roles = RoleNames.Admin)]
    public ActionResult CreateTrain(TrainDto dto)
    {
        if (IsInvalid(dto))
        {
            return BadRequest();
        }

        var train = new Train
        {
            Name = dto.Name,
            Capacity = dto.Capacity
        };
        trains.Add(train);
        dataContext.SaveChanges();
        var returnTrain = new TrainDto
        {
            Id = train.Id,
            Name = train.Name,
            Capacity = train.Capacity
        };

        return Ok(returnTrain);
    }

    [HttpPut("{id}")]
    [Authorize(Roles = RoleNames.Admin)]
    public ActionResult EditTrain(int id, TrainDto dto)
    {
        if (IsInvalid(dto))
        {
            return BadRequest();
        }
        var train = trains.FirstOrDefault(x => x.Id == id);
        if (train == null)
        {
            return NotFound();
        }
        train.Name = dto.Name;
        train.Capacity = dto.Capacity;

        dataContext.SaveChanges();
        var returnTrain = new TrainDto
        {
            Id = train.Id,
            Name = train.Name,
            Capacity = train.Capacity
        };

        return Ok(returnTrain);
    }

    [HttpDelete("{id}")]
    [Authorize(Roles = RoleNames.Admin)]
    public ActionResult DeleteTrain(int id)
    {
        var train = trains.FirstOrDefault(x => x.Id == id);
        if (train == null)
        {
            return NotFound();
        }
        trains.Remove(train);
        dataContext.SaveChanges();
        return Ok();
    }

    private bool IsInvalid(TrainDto dto)
    {
        return string.IsNullOrWhiteSpace(dto.Name) ||
               dto.Name.Length > 75 || dto.Capacity < 0;
    }

    private static IQueryable<TrainDto> GetTrainDtos(IQueryable<Train> trains)
    {
        return trains
            .Select(x => new TrainDto
            {
                Id = x.Id,
                Name = x.Name,
                Capacity = x.Capacity
            });
    }

}
