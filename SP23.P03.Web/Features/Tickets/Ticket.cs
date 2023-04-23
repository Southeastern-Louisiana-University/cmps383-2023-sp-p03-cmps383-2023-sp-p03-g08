using SP23.P03.Web.Features.Trips;

namespace SP23.P03.Web.Features.Tickets;

public class Ticket
{
    public int Id { get; set; }
    public int? UserId { get; set; }
    public decimal Price { get; set; }
    public string SeatType { get; set; } = string.Empty;
    public string DepartLocation { get; set; } = string.Empty;
    public string DepartDate { get; set; } = string.Empty;
    public string ArrivalLocation { get; set; } = string.Empty;
    public string ArrivalDate { get; set;} = string.Empty;
}
