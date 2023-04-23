using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using SP23.P03.Web.Features.Authorization;
using SP23.P03.Web.Features.TrainStations;
using SP23.P03.Web.Features.Trains;
using Route = SP23.P03.Web.Features.Routes.Route;
using SP23.P03.Web.Features.Trips;
using SP23.P03.Web.Features.TripStations;

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
        await AddRouteTrainStations(dataContext);
        await AddTrips(dataContext);

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
            Name = "TexArkana Station",
            Address = "656 Arkana Drive",
            City = "Texarkana",
            State = "TX"
        });
        trainStations.Add(new TrainStation
        {
            Name = "Marshall Station",
            Address = "765 Marshall Avenue",
            City = "Marshall",
            State = "TX"
        });
        trainStations.Add(new TrainStation
        {
            Name = "Longview Station",
            Address = "9012 Longview Drive",
            City = "Longview",
            State = "TX"
        });
        trainStations.Add(new TrainStation
        {
            Name = "Mineola Station",
            Address = "213 Mineola Avenue",
            City = "Mineola",
            State = "TX"
        });
        trainStations.Add(new TrainStation
        {
            Name = "Dallas Station",
            Address = "705 Cowboy Street",
            City = "Dallas",
            State = "TX"
        });
        trainStations.Add(new TrainStation
        {
            Name = "Fort Worth Station",
            Address = "9012 FW Boulevard",
            City = "Longview",
            State = "TX"
        });
        trainStations.Add(new TrainStation
        {
            Name = "Shreveport Station",
            Address = "888 Port Avenue",
            City = "Shreveport",
            State = "LA"
        });
        trainStations.Add(new TrainStation
        {
            Name = "Tyler Station",
            Address = "890 Adams Street",
            City = "Tyler",
            State = "TX"
        });
        trainStations.Add(new TrainStation
        {
            Name = "Mesquite Station",
            Address = "777 Mosquito Avenue",
            City = "Mesquite",
            State = "TX"
        });
        trainStations.Add(new TrainStation
        {
            Name = "Cleburne Station",
            Address = "1299 Cleburne Street",
            City = "Cleburne",
            State = "TX"
        });
        trainStations.Add(new TrainStation
        {
            Name = "McGregor Station",
            Address = "665 Connor Street",
            City = "McGregor",
            State = "TX"
        });
        trainStations.Add(new TrainStation
        {
            Name = "Temple Station",
            Address = "3000 Temple Drive",
            City = "Temple",
            State = "TX"
        });
        trainStations.Add(new TrainStation
        {
            Name = "Killeen Station",
            Address = "2121 Killeen Boulevard",
            City = "Killeen",
            State = "TX"
        });
        trainStations.Add(new TrainStation
        {
            Name = "Fort Hood Station",
            Address = "8989 FH Drive",
            City = "Fort Hood",
            State = "TX"
        });
        trainStations.Add(new TrainStation
        {
            Name = "Taylor Station",
            Address = "9019 Taylor Drive",
            City = "Taylor",
            State = "TX"
        });
        trainStations.Add(new TrainStation
        {
            Name = "Austin Station",
            Address = "100 Capital Street",
            City = "Austin",
            State = "TX"
        });
        trainStations.Add(new TrainStation
        {
            Name = "San Marcos Station",
            Address = "223 Marcos Drive",
            City = "San Marcos",
            State = "TX"
        });
        trainStations.Add(new TrainStation
        {
            Name = "Waco Station",
            Address = "444 Waco Drive",
            City = "Waco",
            State = "TX"
        });
        trainStations.Add(new TrainStation
        {
            Name = "Bryan Station",
            Address = "6754 Bryan Street",
            City = "Bryan",
            State = "TX"
        });
        trainStations.Add(new TrainStation
        {
            Name = "Prairie View Station",
            Address = "890 PV Drive",
            City = "Prairie View",
            State = "TX"
        });
        trainStations.Add(new TrainStation
        {
            Name = "Nacogdoches Station",
            Address = "7779 Nacog Boulevard",
            City = "Nacogdoches",
            State = "TX"
        });
        trainStations.Add(new TrainStation
        {
            Name = "San Antonio Station",
            Address = "339 Spurs Street",
            City = "San Antonio",
            State = "TX"
        });
        trainStations.Add(new TrainStation
        {
            Name = "Houston Station",
            Address = "500 Dynamo Drive",
            City = "Houston",
            State = "TX"
        });
        trainStations.Add(new TrainStation
        {
            Name = "Galveston Station",
            Address = "9052 Galvanize Drive",
            City = "Galveston",
            State = "TX"
        });
        trainStations.Add(new TrainStation
        {
            Name = "Beaumont Station",
            Address = "343 Beaumont Avenue",
            City = "Beaumont",
            State = "TX"
        });
        trainStations.Add(new TrainStation
        {
            Name = "Lake Charles Station",
            Address = "1090 Charles Street",
            City = "Lake Charles",
            State = "LA"
        });
        trainStations.Add(new TrainStation
        {
            Name = "Lafayette Station",
            Address = "522 Cajun Avenue",
            City = "Lafayette",
            State = "LA"
        });
        trainStations.Add(new TrainStation
        {
            Name = "New Iberia Station",
            Address = "3389 Iberia Drive",
            City = "New Iberia",
            State = "LA"
        });
        trainStations.Add(new TrainStation
        {
            Name = "Schriever Station",
            Address = "787 Schriever Street",
            City = "Schriever",
            State = "LA"
        });
        trainStations.Add(new TrainStation
        {
            Name = "Baton Rouge Station",
            Address = "225 Red Stick Street",
            City = "Baton Rouge",
            State = "LA"
        });
        trainStations.Add(new TrainStation
        {
            Name = "New Orleans Station",
            Address = "1080 Crescent City Street",
            City = "New Orleans",
            State = "LA"
        });
        trainStations.Add(new TrainStation
        {
            Name = "Hammond Station",
            Address = "409 Roomie Drive",
            City = "Hammond",
            State = "LA"
        });
        trainStations.Add(new TrainStation
        {
            Name = "McComb Station",
            Address = "999 McComb Avenue",
            City = "McComb",
            State = "MS"
        });
        trainStations.Add(new TrainStation
        {
            Name = "Brookhaven Station",
            Address = "545 Brookhaven Street",
            City = "Brookhaven",
            State = "MS"
        });
        trainStations.Add(new TrainStation
        {
            Name = "Hazlehurst Station",
            Address = "675 Hazlehurst Drive",
            City = "Hazlehurst",
            State = "MS"
        });
        trainStations.Add(new TrainStation
        {
            Name = "Jackson Station",
            Address = "197 Jackson Drive",
            City = "Jackson",
            State = "MS"
        });
        trainStations.Add(new TrainStation
        {
            Name = "Yazoo City Station",
            Address = "444 Kazoo Street",
            City = "Yazoo City",
            State = "MS"
        });
        trainStations.Add(new TrainStation
        {
            Name = "Slidell Station",
            Address = "222 Slidell Drive",
            City = "Slidell",
            State = "LA"
        });
        trainStations.Add(new TrainStation
        {
            Name = "Picayune Station",
            Address = "1010 Pica Street",
            City = "Picayune",
            State = "MS"
        });
        trainStations.Add(new TrainStation
        {
            Name = "Hattiesburg Station",
            Address = "9290 Hattiesburg Avenue",
            City = "Hattiesburg",
            State = "MS"
        });
        trainStations.Add(new TrainStation
        {
            Name = "Laurel Station",
            Address = "2109 Laurel Drive",
            City = "Laurel",
            State = "MS"
        });
        trainStations.Add(new TrainStation
        {
            Name = "Meridian Station",
            Address = "9012 Longview Drive",
            City = "Longview",
            State = "TX"
        });
        trainStations.Add(new TrainStation
        {
            Name = "Biloxi Station",
            Address = "555 Biloxi Street",
            City = "Biloxi",
            State = "MS"
        });
        trainStations.Add(new TrainStation
        {
            Name = "Mobile Station",
            Address = "909 Mobile Drive",
            City = "Mobile",
            State = "AL"
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
            Name = "Siemens Charger #1",
            CoachCapacity = 558,
            FirstClassCapacity = 42,
            SleeperCapacity = 0,
            RoomletCapacity = 0,
            Dining = false
        });
        trains.Add(new Train
        {
            Name = "Siemens Charger #2",
            CoachCapacity = 336,
            FirstClassCapacity = 84,
            SleeperCapacity = 10,
            RoomletCapacity = 4,
            Dining = true
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
            Name = "SANO",
            Description = "Travel from Texas to Louisiana and see great historical landmarks such as The Alamo and the National WWII Museum.",
            Order = "San Antonio - Houston - Beaumont - Lake Charles - Lafayette - New Iberia - Schriever - New Orleans"
        });
        await dataContext.SaveChangesAsync();
    }
    
    private static async Task AddRouteTrainStations(DataContext dataContext)
    {
        var trainStations = dataContext.Set<TrainStation>();
        if (await trainStations.AnyAsync(x => x.Routes.Any())) //Any train stations that belong to any routes?
        {
            return;
        }

        var routes = dataContext.Set<Route>();
        var SANO = routes.First(x => x.Name == "SANO");
        
        var ts1 = trainStations.First(x => x.Name == "San Antonio Station");
        var ts2 = trainStations.First(x => x.Name == "Houston Station");
        var ts3 = trainStations.First(x => x.Name == "Beaumont Station");
        var ts4 = trainStations.First(x => x.Name == "Lake Charles Station");
        var ts5 = trainStations.First(x => x.Name == "Lafayette Station");
        var ts6 = trainStations.First(x => x.Name == "New Iberia Station");
        var ts7 = trainStations.First(x => x.Name == "Schriever Station");
        var ts8 = trainStations.First(x => x.Name == "New Orleans Station");

        SANO.TrainStations.AddRange(new[] { ts1, ts2, ts3, ts4, ts5, ts6, ts7, ts8 }); 
        await dataContext.SaveChangesAsync();
    }

    private static async Task AddTrips(DataContext dataContext)
    {
        var trips = dataContext.Set<Trip>();
        if (await trips.AnyAsync())
        {
            return;
        }

        var tripstations = dataContext.Set<TripStation>();
        if (await tripstations.AnyAsync())
        {
            return;
        }
        var routes = dataContext.Set<Route>();
        var SANO = routes.First(x => x.Name == "SANO");

        var trains = dataContext.Set<Train>();
        var siemenscharger1 = trains.First(x => x.Name == "Siemens Charger #1");

        var seedtrip = new Trip
        {
            TrainId = siemenscharger1.Id,
            RouteId = SANO.Id,
            CoachSeatsLeft = siemenscharger1.CoachCapacity,
            CoachPrice = 105,
            FirstClassSeatsLeft = siemenscharger1.FirstClassCapacity,
            FirstClassPrice = 270,
            SleepersLeft = siemenscharger1.SleeperCapacity,
            SleeperPrice = 370,
            RoomletsLeft = siemenscharger1.RoomletCapacity,
            RoomletsPrice = 400,
            Dining = siemenscharger1.Dining,
            BasePrice = 50
        };
        trips.Add(seedtrip);
        await dataContext.SaveChangesAsync();

        var trainStations = dataContext.Set<TrainStation>();
        var ts1 = trainStations.First(x => x.Name == "San Antonio Station");
        var ts2 = trainStations.First(x => x.Name == "Houston Station");
        var ts3 = trainStations.First(x => x.Name == "Beaumont Station");
        var ts4 = trainStations.First(x => x.Name == "Lake Charles Station");
        var ts5 = trainStations.First(x => x.Name == "Lafayette Station");
        var ts6 = trainStations.First(x => x.Name == "New Iberia Station");
        var ts7 = trainStations.First(x => x.Name == "Schriever Station");
        var ts8 = trainStations.First(x => x.Name == "New Orleans Station");

        seedtrip.TripStations.Add(new TripStation
        {
            TripId = seedtrip.Id,
            TrainStationId = ts1.Id,
            Name = ts1.Name,
            Address = ts1.Address,
            City = ts1.City,
            State = ts1.State,
            ArrivalDate = "2023-05-20",
            ArrivalTime = "12:00"
        });

        seedtrip.TripStations.Add(new TripStation
        {
            TripId = seedtrip.Id,
            TrainStationId = ts2.Id,
            Name = ts2.Name,
            Address = ts2.Address,
            City = ts2.City,
            State = ts2.State,
            ArrivalDate = "2023-05-20",
            ArrivalTime = "16:00"
        });

        seedtrip.TripStations.Add(new TripStation
        {
            TripId = seedtrip.Id,
            TrainStationId = ts3.Id,
            Name = ts3.Name,
            Address = ts3.Address,
            City = ts3.City,
            State = ts3.State,
            ArrivalDate = "2023-05-20",
            ArrivalTime = "18:00"
        });

        seedtrip.TripStations.Add(new TripStation
        {
            TripId = seedtrip.Id,
            TrainStationId = ts4.Id,
            Name = ts4.Name,
            Address = ts4.Address,
            City = ts4.City,
            State = ts4.State,
            ArrivalDate = "2023-05-20",
            ArrivalTime = "19:00"
        });

        seedtrip.TripStations.Add(new TripStation
        {
            TripId = seedtrip.Id,
            TrainStationId = ts5.Id,
            Name = ts5.Name,
            Address = ts5.Address,
            City = ts5.City,
            State = ts5.State,
            ArrivalDate = "2023-05-20",
            ArrivalTime = "21:00"
        });

        seedtrip.TripStations.Add(new TripStation
        {
            TripId = seedtrip.Id,
            TrainStationId = ts6.Id,
            Name = ts6.Name,
            Address = ts6.Address,
            City = ts6.City,
            State = ts6.State,
            ArrivalDate = "2023-05-20",
            ArrivalTime = "22:00"
        });

        seedtrip.TripStations.Add(new TripStation
        {
            TripId = seedtrip.Id,
            TrainStationId = ts7.Id,
            Name = ts7.Name,
            Address = ts7.Address,
            City = ts7.City,
            State = ts7.State,
            ArrivalDate = "2023-05-20",
            ArrivalTime = "23:00"
        });

        seedtrip.TripStations.Add(new TripStation
        {
            TripId = seedtrip.Id,
            TrainStationId = ts8.Id,
            Name = ts8.Name,
            Address = ts8.Address,
            City = ts8.City,
            State = ts8.State,
            ArrivalDate = "2023-05-21",
            ArrivalTime = "1:00"
        });

        await dataContext.SaveChangesAsync();
    }

}
    