namespace SP23.P03.Web.Features.RouteStations;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

public class RouteStationConfig : IEntityTypeConfiguration<RouteStation>
{
    public void Configure(EntityTypeBuilder<RouteStation> builder)
    {
       // builder.HasKey(x => new { x.TrainStationId, x.RouteId });
        builder.HasOne(x => x.Route).WithMany(x => x.TrainStations).HasForeignKey(x => x.RouteId);
        builder.HasOne(x => x.TrainStation).WithMany(x => x.Routes).HasForeignKey(x => x.TrainStationId);
    }

}
