using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using SP23.P03.Web.Features.Authorization;
using SP23.P03.Web.Features.TrainStations;
using SP23.P03.Web.Features.Trains;
using Route = SP23.P03.Web.Features.Routes.Route;

namespace SP23.P03.Web.Data;

public static class SeedHelper
{
    public static async Task MigrateAndSeed(IServiceProvider serviceProvider)
    {
        var dataContext = serviceProvider.GetRequiredService<DataContext>();

        await dataContext.Database.MigrateAsync();

        await AddRoles(serviceProvider);
        await AddUsers(serviceProvider);

        await AddTrainStation(dataContext);
        await AddTrains(dataContext);
        await AddRoutes(dataContext);
       // await AddRouteTrainStations(dataContext);

    }

    private static async Task AddUsers(IServiceProvider serviceProvider)
    {
        const string defaultPassword = "Password123!";
        var userManager = serviceProvider.GetRequiredService<UserManager<User>>();

        if (userManager.Users.Any())
        {
            return;
        }

        var adminUser = new User
        {
            UserName = "galkadi"
        };
        await userManager.CreateAsync(adminUser, defaultPassword);
        await userManager.AddToRoleAsync(adminUser, RoleNames.Admin);

        var bob = new User
        {
            UserName = "bob"
        };
        await userManager.CreateAsync(bob, defaultPassword);
        await userManager.AddToRoleAsync(bob, RoleNames.User);

        var sue = new User
        {
            UserName = "sue"
        };
        await userManager.CreateAsync(sue, defaultPassword);
        await userManager.AddToRoleAsync(sue, RoleNames.User);
    }

    private static async Task AddRoles(IServiceProvider serviceProvider)
    {
        var roleManager = serviceProvider.GetRequiredService<RoleManager<Role>>();
        if (roleManager.Roles.Any())
        {
            return;
        }
        await roleManager.CreateAsync(new Role
        {
            Name = RoleNames.Admin
        });

        await roleManager.CreateAsync(new Role
        {
            Name = RoleNames.User
        });
    }

    private static async Task AddTrainStation(DataContext dataContext)
    {
        var trainStations = dataContext.Set<TrainStation>();

        if (await trainStations.AnyAsync())
        {
            return;
        }

        trainStations.Add(new TrainStation
        {
            Name = "Test 1",
            Address = "1234 Place",
            City = "Baton Rouge",
            State = "LA"
        });
        trainStations.Add(new TrainStation
        {
            Name = "Test 2",
            Address = "1234 Place",
            City = "Hammond",
            State = "LA"
        });
        trainStations.Add(new TrainStation
        {
            Name = "Test 3",
            Address = "1234 Place",
            City = "Slidell",
            State = "LA"
        });


        await dataContext.SaveChangesAsync();
    }
    private static async Task AddTrains(DataContext dataContext)
    {
        var trains = dataContext.Set<Train>();
        if (await trains.AnyAsync())
        {
            return;
        }

        trains.Add(new Train
        {
            Name = "EnTrack 1",
            Capacity = 100
        });
        trains.Add(new Train
        {
            Name = "EnTrack 2",
            Capacity = 50
        });
        await dataContext.SaveChangesAsync();
    }
    private static async Task AddRoutes(DataContext dataContext)
    {
        var routes = dataContext.Set<Route>();
        if (await routes.AnyAsync())
        {
            return;
        }

        routes.Add(new Route
        {
            Name = "Test Route",
            Description = "The test route",
            Order = "Test 1, Test 2, Test 3"
        });
        await dataContext.SaveChangesAsync();
    }
    
  /* private static async Task AddRouteTrainStations(DataContext dataContext)
    {
        var routestations = dataContext.Set<RouteTrainStation>();
        if (await routestations.AnyAsync())
        {
            return;
        }
        var routes = dataContext.Set<Route>();
        var testroute = routes.First(x => x.Name == "Test Route");

        var trainStations = dataContext.Set<TrainStation>();
        var ts1 = trainStations.First(x => x.Name == "Test 1");
        var ts2 = trainStations.First(x => x.Name == "Test 2");
        var ts3 = trainStations.First(x => x.Name == "Test 3");

        testroute.TrainStations.AddRange(new[] { ts1, ts2, ts3 });
        dataContext.SaveChanges();

    }
  */
}
    