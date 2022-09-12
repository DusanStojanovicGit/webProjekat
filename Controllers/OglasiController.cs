using System;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Models;

namespace Controllers
{
    [ApiController]
    [Route ("[controller]")]

    public class OglasiController : ControllerBase
    {
        public AutoOglasiContext Context {get;set;}

        public OglasiController(AutoOglasiContext context)
        {
            Context = context;
        }

[Route("PreuzmiSveOglase")]
        [HttpGet]
        public async Task<ActionResult> PreuzmiSveOglase(){
            try{
                var oglasi = Context.Oglasi
                    .Include(p=>p.automobil)
                    .Include(p=>p.vlasnikOglasa)
                    .Include(p=>p.pijaca);

                var oglas = await oglasi.ToListAsync();

                return Ok
                (
                    oglas.Select(p=>
                    new
                    {
                        
                        ID=p.ID,
                        sifraOglasa=p.sifraOglasa,
                        cena=p.cena,
                        datumPostavljanja=p.datumPostavljanja,


                        Vlasnik = new {
                            JMBGvlasnika=p.vlasnikOglasa.JMBG,
                            usernameVlasnika=p.vlasnikOglasa.username,
                            imeVlasnika=p.vlasnikOglasa.ime,
                            prezimeVlasnika=p.vlasnikOglasa.prezime,
                            gradVlasnika=p.vlasnikOglasa.grad,
                            adresaVlasnika=p.vlasnikOglasa.adresa,
                            telefonVlasnika=p.vlasnikOglasa.telefon,
                            emailVlasnika=p.vlasnikOglasa.email,
                        },



                        Automobil = new {
                            brojSasijeAutomobila=p.automobil.brojSasije,
                            markaAutomobila=p.automobil.marka,
                            modelAutomobila=p.automobil.model,
                            godisteAutomobila=p.automobil.godiste,
                            kilometrazaAutomobila=p.automobil.kilometraza,
                            karoserijaAutomobila=p.automobil.karoserija,
                            gorivoAutomobila=p.automobil.gorivo,
                            kubikazaAutomobila=p.automobil.kubikaza,
                            snagaMotoraAutomobila=p.automobil.snagaMotora,
                        },

                        Pijaca = new {
                            nazivPijace=p.pijaca.naziv,
                            lokacijaPijace=p.pijaca.lokacija,
                            adresaPijace=p.pijaca.adresa,
                            telefonPijace=p.pijaca.telefon
                        }

                    }).ToList()
                );
            }

            catch (Exception e){
                return BadRequest(e.Message);
            }
        }


    [Route("DodajOglas/{korisnikUsername}/{brojSasije}/{nazivPijace}/{Cena}")]
        [HttpPost]
        public async Task<ActionResult> DodajOglas(string korisnikUsername, string brojSasije, string nazivPijace, int Cena){
            
            if(string.IsNullOrWhiteSpace(korisnikUsername)){
                return BadRequest("Nevalidno korisnicko ime");
            }

            if(string.IsNullOrWhiteSpace(brojSasije)){
                return BadRequest("Nevalidan broj sasije");
            }

            if(string.IsNullOrWhiteSpace(nazivPijace)){
                return BadRequest("Nevalidan naziv pijace");
            }

            if(Cena<0){
                return BadRequest("Nevalidna cena");
            }
            
            try{

                //Provera da li postoji automobil na pijaci
                var Automobil = await Context.Automobili.Where(p=>p.brojSasije==brojSasije).FirstOrDefaultAsync();
                if(Automobil==null){
                    return BadRequest("Automobil ne postoji u bazi");
                }

                //Provera da li postoji vec postavljen oglas sa datim automobilom
                var Automobil1 = Context.Oglasi.Where(p=>p.automobil.brojSasije==brojSasije).FirstOrDefault();
                if(Automobil1!=null){
                    return BadRequest("Vec postoji oglas sa datim automobilom");
                }       


                //Proverava da li postoji korisnik u bazi
                var Korisnik = await Context.Korisnici.Where(p=>p.username==korisnikUsername).FirstOrDefaultAsync();
                if(Korisnik==null){
                    return BadRequest("Korisnik ne postoji u bazi");
                }         


                //Provera da li je dati vlasnik zapravo vlasnik automobila, ako jeste, koristi se objekat Automobil
                var Automobil2 = await Context.Automobili
                .Include(p=>p.vlasnikAutomobila)
                .Where(p=>brojSasije==p.brojSasije && korisnikUsername==p.vlasnikAutomobila.username).FirstOrDefaultAsync();
                if (Automobil2==null){
                    return BadRequest("Dati vlasnik nije vlasnik ovog automobila");
                }
            




                //Proverava da li postoji pijaca u bazi
                var Pijaca = await Context.Pijace.Where(p=>p.naziv==nazivPijace).FirstOrDefaultAsync();
                if(Pijaca==null){
                    return BadRequest("Pijaca ne postoji u bazi");
                }


                //Proverava da li se automobil nalazi na datoj pijaci
                var Automobil3 = await Context.Automobili
                .Where(p=>brojSasije==p.brojSasije && nazivPijace==p.pijacaLokacija.naziv).FirstOrDefaultAsync();
                if (Automobil3==null){
                    return BadRequest("Automobil se ne nalazi na datoj pijaci");
                }


                

                //kreiranje sifre oglasa

                Random random = new Random();
                const string chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
                string krajnjiString="";
                int flag=0;
                do{
                krajnjiString = new string(Enumerable.Repeat(chars, 10)
                .Select(s => s[random.Next(s.Length)]).ToArray());
                var pomocniOglas = Context.Oglasi.Where(p=>p.sifraOglasa==krajnjiString).FirstOrDefault();
                if(pomocniOglas==null){
                    flag=1;
                }
                }while(flag==0);     

                //-------------------------------------------  

                Oglas o = new Oglas{
                    vlasnikOglasa=Korisnik,
                    automobil=Automobil,
                    pijaca=Pijaca,
                    cena=Cena,
                    datumPostavljanja=DateTime.Now.ToString("HH:mm:ss tt"),
                    sifraOglasa=krajnjiString
                };

                Context.Oglasi.Add(o);
                await Context.SaveChangesAsync();

                var podaciOOglasu = await Context.Oglasi
                    .Include(p=>p.automobil)
                    .Include(p=>p.pijaca)
                    .Include(p=>p.vlasnikOglasa)
                    .Where(p=>p.vlasnikOglasa.username==korisnikUsername && p.automobil.brojSasije==brojSasije && p.pijaca.naziv==nazivPijace)
                    .Select(p=>
                    new
                    {

                        // InformacijeOOglasu = new{
                        cena=p.cena,
                        datum=p.datumPostavljanja,
                        sifraOglasa=p.sifraOglasa,
                        // },


                        // Vlasnik = new{
                        JMBGkorisnika=p.vlasnikOglasa.JMBG,
                        usernamekorisnika=p.vlasnikOglasa.username,
                        imeKorisnika=p.vlasnikOglasa.ime,
                        prezimeKorisnika=p.vlasnikOglasa.prezime,
                        telefonKorisnika=p.vlasnikOglasa.telefon,
                        gradKorisnika=p.vlasnikOglasa.grad,
                        adresaKorisnika=p.vlasnikOglasa.adresa,
                        emailKorisnika=p.vlasnikOglasa.email,
                        slikaKorisnika=p.vlasnikOglasa.slika,
                        // },

                        // Automobil = new{
                        brojSasijeAutomobila=p.automobil.brojSasije,
                        markaAutomobila=p.automobil.marka,
                        modelAutomobila=p.automobil.model,
                        godisteAutomobila=p.automobil.godiste,
                        kilometrazaAutomobila=p.automobil.kilometraza,
                        karoserijaAutomobila=p.automobil.karoserija,
                        gorivoAutomobila=p.automobil.gorivo,
                        kubikazaAutomobila=p.automobil.kubikaza,
                        snagaMotoraAutomobila=p.automobil.snagaMotora,
                        // },


                        // Pijaca = new{
                        nazivPijace=p.pijaca.naziv,
                        lokacijaPijace=p.pijaca.lokacija,
                        adresaPijace=p.pijaca.adresa,
                        telefonPijace=p.pijaca.telefon
                        // }

                    }).FirstOrDefaultAsync();

                return Ok(podaciOOglasu);
            }
            catch(Exception e){
                return BadRequest(e.Message);
            }

        }

     [Route("IzmeniOglas/{usernameVlasnika}/{sifraOglasa}/{novaCena}")]
        [HttpPut]
        public async Task<ActionResult> IzmeniOglas(string usernameVlasnika, string sifraOglasa, int novaCena){

            if (string.IsNullOrWhiteSpace(sifraOglasa)){
                return BadRequest("Nevalidan oglas");
            }

            if (string.IsNullOrWhiteSpace(usernameVlasnika)){
                return BadRequest("Nevalidno korisnicko ime");
            }

            if(novaCena<0){
                return BadRequest("Nevalidna cena");
            }

            try{
                
                var oglas =await Context.Oglasi.Where(p=>p.sifraOglasa==sifraOglasa).FirstOrDefaultAsync();
                if(oglas==null)
                {
                    return BadRequest("Oglas ne postoji");
                }

                oglas = await Context.Oglasi.Where(p=>p.sifraOglasa==sifraOglasa && p.vlasnikOglasa.username==usernameVlasnika).FirstOrDefaultAsync();
                if(oglas==null){
                    return BadRequest("Dati korisnik nije vlasnik oglasa");
                }



                oglas.cena=novaCena;
                await Context.SaveChangesAsync();
                

                var podaciOOglasu = await Context.Oglasi
                    .Include(p=>p.automobil)
                    .Include(p=>p.pijaca)
                    .Include(p=>p.vlasnikOglasa)
                    .Where(p=>p.vlasnikOglasa.username==usernameVlasnika && p.sifraOglasa==sifraOglasa)
                    .Select(p=>
                    new
                    {

                        // InformacijeOOglasu = new{
                        cena=p.cena,
                        datum=p.datumPostavljanja,
                        sifraOglasa=p.sifraOglasa,
                        // },


                        // Vlasnik = new{
                        JMBGkorisnika=p.vlasnikOglasa.JMBG,
                        usernamekorisnika=p.vlasnikOglasa.username,
                        imeKorisnika=p.vlasnikOglasa.ime,
                        prezimeKorisnika=p.vlasnikOglasa.prezime,
                        telefonKorisnika=p.vlasnikOglasa.telefon,
                        gradKorisnika=p.vlasnikOglasa.grad,
                        adresaKorisnika=p.vlasnikOglasa.adresa,
                        emailKorisnika=p.vlasnikOglasa.email,
                        slikaKorisnika=p.vlasnikOglasa.slika,
                        // },

                        // Automobil = new{
                        brojSasijeAutomobila=p.automobil.brojSasije,
                        markaAutomobila=p.automobil.marka,
                        modelAutomobila=p.automobil.model,
                        godisteAutomobila=p.automobil.godiste,
                        kilometrazaAutomobila=p.automobil.kilometraza,
                        karoserijaAutomobila=p.automobil.karoserija,
                        gorivoAutomobila=p.automobil.gorivo,
                        kubikazaAutomobila=p.automobil.kubikaza,
                        snagaMotoraAutomobila=p.automobil.snagaMotora,
                        // },


                        // Pijaca = new{
                        nazivPijace=p.pijaca.naziv,
                        lokacijaPijace=p.pijaca.lokacija,
                        adresaPijace=p.pijaca.adresa,
                        telefonPijace=p.pijaca.telefon
                        // }

                    }).FirstOrDefaultAsync();
                    
                
                return Ok(podaciOOglasu);
            }
            catch(Exception e){
                return BadRequest(e.Message);
            }
        }



         [Route("ObrisiOglas/{sifraOglasa}/{usernameKorisnika}")]
        [HttpDelete]
        public async Task<ActionResult> ObrisiOglas(string sifraOglasa, string usernameKorisnika){
            if (string.IsNullOrWhiteSpace(sifraOglasa)){
                return BadRequest("Nevalidna sifra oglasa");
            }

            if (string.IsNullOrWhiteSpace(usernameKorisnika) ){
                return BadRequest("Nevalidan JMBG");
            }

            try{
                var probniOglas = await Context.Oglasi.Where(p=>p.sifraOglasa==sifraOglasa).FirstOrDefaultAsync();
                if (probniOglas==null){
                    return BadRequest("Oglas ne postoji");
                }

                probniOglas = await Context.Oglasi.Where(p=>p.sifraOglasa==sifraOglasa && p.vlasnikOglasa.username==usernameKorisnika).FirstOrDefaultAsync();
                if (probniOglas==null){
                    return BadRequest("Ovaj korisnik nije postavio dati oglas");
                }

                Context.Oglasi.Remove(probniOglas);

                await Context.SaveChangesAsync();
                
                return Ok("Oglas obrisan");
            }

            catch (Exception e){
                return BadRequest(e.Message);
            }
        }
    }
}



    
