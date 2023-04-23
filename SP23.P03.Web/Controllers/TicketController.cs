using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using SP23.P03.Web.Data;
using SP23.P03.Web.Features.Tickets;
using SP23.P03.Web.Features.Trains;

namespace SP23.P03.Web.Controllers;
[Route("api/tickets")]
[ApiController]

public class TicketController : ControllerBase
{
    private readonly DbSet<Ticket> tickets;
    private readonly DataContext dataContext;

    public TicketController(DataContext dataContext)
    {
        this.dataContext = dataContext;
        tickets = dataContext.Set<Ticket>();
    }

    [HttpGet]
    public IQueryable<TicketDto> GetTickets()
    {
        return GetTicketDtos(tickets);
    }

    [HttpGet("{userId}")]
    public ActionResult GetAllUsersTickets(int userId)
    {
        var result = GetTicketDtos(tickets.Where(x => x.UserId == userId));
        if (result == null)
        {
            return NotFound();
        }
        return Ok(result);
    }

    [HttpPost]
    public ActionResult CreateBooking(NewBookingDto dto)
    {
        if (isInvalid(dto))
        {
            return BadRequest();
        }

        var ticket = new Ticket
        {
            UserId = dto.UserId,
            Price = dto.Price,
            SeatType = dto.SeatType,
            DepartLocation = dto.DepartLocation,
            DepartDate = dto.DepartDate,
            ArrivalLocation = dto.ArrivalLocation,
            ArrivalDate = dto.ArrivalDate
        };
        tickets.Add(ticket);
        dataContext.SaveChanges();
        var returnticket = new TicketDto
        {
            Id = ticket.Id,
            UserId = ticket.UserId,
            Price = ticket.Price,
            SeatType = ticket.SeatType,
            DepartLocation = ticket.DepartLocation,
            DepartDate = ticket.DepartDate,
            ArrivalLocation = ticket.ArrivalLocation,
            ArrivalDate = ticket.ArrivalDate
        };
        return Ok(returnticket);
    }


    private bool isInvalid(NewBookingDto dto)
    {
        return string.IsNullOrWhiteSpace(dto.DepartLocation) || string.IsNullOrWhiteSpace(dto.DepartDate) ||
            string.IsNullOrWhiteSpace(dto.ArrivalLocation) || string.IsNullOrWhiteSpace(dto.ArrivalDate) ||
            string.IsNullOrWhiteSpace(dto.SeatType);
    }

    private static IQueryable<TicketDto> GetTicketDtos(IQueryable<Ticket> tickets)
    {
        return tickets
            .Select(x => new TicketDto
            {
                Id = x.Id,
                UserId = x.UserId,
                Price = x.Price,
                SeatType = x.SeatType,
                DepartLocation = x.DepartLocation,
                DepartDate = x.DepartDate,
                ArrivalLocation = x.ArrivalLocation,
                ArrivalDate = x.ArrivalDate
            });
    }
}
