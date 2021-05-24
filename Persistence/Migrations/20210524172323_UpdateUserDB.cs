using Microsoft.EntityFrameworkCore.Migrations;

namespace Persistence.Migrations
{
    public partial class UpdateUserDB : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "FIO",
                table: "Students");

            migrationBuilder.AddColumn<string>(
                name: "Displayname",
                table: "AspNetUsers",
                type: "TEXT",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Displayname",
                table: "AspNetUsers");

            migrationBuilder.AddColumn<string>(
                name: "FIO",
                table: "Students",
                type: "TEXT",
                nullable: true);
        }
    }
}
