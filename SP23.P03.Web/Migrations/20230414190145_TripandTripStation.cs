using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace SP23.P03.Web.Migrations
{
    /// <inheritdoc />
    public partial class TripandTripStation : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Trip",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    TrainId = table.Column<int>(type: "int", nullable: false),
                    RouteId = table.Column<int>(type: "int", nullable: false),
                    CoachSeatsLeft = table.Column<int>(type: "int", nullable: false),
                    CoachPrice = table.Column<decimal>(type: "decimal(18,2)", nullable: false),
                    FirstClassSeatsLeft = table.Column<int>(type: "int", nullable: false),
                    FirstClassPrice = table.Column<decimal>(type: "decimal(18,2)", nullable: false),
                    SleepersLeft = table.Column<int>(type: "int", nullable: false),
                    SleeperPrice = table.Column<decimal>(type: "decimal(18,2)", nullable: false),
                    RoomletsLeft = table.Column<int>(type: "int", nullable: false),
                    RoomletsPrice = table.Column<decimal>(type: "decimal(18,2)", nullable: false),
                    Dining = table.Column<bool>(type: "bit", nullable: false),
                    BasePrice = table.Column<decimal>(type: "decimal(18,2)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Trip", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Trip_Route_RouteId",
                        column: x => x.RouteId,
                        principalTable: "Route",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_Trip_Train_TrainId",
                        column: x => x.TrainId,
                        principalTable: "Train",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "TripStation",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    TripId = table.Column<int>(type: "int", nullable: false),
                    TrainStationId = table.Column<int>(type: "int", nullable: false),
                    Name = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Address = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    City = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    State = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    ArrivalDate = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    ArrivalTime = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_TripStation", x => x.Id);
                    table.ForeignKey(
                        name: "FK_TripStation_TrainStation_TrainStationId",
                        column: x => x.TrainStationId,
                        principalTable: "TrainStation",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_TripStation_Trip_TripId",
                        column: x => x.TripId,
                        principalTable: "Trip",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Trip_RouteId",
                table: "Trip",
                column: "RouteId");

            migrationBuilder.CreateIndex(
                name: "IX_Trip_TrainId",
                table: "Trip",
                column: "TrainId");

            migrationBuilder.CreateIndex(
                name: "IX_TripStation_TrainStationId",
                table: "TripStation",
                column: "TrainStationId");

            migrationBuilder.CreateIndex(
                name: "IX_TripStation_TripId",
                table: "TripStation",
                column: "TripId");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "TripStation");

            migrationBuilder.DropTable(
                name: "Trip");
        }
    }
}
