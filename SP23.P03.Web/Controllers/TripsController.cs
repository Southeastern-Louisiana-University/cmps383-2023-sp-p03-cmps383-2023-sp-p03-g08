using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using SP23.P03.Web.Data;
using SP23.P03.Web.Features.TrainStations;
using SP23.P03.Web.Features.Trips;
using SP23.P03.Web.Features.TripStations;

namespace SP23.P03.Web.Controllers;

[Route("api/trips")]
[ApiController]

public class TripsController : ControllerBase
{
    private readonly DbSet<Trip> trips;
    private readonly DbSet<TripStation> tripstations;
    private readonly DataContext dataContext;
    private readonly DbSet<Route> routes;

    public TripsController(DataContext dataContext)
    {
        this.dataContext = dataContext;
        trips = dataContext.Set<Trip>();
        tripstations = dataContext.Set<TripStation>();
        routes = dataContext.Set<Route>();
    }
}
