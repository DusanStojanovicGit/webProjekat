using Microsoft.EntityFrameworkCore.Migrations;

namespace New_folder.Migrations
{
    public partial class v2 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Automobil_Korisnik_KorisnikID",
                table: "Automobil");

            migrationBuilder.DropForeignKey(
                name: "FK_Automobil_Pijaca_PijacaID",
                table: "Automobil");

            migrationBuilder.RenameColumn(
                name: "PijacaID",
                table: "Automobil",
                newName: "vlasnikAutomobilaID");

            migrationBuilder.RenameColumn(
                name: "KorisnikID",
                table: "Automobil",
                newName: "pijacaLokacijaID");

            migrationBuilder.RenameIndex(
                name: "IX_Automobil_PijacaID",
                table: "Automobil",
                newName: "IX_Automobil_vlasnikAutomobilaID");

            migrationBuilder.RenameIndex(
                name: "IX_Automobil_KorisnikID",
                table: "Automobil",
                newName: "IX_Automobil_pijacaLokacijaID");

            migrationBuilder.AddForeignKey(
                name: "FK_Automobil_Korisnik_vlasnikAutomobilaID",
                table: "Automobil",
                column: "vlasnikAutomobilaID",
                principalTable: "Korisnik",
                principalColumn: "ID",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_Automobil_Pijaca_pijacaLokacijaID",
                table: "Automobil",
                column: "pijacaLokacijaID",
                principalTable: "Pijaca",
                principalColumn: "ID",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Automobil_Korisnik_vlasnikAutomobilaID",
                table: "Automobil");

            migrationBuilder.DropForeignKey(
                name: "FK_Automobil_Pijaca_pijacaLokacijaID",
                table: "Automobil");

            migrationBuilder.RenameColumn(
                name: "vlasnikAutomobilaID",
                table: "Automobil",
                newName: "PijacaID");

            migrationBuilder.RenameColumn(
                name: "pijacaLokacijaID",
                table: "Automobil",
                newName: "KorisnikID");

            migrationBuilder.RenameIndex(
                name: "IX_Automobil_vlasnikAutomobilaID",
                table: "Automobil",
                newName: "IX_Automobil_PijacaID");

            migrationBuilder.RenameIndex(
                name: "IX_Automobil_pijacaLokacijaID",
                table: "Automobil",
                newName: "IX_Automobil_KorisnikID");

            migrationBuilder.AddForeignKey(
                name: "FK_Automobil_Korisnik_KorisnikID",
                table: "Automobil",
                column: "KorisnikID",
                principalTable: "Korisnik",
                principalColumn: "ID",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_Automobil_Pijaca_PijacaID",
                table: "Automobil",
                column: "PijacaID",
                principalTable: "Pijaca",
                principalColumn: "ID",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
