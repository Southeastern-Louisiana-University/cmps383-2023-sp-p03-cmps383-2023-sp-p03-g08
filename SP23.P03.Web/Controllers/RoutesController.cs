using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Routing;
using Microsoft.EntityFrameworkCore;
using SP23.P03.Web.Data;
using SP23.P03.Web.Features.Authorization;
using SP23.P03.Web.Features.Routes;
using SP23.P03.Web.Features.TrainStations;
using Route = SP23.P03.Web.Features.Routes.Route;

namespace SP23.P03.Web.Controllers;

[Route("api/routes")]
[ApiController]

public class RoutesController : ControllerBase
{
    private readonly DbSet<Route> routes;
    private readonly DbSet<TrainStation> trainStations;
    private readonly DataContext dataContext;

    public RoutesController(DataContext dataContext)
    {
        this.dataContext = dataContext;
        routes = dataContext.Set<Route>();
        trainStations = dataContext.Set<TrainStation>();
    }

    [HttpGet]
    public IQueryable<RouteDto> GetRoutes()
    {
        return GetRouteDtos(routes);
    }

    [HttpGet("{id}")]
    public ActionResult GetRouteById(int id)
    {
        var result = GetRouteDtos(routes.Where(x => x.Id == id)).FirstOrDefault();
        if (result == null)
        {
            return NotFound();
        }
        return Ok(result);
    }
    [HttpGet("{id}/trainstations")]
    public ActionResult GetRouteAndRouteStations(int id)
    {
        var result = GetRouteAndStationsDtos(routes.Where(x => x.Id == id)).FirstOrDefault();
        if (result == null)
        {
            return NotFound();
        }
        return Ok(result);
    }
    [HttpPost]
    [Authorize(Roles = RoleNames.Admin)]
    public ActionResult CreateRoute(RouteDto dto)
    {
        if (IsInvalid(dto))
        {
            return BadRequest();
        }
        var route = new Route
        {
            Name = dto.Name,
            Description = dto.Description,
            Order = dto.Order
        };
        routes.Add(route);
        dataContext.SaveChanges();
        var returnroute = new RouteDto
        {
            Name = route.Name,
            Description = route.Description,
            Order = route.Order
        };
        return Ok(returnroute);
    }
    [HttpPut("{id}")]
    [Authorize(Roles = RoleNames.Admin)]
    public ActionResult EditRoute(int id, RouteDto dto) 
    {
        if (IsInvalid(dto))
        {
            return BadRequest();
        }
        var routetoedit = routes.FirstOrDefault(x => x.Id == id);
        if (routetoedit == null)
        {
            return NotFound();
        }
        routetoedit.Name = dto.Name;
        routetoedit.Description = dto.Description;
        routetoedit.Order = dto.Order;
        dataContext.SaveChanges();
        var returnroute = new RouteDto
        {
            Name = routetoedit.Name,
            Description = routetoedit.Description,
            Order = routetoedit.Order
        };
        return Ok(returnroute);
    }
    [HttpPut("{routeid}/addstations")]
    [Authorize(Roles = RoleNames.Admin)]
    public ActionResult AddStationsToRoute(int routeid, int stationid) 
    {
        var routetoedit = routes.FirstOrDefault(x => x.Id == routeid);
        if (routetoedit == null)
        {
            return NotFound();
        }
        var stationtoadd = trainStations.FirstOrDefault(x => x.Id == stationid);
        if (stationtoadd == null)
        {
            return NotFound();
        }
        //make sure station isn't already in route (RouteTrainStation composite key would reject as well)
        var stationinroute = routetoedit.TrainStations.Find(x => x.Id == stationtoadd.Id);
        if (stationinroute != null) //this didn't catch the constraint? Try to find by name?
        {
            return BadRequest("Station already in the route.");
        }
        routetoedit.TrainStations.Add(stationtoadd);
        dataContext.SaveChanges();
        var resultofadd = GetRouteAndStationsDtos(routes.Where(x => x.Id == routetoedit.Id)).FirstOrDefault();
        return Ok(resultofadd);
    }

    private bool IsInvalid(RouteDto dto)
    {
        return string.IsNullOrWhiteSpace(dto.Name) ||
               dto.Name.Length > 50 ||
               string.IsNullOrWhiteSpace(dto.Description) ||
               string.IsNullOrWhiteSpace(dto.Order);
    }

    private static IQueryable<RouteDto> GetRouteDtos(IQueryable<Route> routes)
    {
        return routes.Select(x => new RouteDto
        {
            Id = x.Id,
            Name = x.Name,
            Description = x.Description,
            Order = x.Order 

        });
    }
    private static IQueryable<RouteAndStationsDto> GetRouteAndStationsDtos(IQueryable<Route> routes)
    {
        return routes.Select(x => new RouteAndStationsDto
        {
            Id = x.Id,
            Name = x.Name,
            Description = x.Description,
            Order = x.Order,
            TrainStations = x.TrainStations //works but exposes too much info. need dto
        });
    }
}
