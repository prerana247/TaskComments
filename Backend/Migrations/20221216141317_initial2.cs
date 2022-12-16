using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace backend.Migrations
{
    public partial class initial2 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "FileData",
                table: "Documents");

            migrationBuilder.AddColumn<string>(
                name: "Filepath",
                table: "Documents",
                type: "nvarchar(max)",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Filepath",
                table: "Documents");

            migrationBuilder.AddColumn<byte[]>(
                name: "FileData",
                table: "Documents",
                type: "varbinary(max)",
                nullable: true);
        }
    }
}
