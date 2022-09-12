export class Korisnik{
    
    constructor(JMBG, username, ime, prezime, grad, adresa, telefon, email, slika){

        this.JMBG=JMBG;
        this.username=username;
        // this.sifra=sifra;
        this.ime=ime;
        this.prezime=prezime;
        this.grad=grad;
        this.adresa=adresa;
        this.telefon=telefon;
        this.email=email
        this.slika=slika;
        this.kontejner=null;

    }

    crtajKorisnika(host){

        // host.innerHTML="";

        let divProvera = document.createElement("div");
        divProvera=host.querySelector(".divNoviKorisnik");
        if(divProvera==null){


            let d = document.createElement("div");
            d.className="divNoviKorisnik";
            host.appendChild(d);

            d.innerHTML="";


            d=document.createElement("div");
            d.className="divNoviKorisnikSlika";
            host.querySelector(".divNoviKorisnik").appendChild(d);

            d=document.createElement("img");
            d.src="../Avatari/"+this.slika+".png";
            d.className="noviKorisnikSlika";
            host.querySelector(".divNoviKorisnikSlika").appendChild(d);

            

            d = document.createElement("div");
            d.className="divNoviKorisnikJMBG";
            host.querySelector(".divNoviKorisnik").appendChild(d);


            let l = document.createElement("label")
            l.innerHTML="JMBG";
            host.querySelector(".divNoviKorisnikJMBG").appendChild(l);


            l = document.createElement("label");
            l.innerHTML=this.JMBG;
            host.querySelector(".divNoviKorisnikJMBG").appendChild(l);



            d = document.createElement("div");
            d.className="divNoviKorisnikUsername";
            host.querySelector(".divNoviKorisnik").appendChild(d);


            l = document.createElement("label")
            l.innerHTML="Korisnicko ime";
            l.className="lblKorisnickoIme";
            host.querySelector(".divNoviKorisnikUsername").appendChild(l);


            l = document.createElement("label");
            l.innerHTML=this.username;
            host.querySelector(".divNoviKorisnikUsername").appendChild(l);






            // d = document.createElement("div");
            // d.className="divNoviKorisnikImePrezime";
            // host.querySelector(".divNoviKorisnik").appendChild(d);

            d=document.createElement("div");
            d.className="divNoviKorisnikIme";
            // host.querySelector(".divNoviKorisnikImePrezime").appendChild(d);
            host.querySelector(".divNoviKorisnik").appendChild(d);

            d=document.createElement("div");
            d.className="divNoviKorisnikPrezime";
            // host.querySelector(".divNoviKorisnikImePrezime").appendChild(d);
            host.querySelector(".divNoviKorisnik").appendChild(d);




            
            l = document.createElement("label");
            l.innerHTML="Ime";
            host.querySelector(".divNoviKorisnikIme").appendChild(l);

            l=document.createElement("label");
            l.innerHTML=this.ime;
            host.querySelector(".divNoviKorisnikIme").appendChild(l);



            l = document.createElement("label");
            l.innerHTML="Prezime";
            host.querySelector(".divNoviKorisnikPrezime").appendChild(l);

            l=document.createElement("label");
            l.innerHTML=this.prezime;
            host.querySelector(".divNoviKorisnikPrezime").appendChild(l);





            // d = document.createElement("div");
            // d.className="divNoviKorisnikGradAdresa";
            // host.querySelector(".divNoviKorisnik").appendChild(d);

            d=document.createElement("div");
            d.className="divNoviKorisnikGrad";
            host.querySelector(".divNoviKorisnik").appendChild(d);

            d=document.createElement("div");
            d.className="divNoviKorisnikAdresa";
            host.querySelector(".divNoviKorisnik").appendChild(d);


            l = document.createElement("label");
            l.innerHTML="Grad";
            host.querySelector(".divNoviKorisnikGrad").appendChild(l);

            l=document.createElement("label");
            l.innerHTML=this.grad;
            host.querySelector(".divNoviKorisnikGrad").appendChild(l);

            l = document.createElement("label");
            l.innerHTML="Adresa";
            host.querySelector(".divNoviKorisnikAdresa").appendChild(l);

            l=document.createElement("label");
            l.innerHTML=this.adresa;
            host.querySelector(".divNoviKorisnikAdresa").appendChild(l);



            // d = document.createElement("div");
            // d.className="divNoviKorisnikTelefonEmail";
            // host.querySelector(".divNoviKorisnik").appendChild(d);

            d=document.createElement("div");
            d.className="divNoviKorisnikTelefon";
            host.querySelector(".divNoviKorisnik").appendChild(d);

            d=document.createElement("div");
            d.className="divNoviKorisnikEmail";
            host.querySelector(".divNoviKorisnik").appendChild(d);


            l = document.createElement("label");
            l.innerHTML="Telefon";
            host.querySelector(".divNoviKorisnikTelefon").appendChild(l);

            l=document.createElement("label");
            l.innerHTML=this.telefon;
            host.querySelector(".divNoviKorisnikTelefon").appendChild(l);

            l = document.createElement("label");
            l.innerHTML="Email";
            host.querySelector(".divNoviKorisnikEmail").appendChild(l);

            l=document.createElement("label");
            l.innerHTML=this.email;
            l.className="lblNoviKorisnikEmail";
            host.querySelector(".divNoviKorisnikEmail").appendChild(l);



        }

        
    }
}