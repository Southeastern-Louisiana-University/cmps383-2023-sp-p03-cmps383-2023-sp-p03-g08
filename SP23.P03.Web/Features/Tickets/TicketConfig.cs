using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
namespace SP23.P03.Web.Features.Tickets;

public class TicketConfig : IEntityTypeConfiguration<Ticket>
{
    public void Configure(EntityTypeBuilder<Ticket> builder)
    {
        //userId?
        builder.Property(x => x.Price).IsRequired();
        builder.Property(x => x.SeatType).IsRequired();
        builder.Property(x => x.DepartLocation).IsRequired();
        builder.Property(x => x.DepartDate).IsRequired();
        builder.Property(x => x.ArrivalLocation).IsRequired();
        builder.Property(x => x.ArrivalDate).IsRequired();
    }
}
