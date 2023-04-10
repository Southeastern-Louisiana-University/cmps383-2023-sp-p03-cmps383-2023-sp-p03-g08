using SP23.P03.Web.Features.TrainStations;
using System.Text.Json.Serialization;

namespace SP23.P03.Web.Features.Routes;
    public class Route
    {
        public int Id { get; set; }
        public string Name { get; set; } = string.Empty;
        public string Description { get; set; } = string.Empty;
        public string Order { get; set; } = string.Empty;
        public List<TrainStation> TrainStations { get; set; } = new List<TrainStation>();

    }

