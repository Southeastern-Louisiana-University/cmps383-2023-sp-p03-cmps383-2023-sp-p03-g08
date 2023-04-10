using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace SP23.P03.Web.Migrations
{
    /// <inheritdoc />
    public partial class TrainChanges : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Capacity",
                table: "Train",
                newName: "SleeperCapacity");

            migrationBuilder.AddColumn<int>(
                name: "CoachCapacity",
                table: "Train",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<bool>(
                name: "Dining",
                table: "Train",
                type: "bit",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<int>(
                name: "FirstClassCapacity",
                table: "Train",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "RoomletCapacity",
                table: "Train",
                type: "int",
                nullable: false,
                defaultValue: 0);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "CoachCapacity",
                table: "Train");

            migrationBuilder.DropColumn(
                name: "Dining",
                table: "Train");

            migrationBuilder.DropColumn(
                name: "FirstClassCapacity",
                table: "Train");

            migrationBuilder.DropColumn(
                name: "RoomletCapacity",
                table: "Train");

            migrationBuilder.RenameColumn(
                name: "SleeperCapacity",
                table: "Train",
                newName: "Capacity");
        }
    }
}
