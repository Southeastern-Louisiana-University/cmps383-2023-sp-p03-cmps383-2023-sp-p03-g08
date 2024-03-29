﻿using Route = SP23.P03.Web.Features.Routes.Route;
using SP23.P03.Web.Features.Trains;
using SP23.P03.Web.Features.TripStations;

namespace SP23.P03.Web.Features.Trips;

public class Trip
{
    public int Id { get; set; }
    public int TrainId { get; set; }
    public Train Train { get; set; }
    public int RouteId { get; set; }
    public Route Route { get; set; }
    public int CoachSeatsLeft { get; set; }
    public decimal CoachPrice { get; set; }
    public int FirstClassSeatsLeft { get; set; }
    public decimal FirstClassPrice { get; set; }
    public int SleepersLeft { get; set; }
    public decimal SleeperPrice { get; set; }
    public int RoomletsLeft { get; set; }
    public decimal RoomletsPrice { get;set; }
    public Boolean Dining { get; set; }
    public decimal BasePrice { get; set; }
    public List<TripStation> TripStations { get; set; } = new List<TripStation>();
}
