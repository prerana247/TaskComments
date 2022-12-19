using Microsoft.EntityFrameworkCore.Migrations;

namespace backend.Migrations
{
    public partial class scores : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Scores",
                table: "Tasks");

            migrationBuilder.AddColumn<int>(
                name: "Scores",
                table: "TaskAssigned",
                type: "int",
                nullable: false,
                defaultValue: 0);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Scores",
                table: "TaskAssigned");

            migrationBuilder.AddColumn<int>(
                name: "Scores",
                table: "Tasks",
                type: "int",
                nullable: false,
                defaultValue: 0);
        }
    }
}
