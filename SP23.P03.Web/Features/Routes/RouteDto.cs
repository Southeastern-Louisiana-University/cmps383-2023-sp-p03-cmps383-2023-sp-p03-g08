using SP23.P03.Web.Features.TrainStations;

namespace SP23.P03.Web.Features.Routes;

public class RouteDto
{
    public int Id { get; set; }
    public string Name { get; set; } = string.Empty;
    public string Description { get; set; } = string.Empty;
    public string Order { get; set; } = string.Empty;
}

public class RouteAndStationsDto
{
    public int Id { get; set; }
    public string Name { get; set; } = string.Empty;
    public string Description { get; set; } = string.Empty;
    public string Order { get; set; } = string.Empty;
    public List<TrainStationDto> TrainStations { get; set; } = new List<TrainStationDto>();
}
