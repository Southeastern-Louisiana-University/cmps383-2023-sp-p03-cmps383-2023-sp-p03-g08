using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace SP23.P03.Web.Features.Trains;

public class TrainConfig : IEntityTypeConfiguration<Train>
{
    public void Configure(EntityTypeBuilder<Train> builder)
    {
        builder.Property(x => x.Name).IsRequired().HasMaxLength(75);
        builder.Property(x => x.Capacity).IsRequired();
    }

}
