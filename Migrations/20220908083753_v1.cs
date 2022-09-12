using Microsoft.EntityFrameworkCore.Migrations;

namespace New_folder.Migrations
{
    public partial class v1 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Korisnik",
                columns: table => new
                {
                    ID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    JMBG = table.Column<string>(type: "nvarchar(13)", maxLength: 13, nullable: false),
                    username = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    sifra = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    ime = table.Column<string>(type: "nvarchar(30)", maxLength: 30, nullable: false),
                    prezime = table.Column<string>(type: "nvarchar(30)", maxLength: 30, nullable: false),
                    grad = table.Column<string>(type: "nvarchar(40)", maxLength: 40, nullable: false),
                    adresa = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    telefon = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    email = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    slika = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Korisnik", x => x.ID);
                });

            migrationBuilder.CreateTable(
                name: "Pijaca",
                columns: table => new
                {
                    ID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    naziv = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    lokacija = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    adresa = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    telefon = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Pijaca", x => x.ID);
                });

            migrationBuilder.CreateTable(
                name: "Automobil",
                columns: table => new
                {
                    ID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    brojSasije = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    marka = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    model = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    godiste = table.Column<int>(type: "int", nullable: false),
                    kilometraza = table.Column<int>(type: "int", nullable: false),
                    karoserija = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    gorivo = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    kubikaza = table.Column<int>(type: "int", nullable: false),
                    snagaMotora = table.Column<int>(type: "int", nullable: false),
                    slika = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    KorisnikID = table.Column<int>(type: "int", nullable: true),
                    PijacaID = table.Column<int>(type: "int", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Automobil", x => x.ID);
                    table.ForeignKey(
                        name: "FK_Automobil_Korisnik_KorisnikID",
                        column: x => x.KorisnikID,
                        principalTable: "Korisnik",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_Automobil_Pijaca_PijacaID",
                        column: x => x.PijacaID,
                        principalTable: "Pijaca",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "Oglas",
                columns: table => new
                {
                    ID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    sifraOglasa = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    cena = table.Column<int>(type: "int", nullable: false),
                    datumPostavljanja = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    automobilID = table.Column<int>(type: "int", nullable: true),
                    pijacaID = table.Column<int>(type: "int", nullable: false),
                    vlasnikOglasaID = table.Column<int>(type: "int", nullable: false),
                    automobilFK = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Oglas", x => x.ID);
                    table.ForeignKey(
                        name: "FK_Oglas_Automobil_automobilID",
                        column: x => x.automobilID,
                        principalTable: "Automobil",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_Oglas_Korisnik_vlasnikOglasaID",
                        column: x => x.vlasnikOglasaID,
                        principalTable: "Korisnik",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_Oglas_Pijaca_pijacaID",
                        column: x => x.pijacaID,
                        principalTable: "Pijaca",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Automobil_KorisnikID",
                table: "Automobil",
                column: "KorisnikID");

            migrationBuilder.CreateIndex(
                name: "IX_Automobil_PijacaID",
                table: "Automobil",
                column: "PijacaID");

            migrationBuilder.CreateIndex(
                name: "IX_Oglas_automobilID",
                table: "Oglas",
                column: "automobilID");

            migrationBuilder.CreateIndex(
                name: "IX_Oglas_pijacaID",
                table: "Oglas",
                column: "pijacaID");

            migrationBuilder.CreateIndex(
                name: "IX_Oglas_vlasnikOglasaID",
                table: "Oglas",
                column: "vlasnikOglasaID");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Oglas");

            migrationBuilder.DropTable(
                name: "Automobil");

            migrationBuilder.DropTable(
                name: "Korisnik");

            migrationBuilder.DropTable(
                name: "Pijaca");
        }
    }
}
