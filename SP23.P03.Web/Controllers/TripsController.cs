using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using SP23.P03.Web.Data;
using SP23.P03.Web.Features.Authorization;
using SP23.P03.Web.Features.Trains;
using SP23.P03.Web.Features.TrainStations;
using SP23.P03.Web.Features.Trips;
using SP23.P03.Web.Features.TripStations;
using Route = SP23.P03.Web.Features.Routes.Route;


namespace SP23.P03.Web.Controllers;

[Route("api/trips")]
[ApiController]

public class TripsController : ControllerBase
{
    private readonly DbSet<Trip> trips;
    private readonly DbSet<TripStation> tripstations;
    private readonly DataContext dataContext;
    private readonly DbSet<Route> routes;
    private readonly DbSet<Train> trains; 

    public TripsController(DataContext dataContext)
    {
        this.dataContext = dataContext;
        trips = dataContext.Set<Trip>();
        tripstations = dataContext.Set<TripStation>();
        routes = dataContext.Set<Route>();
        trains = dataContext.Set<Train>();
    }

    [HttpGet]
    public IQueryable<TripDto> GetTrips()
    {
        return GetTripAndStationsDtos(trips, routes);
    }

    [HttpGet("{id}")]
    public ActionResult GetTripById(int id)
    {
        var result = GetTripAndStationsDtos(trips.Where(x => x.Id == id), routes);
        if (result == null)
        {
            return NotFound();
        }
        return Ok(result);
    }

    [HttpPost]
    [Authorize(Roles = RoleNames.Admin)]
    public ActionResult PostTrip(PostTripDto dto)
    {
        var coachprice = 105;
        var firstclassprice = 270;
        var sleeperprice = 370;
        var roomletprice = 400; //look into

        var train = trains.Where(x => x.Id == dto.TrainId).FirstOrDefault();
        if (train == null)
        {
            return BadRequest();
        }
        var route = routes.Include(r => r.TrainStations).Where(x => x.Id == dto.RouteId).FirstOrDefault();
        if (route == null)
        {
            return BadRequest();
        }

        var triptoadd = new Trip
        {
            TrainId = dto.TrainId, //=train.Id
            RouteId = dto.RouteId, //=route.Id
            CoachSeatsLeft = train.CoachCapacity,
            CoachPrice = coachprice,
            FirstClassSeatsLeft = train.FirstClassCapacity,
            FirstClassPrice = firstclassprice,
            SleepersLeft = train.SleeperCapacity,
            SleeperPrice = sleeperprice,
            RoomletsLeft = train.RoomletCapacity,
            RoomletsPrice = roomletprice, //somehow being returned as 0 in swagger? But correct in the DB?
            Dining = train.Dining,
            BasePrice = dto.BasePrice
        };
        trips.Add(triptoadd);
        dataContext.SaveChanges();
        foreach (var routestation in route.TrainStations)
        {
            triptoadd.TripStations.Add(new TripStation
            {
                TripId = triptoadd.Id,
                TrainStationId = routestation.Id,
                Name = routestation.Name,
                Address = routestation.Address,
                City = routestation.City,
                State = routestation.State,
                ArrivalDate = null, //set later
                ArrivalTime = null  //set later
            });
        }
        dataContext.SaveChanges();
       /* var triptoreturn = new TripDto
        {
            TrainId = triptoadd.Id,
            RouteId = triptoadd.RouteId,
            CoachSeatsLeft = triptoadd.CoachSeatsLeft,
            CoachPrice = triptoadd.CoachPrice,
            FirstClassSeatsLeft = triptoadd.FirstClassSeatsLeft,
            FirstClassPrice = triptoadd.FirstClassPrice,
            SleepersLeft = triptoadd.SleepersLeft,
            SleeperPrice = triptoadd.SleeperPrice,
            RoomletsLeft = triptoadd.RoomletsLeft,
            RoomletsPrice = triptoadd.RoomletsPrice,
            Dining = triptoadd.Dining,
            BasePrice = triptoadd.BasePrice,
            TripStations = triptoadd.TripStations.Select
        };*/

        return Ok(GetTripAndStationsDtos(trips.Where(x => x.Id == triptoadd.Id), routes));
        
    }

    [HttpPut("{tripid}/edittripstation/{tripstationid}")]
    [Authorize(Roles = RoleNames.Admin)]
    public ActionResult EditTripStationsOnTrip(int tripid, int tripstationid, TripStationEditDto dto)
    {
        var triptoedit = trips.Include(t => t.TripStations).FirstOrDefault(x => x.Id == tripid);
        if (triptoedit == null)
        {
            return NotFound("Trip doesn't exist");
        }

        var tripstationtoedit = triptoedit.TripStations.FirstOrDefault(x => x.Id == tripstationid);
        if (tripstationtoedit == null)
        {
            return NotFound("Trip station doesn't exist");
        }

        tripstationtoedit.ArrivalDate = dto.ArrivalDate;
        tripstationtoedit.ArrivalTime = dto.ArrivalTime;
        dataContext.SaveChanges();
        return Ok(GetTripAndStationsDtos(trips.Where(x => x.Id == triptoedit.Id), routes));
    }

    private static IQueryable<TripDto> GetTripAndStationsDtos(IQueryable<Trip> trips, IQueryable<Route> routes)
    {
        return trips.Select(x => new TripDto
        {
            Id = x.Id,
            TrainId = x.TrainId,
            RouteId = x.RouteId,
            RouteName = routes.Where(r => r.Id == x.RouteId).First().Name,
            CoachSeatsLeft = x.CoachSeatsLeft,
            CoachPrice = x.CoachPrice,
            FirstClassSeatsLeft = x.FirstClassSeatsLeft,
            FirstClassPrice = x.FirstClassPrice,
            SleepersLeft = x.SleepersLeft,
            SleeperPrice = x.SleeperPrice,
            RoomletsLeft = x.RoomletsLeft,
            Dining = x.Dining,
            BasePrice = x.BasePrice,
            TripStations = x.TripStations.Select(x => new TripStationDto
            {
                Id = x.Id,
                TripId = x.TripId,
                TrainStationId = x.TrainStationId,
                Name = x.Name,
                Address = x.Address,
                City = x.City,
                State = x.State,
                ArrivalDate = x.ArrivalDate,
                ArrivalTime = x.ArrivalTime
            }).ToList(),
        });
    }
}
