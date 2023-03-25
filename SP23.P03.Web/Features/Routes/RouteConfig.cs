using Microsoft.EntityFrameworkCore.Metadata.Builders; //using EnFramCore;

namespace SP23.P03.Web.Features.Routes;

public class RouteConfig
{
    public void Configure(EntityTypeBuilder<Route> builder)
    {
        builder.Property(x => x.Name).IsRequired().HasMaxLength(50);
        builder.Property(x => x.Description).IsRequired();
        builder.Property(x => x.Order).IsRequired();
    }

}
