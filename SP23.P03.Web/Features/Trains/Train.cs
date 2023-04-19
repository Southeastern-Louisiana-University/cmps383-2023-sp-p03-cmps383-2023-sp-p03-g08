namespace SP23.P03.Web.Features.Trains;

public class Train
{

    public int Id { get; set; }
    public string Name { get; set; } = string.Empty;
    public int CoachCapacity { get; set; }
    public int FirstClassCapacity { get; set; }
    public int SleeperCapacity { get; set; }
    public int RoomletCapacity { get; set; }
    public Boolean Dining { get; set; }

}
