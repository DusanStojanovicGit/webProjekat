using System;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Models;

namespace Controllers

{

    [ApiController]
    [Route("Controller")]

    public class AutomobilController :  ControllerBase
    {
        public AutoOglasiContext Context { get; set;}


        // ovo 
        public AutomobilController (AutoOglasiContext context)
        {
            Context = context;
        }
    



        [Route("PreuzmiAutomobile")]
        [HttpGet]
        public async Task<ActionResult> PreuzmiAutomobile()
        {
            try
            {
                return Ok(await Context.Automobili
                .Include(p=>p.vlasnikAutomobila)
                .Include(p=>p.pijacaLokacija)
                .Select(p => 
                new 
                { 
                    Automobil = new{
                    ID=p.ID, 
                    brojSasije=p.brojSasije, 
                    marka=p.marka,
                    model=p.model,
                    godiste=p.godiste,
                    kilometraza=p.kilometraza,
                    karoserija=p.karoserija,
                    gorivo=p.gorivo,
                    kubikaza=p.kubikaza,
                    snagaMotora=p.snagaMotora,
                    slika = p.slika
                    },


                    Vlasnik = new{
                    JMBGvlasnika=p.vlasnikAutomobila.JMBG,
                    usernameVlasnika=p.vlasnikAutomobila.username,
                    sifraVlasnika=p.vlasnikAutomobila.sifra,
                    imeVlasnika=p.vlasnikAutomobila.ime,
                    prezimeVlasnika=p.vlasnikAutomobila.prezime,
                    gradVlasnika=p.vlasnikAutomobila.grad,
                    adresaVlasnika=p.vlasnikAutomobila.adresa,
                    telefonVlasnika=p.vlasnikAutomobila.telefon,
                    emailVlasnika=p.vlasnikAutomobila.email
                    },

                    Pijaca = new{
                    nazivPijace=p.pijacaLokacija.naziv,
                    lokacijaPijace=p.pijacaLokacija.lokacija,
                    telefonPijace=p.pijacaLokacija.telefon
                    }


                      }).ToListAsync());
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }


        [Route("DodajAutomobilNaPlac/{AutoBrojSasije}/{AutoMarka}/{AutoModel}/{AutoGodiste}/{AutoKilometraza}/{AutoKaroserija}/{AutoGorivo}/{AutoKubikaza}/{AutoSnagaMotora}/{korisnickoImeVlasnika}/{PijacaNaziv}/{slikaAutomobila}")]
        [HttpPost]
        public async Task<ActionResult> DodajAutomobilNaPlac(string AutoBrojSasije, string AutoMarka, string AutoModel, int AutoGodiste, int AutoKilometraza, string AutoKaroserija, string AutoGorivo, int AutoKubikaza, int AutoSnagaMotora, string korisnickoImeVlasnika, string PijacaNaziv,string slikaAutomobila  ){

            if(string.IsNullOrWhiteSpace(AutoBrojSasije)){
                return BadRequest("Nevalidan broj sasije");
            }

            if(string.IsNullOrWhiteSpace(AutoMarka) || 
                ((AutoMarka.ToLower()!="opel") && (AutoMarka.ToLower()!="volkswagen")
                && (AutoMarka.ToLower()!="renault") && (AutoMarka.ToLower()!="fiat") 
                && (AutoMarka.ToLower()!="alfa romeo") && (AutoMarka.ToLower()!="audi") 
                && (AutoMarka.ToLower()!="bmw") && (AutoMarka.ToLower()!="chery")
                && (AutoMarka.ToLower()!="chevrolet") && (AutoMarka.ToLower()!="rimac")
                && (AutoMarka.ToLower()!="citroen")  && (AutoMarka.ToLower()!="dacia")
                && (AutoMarka.ToLower()!="lamburgini") && (AutoMarka.ToLower()!="land rover")
                && (AutoMarka.ToLower()!="mercedes") && (AutoMarka.ToLower()!="mitsubishi")
                && (AutoMarka.ToLower()!="nissan")
                && (AutoMarka.ToLower()!="peugeot")
                && (AutoMarka.ToLower()!="porsche")
                
                )){
                return BadRequest("Nevalidna marka automobila");
            }

            if(string.IsNullOrWhiteSpace(AutoModel)){
                return BadRequest("Nevalidan model");
            }

            if(AutoGodiste < 1950 || AutoGodiste > 2022){
                return BadRequest("Nevalidno godiste");
            }

            if(AutoKilometraza < 0 || AutoKilometraza > 1000000){
                return BadRequest("Nevalidna kilometraza");
            }

            if(string.IsNullOrWhiteSpace(AutoKaroserija) || 
                ((AutoKaroserija.ToLower()!="limuzina") && (AutoKaroserija.ToLower()!="hecbek")
                && (AutoKaroserija.ToLower()!="karavan") && (AutoKaroserija.ToLower()!="kupe") 
                && (AutoKaroserija.ToLower()!="kabriolet") && (AutoKaroserija.ToLower()!="dzip") 
                && (AutoKaroserija.ToLower()!="pickup"))){
                return BadRequest("Nevalidna karoserija");
            }

            if(string.IsNullOrWhiteSpace(AutoGorivo) || 
                ((AutoGorivo.ToLower()!="benzin") && 
                (AutoGorivo.ToLower()!="dizel") && 
                (AutoGorivo.ToLower()!="elektricnipogon") &&
                (AutoGorivo.ToLower()!="hibridnipogon")))
                {
                return BadRequest("Nevalidno gorivo");
                }
            

            if(AutoKubikaza < 0 || AutoKubikaza >8000){
                return BadRequest("Nevalidna kubikaza");
            }

            if(AutoSnagaMotora < 0 || AutoSnagaMotora > 2000 ){
                return BadRequest("Nevalidna snaga motora");
            }

            if(string.IsNullOrWhiteSpace(korisnickoImeVlasnika)){
                return BadRequest("Nevalidno korisnicko ime vlasnika");
            }

            if(string.IsNullOrWhiteSpace(PijacaNaziv)){
                return BadRequest("Nevalidan naziv pijace");
            }

            if(string.IsNullOrWhiteSpace(slikaAutomobila)){
                    return BadRequest("Nevalidna slika");
                }

                 //provera da takav automobil vec ne postoji
            var probniAutomobil = await Context.Automobili.Where(p=>p.brojSasije==AutoBrojSasije).FirstOrDefaultAsync();

            if (probniAutomobil!=null){
                return BadRequest("Ovaj automobil vec postoji u bazi");
            }

            var Pijaca = await Context.Pijace.Where(p=> p.naziv==PijacaNaziv).FirstOrDefaultAsync();
            if(Pijaca==null){
                return BadRequest("Pijaca ne postoji u bazi");
            }



            var Vlasnik = await Context.Korisnici.Where(p=>p.username==korisnickoImeVlasnika).FirstOrDefaultAsync();
            if(Vlasnik==null){
                return BadRequest("Korisnik ne postoji u bazi");
            }

            Automobil auto = new Automobil{
                
                brojSasije=AutoBrojSasije,
                marka=AutoMarka,
                model=AutoModel,
                godiste=AutoGodiste,
                kilometraza=AutoKilometraza,
                karoserija=AutoKaroserija,
                gorivo=AutoGorivo,
                kubikaza=AutoKubikaza,
                snagaMotora=AutoSnagaMotora,
                vlasnikAutomobila=Vlasnik,
                pijacaLokacija=Pijaca,
                slika = slikaAutomobila
                
                
            };


            Context.Automobili.Add(auto);
            await Context.SaveChangesAsync();

            return Ok(new{
                brojSasije=AutoBrojSasije,
                marka=AutoMarka,
                model=AutoModel,
                godiste=AutoGodiste,
                kilometraza=AutoKilometraza,
                karoserija=AutoKaroserija,
                gorivo=AutoGorivo,
                kubikaza=AutoKubikaza,
                snagaMotora=AutoSnagaMotora,
                vlasnik=Vlasnik,
                pijaca=Pijaca,
                 slika = slikaAutomobila
            });
        }
        [Route("IzmeniAutomobil/{brojSasije}/{novaKilometraza}")]
        [HttpPut]
        public async Task<ActionResult> IzmeniAutomobil(string brojSasije, int novaKilometraza){
            if (string.IsNullOrWhiteSpace(brojSasije)){
                return BadRequest("Nevalidan ID vozila");
            }

            if(novaKilometraza<0 || novaKilometraza>10000000){
                return BadRequest("Nevalidna nova kilometraza");
            }

            try
            {
                var probniAutomobil=await Context.Automobili
                .Include(p=>p.vlasnikAutomobila)
                .Include(p=>p.pijacaLokacija)
                .Where(p=>p.brojSasije==brojSasije).FirstOrDefaultAsync();
                if(probniAutomobil==null)
                {
                    return BadRequest("Vozilo ne postoji");
                }

                if(novaKilometraza<probniAutomobil.kilometraza){
                    return BadRequest("Nova kilometraza ne moze biti manja od stare");
                }



                probniAutomobil.kilometraza=novaKilometraza;
                await Context.SaveChangesAsync();
                
                return Ok(new{
                    brojSasije=probniAutomobil.brojSasije,
                    marka=probniAutomobil.marka,
                    model=probniAutomobil.model,
                    godiste=probniAutomobil.godiste,
                    kilometraza=probniAutomobil.kilometraza,
                    karoserija=probniAutomobil.karoserija,
                    gorivo=probniAutomobil.gorivo,
                    kubikaza=probniAutomobil.kubikaza,
                    snagaMotora=probniAutomobil.snagaMotora,
                    usernamevlasnika=probniAutomobil.vlasnikAutomobila.username,
                    pijaca=probniAutomobil.pijacaLokacija.naziv
                });

            }
            catch(Exception e)
            {
                return BadRequest(e.Message);
            }
        }






        [Route("ObrisiVozilo/{brojSasije}")]
        [HttpDelete]
        public async Task<ActionResult> ObrisiVozilo(string brojSasije){

            if(string.IsNullOrWhiteSpace(brojSasije)){
                return BadRequest("Nevalidan ID");
            }


            try
            {
                var probniAutomobil=await Context.Automobili.Where(p=>p.brojSasije==brojSasije).FirstOrDefaultAsync();
                if(probniAutomobil==null)
                {
                    return StatusCode(201,"Vozilo ne postoji");
                }
                Context.Automobili.Remove(probniAutomobil);
                await Context.SaveChangesAsync();
                
                return Ok("Vozilo obrisano");

            }
            catch(Exception e)
            {
                return BadRequest(e.Message);
            }

        }


        [Route("NadjiAutomobil/{brojSasijeAutomobila}")]
        [HttpGet]
        public async Task<ActionResult> NadjiAutomobil(string brojSasijeAutomobila){
            try{

                if(string.IsNullOrWhiteSpace(brojSasijeAutomobila)){
                    return BadRequest("Nevalidan broj sasije");
                }

                var probniAutomobil = await Context.Automobili
                .Include(p=>p.vlasnikAutomobila)
                .Include(p=>p.pijacaLokacija)
                .Where(p=>p.brojSasije==brojSasijeAutomobila).FirstOrDefaultAsync();

                if (probniAutomobil==null){
                    return BadRequest("Ovaj automobil ne postoji na pijaci");
                }

                return Ok(
                    new{
                        brojSasije=probniAutomobil.brojSasije,
                        marka=probniAutomobil.marka,
                        model=probniAutomobil.model,
                        godiste=probniAutomobil.godiste,
                        kilometraza=probniAutomobil.kilometraza,
                        karoserija=probniAutomobil.karoserija,
                        gorivo=probniAutomobil.gorivo,
                        kubikaza=probniAutomobil.kubikaza,
                        snaga=probniAutomobil.snagaMotora,
                        usernamevlasnika=probniAutomobil.vlasnikAutomobila.username,
                        pijaca=probniAutomobil.pijacaLokacija.naziv
                    }
                );

            }
            catch(Exception e){
                return BadRequest(e.Message);
            }
        }
    }

    

}