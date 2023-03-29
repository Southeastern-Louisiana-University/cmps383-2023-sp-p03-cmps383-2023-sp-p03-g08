using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using SP23.P03.Web.Data;
using SP23.P03.Web.Extensions;
using SP23.P03.Web.Features.Authorization;
using SP23.P03.Web.Features.Passengers;

namespace SP23.P03.Web.Controllers
{
    [Route("api/passengers")]
    [ApiController]
    public class PassengersController : ControllerBase
    {
        private readonly DbSet<Passenger> passengers;
        private readonly DataContext dataContext;
        private readonly UserManager<User> userManager;
        public PassengersController(DataContext dataContext,
                                    UserManager<User> userManager)
        {
            this.dataContext = dataContext;
            passengers = dataContext.Set<Passenger>();
            this.userManager = userManager;
        }

        [HttpGet("{id}")]
        [Authorize]
        public ActionResult<PassengerDto> GetPassengerById([FromRoute] int id)
        {
            var passenger = passengers.FirstOrDefault(x => x.Id == id);

            if (passenger == null)
            {
                return NotFound();
            }

            if (!(User.IsInRole(RoleNames.Admin) || passenger.OwnerId == User.GetCurrentUserId()))
            {
                return Forbid();
            }

            var passengerDto = new PassengerDto
            {
                Id = passenger.Id,
                OwnerId = passenger.OwnerId,
                FirstName = passenger.FirstName,
                LastName = passenger.LastName,
                Birthday = passenger.Birthday,

            };

            return Ok(passengerDto);
        }

        [HttpGet("me")]
        [Authorize]
        public ActionResult<ICollection<PassengerDto>> GetMyPassengers()
        {
            var myId = User.GetCurrentUserId();
            if (myId == null)
            {
                return Unauthorized("Error: Your user unable to be identified.");
            }


            var myPassengers = passengers.Where(x => x.OwnerId == myId).Select(x => new PassengerDto
            {
                Id = x.Id,
                OwnerId = x.OwnerId,
                FirstName = x.FirstName,
                LastName = x.LastName,
                Birthday = x.Birthday,

            }).ToList();

            return Ok(myPassengers);
        }

        [HttpGet("ownedBy/{userId}")]
        [Authorize(Roles = RoleNames.Admin)]
        public ActionResult<ICollection<PassengerDto>> GetPassengersOwnedByUser([FromRoute] int userId)
        {
            if (!dataContext.Users.Any(x => x.Id == userId))
            {
                return NotFound();
            }

            var ownedPassengers = passengers.Where(x => x.OwnerId == userId).Select(x => new PassengerDto
            {
                Id = x.Id,
                OwnerId = x.OwnerId,
                FirstName = x.FirstName,
                LastName = x.LastName,
                Birthday = x.Birthday,


            }).ToList();

            return Ok(ownedPassengers);
        }
    }

}
