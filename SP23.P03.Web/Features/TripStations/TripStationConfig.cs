using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Microsoft.EntityFrameworkCore;
namespace SP23.P03.Web.Features.TripStations;

public class TripStationConfig : IEntityTypeConfiguration<TripStation>
{
    public void Configure(EntityTypeBuilder<TripStation> builder)
    {

    }
}
