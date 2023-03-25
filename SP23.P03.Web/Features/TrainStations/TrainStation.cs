using SP23.P03.Web.Features.Authorization;
using Route = SP23.P03.Web.Features.Routes.Route;
namespace SP23.P03.Web.Features.TrainStations;

public class TrainStation
{
    public int Id { get; set; }

    public string Name { get; set; } = string.Empty;

    public string Address { get; set; } = string.Empty;

    public string City { get; set; } = string.Empty;

    public string State { get; set; } = string.Empty;


    public int? ManagerId { get; set; }
    public virtual User? Manager { get; set; }
    public List<Route> Routes { get; set; } = new List<Route>();
}