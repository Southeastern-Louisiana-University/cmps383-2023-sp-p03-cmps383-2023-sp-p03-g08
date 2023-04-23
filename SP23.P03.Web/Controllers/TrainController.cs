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
            CoachCapacity = dto.CoachCapacity,
            FirstClassCapacity = dto.FirstClassCapacity,
            SleeperCapacity = dto.SleeperCapacity,
            RoomletCapacity = dto.RoomletCapacity,
            Dining = dto.Dining
        };
        trains.Add(train);
        dataContext.SaveChanges();
        var returnTrain = new TrainDto
        {
            Id = train.Id,
            Name = train.Name,
            CoachCapacity = train.CoachCapacity,
            FirstClassCapacity = train.FirstClassCapacity,
            SleeperCapacity = train.SleeperCapacity,
            RoomletCapacity = train.RoomletCapacity,
            Dining = train.Dining
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
        train.CoachCapacity = dto.CoachCapacity;
        train.FirstClassCapacity = dto.FirstClassCapacity;
        train.SleeperCapacity = dto.SleeperCapacity;
        train.RoomletCapacity = dto.RoomletCapacity;
        train.Dining = dto.Dining;


        dataContext.SaveChanges();
        var returnTrain = new TrainDto
        {
            Id = train.Id,
            Name = train.Name,
            CoachCapacity = train.CoachCapacity,
            FirstClassCapacity = train.FirstClassCapacity,
            SleeperCapacity = train.SleeperCapacity,
            RoomletCapacity = train.RoomletCapacity,
            Dining = train.Dining
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
               dto.Name.Length > 75 || dto.CoachCapacity < 0 || dto.FirstClassCapacity < 0 || dto.SleeperCapacity < 0
               || dto.RoomletCapacity < 0; //something for Dining
    }

    private static IQueryable<TrainDto> GetTrainDtos(IQueryable<Train> trains)
    {
        return trains
            .Select(x => new TrainDto
            {
                Id = x.Id,
                Name = x.Name,
                CoachCapacity = x.CoachCapacity,
                FirstClassCapacity = x.FirstClassCapacity,
                SleeperCapacity= x.SleeperCapacity,
                RoomletCapacity= x.RoomletCapacity,
                Dining = x.Dining
            });
    }

}
