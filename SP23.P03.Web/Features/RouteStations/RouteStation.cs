namespace SP23.P03.Web.Features.RouteStations;
using SP23.P03.Web.Features.TrainStations;
using SP23.P03.Web.Features.Routes;

public class RouteStation
{
    public int Id { get; set; }
    public int TrainStationId { get; set; }
    public TrainStation TrainStation { get; set; }
    public int RouteId { get; set; }
    public Route Route { get; set; }
}
