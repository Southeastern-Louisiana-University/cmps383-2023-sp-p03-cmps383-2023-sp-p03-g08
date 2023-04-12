using SP23.P03.Web.Features.TrainStations;
using SP23.P03.Web.Features.Trips;

namespace SP23.P03.Web.Features.TripStations;

public class TripStation
{
    public int Id { get; set; }
    public int TripId { get; set; }
    public Trip Trip { get; set; }
    public int TrainStationId { get; set; }
    public TrainStation TrainStation { get; set; }
    public string Name { get; set; } = string.Empty;
    public string Address { get; set; } = string.Empty;
    public string City { get; set; } = string.Empty;
    public string State { get; set; } = string.Empty;
    public DateTime ArrivalTime { get; set; }
}
