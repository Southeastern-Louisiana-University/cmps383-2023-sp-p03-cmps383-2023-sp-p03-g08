using SP23.P03.Web.Features.Trains;
using SP23.P03.Web.Features.TripStations;

namespace SP23.P03.Web.Features.Trips;

public class TripDto
{
    public int Id { get; set; }
    public int TrainId { get; set; }
    public int RouteId { get; set; }
    public string RouteName { get; set; } = string.Empty; //new
    public int CoachSeatsLeft { get; set; }
    public decimal CoachPrice { get; set; }
    public int FirstClassSeatsLeft { get; set; }
    public decimal FirstClassPrice { get; set; }
    public int SleepersLeft { get; set; }
    public decimal SleeperPrice { get; set; }
    public int RoomletsLeft { get; set; }
    public decimal RoomletsPrice { get; set; }
    public Boolean Dining { get; set; }
    public decimal BasePrice { get; set; }
    public List<TripStationDto> TripStations { get; set; } = new List<TripStationDto>();
} 

public class PostTripDto
{
    public int Id { get; set; }
    public int TrainId { get; set; }
    public int RouteId { get; set; }
    public decimal BasePrice { get; set; }
}

public class FindTrainDto
{
    public string DepartLocation { get; set; } = string.Empty;
    public string DepartDate { get; set; } = string.Empty;
    public string DepartTime { get; set; } = string.Empty;

    public string ArrivalLocation { get; set; } = string.Empty;
    public string ArrivalDate { get; set; } = string.Empty;
    public string ArrivalTime { get; set; } = string.Empty;
}
