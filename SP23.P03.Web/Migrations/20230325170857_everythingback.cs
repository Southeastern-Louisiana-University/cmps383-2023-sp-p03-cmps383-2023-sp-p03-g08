using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace SP23.P03.Web.Migrations
{
    /// <inheritdoc />
    public partial class everythingback : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "City",
                table: "TrainStation",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "State",
                table: "TrainStation",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.CreateTable(
                name: "Route",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Name = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Description = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Order = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Route", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Train",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Name = table.Column<string>(type: "nvarchar(75)", maxLength: 75, nullable: false),
                    Capacity = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Train", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "RouteTrainStation",
                columns: table => new
                {
                    RoutesId = table.Column<int>(type: "int", nullable: false),
                    TrainStationsId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_RouteTrainStation", x => new { x.RoutesId, x.TrainStationsId });
                    table.ForeignKey(
                        name: "FK_RouteTrainStation_Route_RoutesId",
                        column: x => x.RoutesId,
                        principalTable: "Route",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_RouteTrainStation_TrainStation_TrainStationsId",
                        column: x => x.TrainStationsId,
                        principalTable: "TrainStation",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_RouteTrainStation_TrainStationsId",
                table: "RouteTrainStation",
                column: "TrainStationsId");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "RouteTrainStation");

            migrationBuilder.DropTable(
                name: "Train");

            migrationBuilder.DropTable(
                name: "Route");

            migrationBuilder.DropColumn(
                name: "City",
                table: "TrainStation");

            migrationBuilder.DropColumn(
                name: "State",
                table: "TrainStation");
        }
    }
}
