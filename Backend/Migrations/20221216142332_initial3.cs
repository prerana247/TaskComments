using Microsoft.EntityFrameworkCore.Migrations;

namespace backend.Migrations
{
    public partial class initial3 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "ContentType",
                table: "Documents");

            migrationBuilder.DropColumn(
                name: "FileSize",
                table: "Documents");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "ContentType",
                table: "Documents",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "FileSize",
                table: "Documents",
                type: "int",
                nullable: false,
                defaultValue: 0);
        }
    }
}
