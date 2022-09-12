import { Korisnik } from "./Korisnik.js";
import { Automobil } from "./Automobil.js";
import { Oglas } from "./Oglas.js";
import { Pijaca } from "./Pijaca.js";

export class Sajt{
    
    constructor(){
        this.kontejner=null;
    }

    crtaj(host){

        
        if(host.className!="GlavniKontejner"){
            this.kontejner=document.createElement("div");
            this.kontejner.className="GlavniKontejner";
            host.appendChild(this.kontejner);
            
        }
        this.kontejner.innerHTML="";
        

        let kontejnerHeder = document.createElement("div");
        kontejnerHeder.className="Heder";
        this.kontejner.appendChild(kontejnerHeder);




        let kontejnerDugmici = document.createElement("div");
        kontejnerDugmici.className="Dugmici";
        this.kontejner.appendChild(kontejnerDugmici);





        let kontejnerPrikaz = document.createElement("div");
        kontejnerPrikaz.className="Prikaz";
        this.kontejner.appendChild(kontejnerPrikaz);

        let kontejnerPrikazLevo = document.createElement("div");
        kontejnerPrikazLevo.className="PrikazLevo";
        kontejnerPrikaz.appendChild(kontejnerPrikazLevo);

        let kontejnerPrikazDesno = document.createElement("div");
        kontejnerPrikazDesno.className="PrikazDesno";
        kontejnerPrikaz.appendChild(kontejnerPrikazDesno); 


        this.crtajHeder(kontejnerHeder);
        this.crtajDugmice(kontejnerDugmici);
        

    }


    crtajHeder(host){

        let d =document.createElement("div");
        d.className="divNaslov";
        host.appendChild(d);


        let s = document.createElement("img");
        s.onclick=(ev)=>{
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }


        let l = document.createElement("img");
        l.src="../Slike/logo.png"
        l.className="glavniNaslov";
        l.onclick=(ev)=>this.crtaj(this.kontejner);
        d.appendChild(l);


    }

    

    crtajDugmice(host){
        let divKorisnik = document.createElement("div");
        divKorisnik.className="divDugmiciKorisnik";
        host.appendChild(divKorisnik);

        let divAutomobil = document.createElement("div");
        divAutomobil.className="divDugmiciAutomobil";
        host.appendChild(divAutomobil);

        let divOglas = document.createElement("div");
        divOglas.className="divDugmiciOglas";
        host.appendChild(divOglas);

        let divPijaca = document.createElement("div");
        divPijaca.className="divDugmiciPijaca";
        host.appendChild(divPijaca);

        let se;
        let l;
        let op;
        let dugme;

        //Deo za korisnika

        l = document.createElement("label");
        l.innerHTML="Korisnik";
        l.className="DugmiciNaslov";
        divKorisnik.appendChild(l);


        se=document.createElement("select");
        se.className="selectKorisnik";
        divKorisnik.appendChild(se);

        op=document.createElement("option");
        op.innerHTML="Registruj korisnika";
        op.value=0;
        se.appendChild(op);

        op=document.createElement("option");
        op.innerHTML="Izmeni korisnika";
        op.value=1;
        se.appendChild(op);

        op=document.createElement("option");
        op.innerHTML="Oglasi korisnika";
        op.value=2;
        se.appendChild(op);

        op=document.createElement("option");
        op.innerHTML="Obrisi korisnika";
        op.value=3;
        se.appendChild(op);

        op=document.createElement("option");
        op.innerHTML="Zaboravljena sifra";
        op.value=4;
        se.appendChild(op);

        dugme = document.createElement("button");
        dugme.className="dugmeKorisnik";
        dugme.innerHTML="Izvrsi";
        divKorisnik.appendChild(dugme);
        dugme.onclick=(ev)=>{
            let desno = this.kontejner.querySelector(".PrikazDesno");
            desno.innerHTML="";
            let opt = this.kontejner.querySelector(".selectKorisnik");
            let provera=opt.options[opt.selectedIndex].value;
            if(provera==0){
                this.dodajKorisnika(this.kontejner.querySelector(".PrikazLevo"));
            }
            else if(provera==1){
                this.izmeniKorisnika(this.kontejner.querySelector(".PrikazLevo"));
            }
            else if(provera==2){
                this.prikaziPonude(this.kontejner.querySelector(".PrikazLevo"));
            }
            else if(provera==3){
                this.obrisiKorisnika(this.kontejner.querySelector(".PrikazLevo"));
            }
            else{
                this.vratiSifru(this.kontejner.querySelector(".PrikazLevo"));
            }


        }

        //----------------------------------------------------------------


        //Deo za automobile

        l = document.createElement("label");
        l.innerHTML="Automobil";
        l.className="DugmiciNaslov";
        divAutomobil.appendChild(l);


        se=document.createElement("select");
        se.className="selectAutomobil";
        divAutomobil.appendChild(se);

        op=document.createElement("option");
        op.innerHTML="Dodaj automobil";
        op.value=0;
        se.appendChild(op);

        op=document.createElement("option");
        op.innerHTML="Izmeni automobil";
        op.value=1;
        se.appendChild(op);

        dugme = document.createElement("button");
        dugme.innerHTML="Izvrsi";
        dugme.className="dugmeAutomobil";
        divAutomobil.appendChild(dugme);
        dugme.onclick=(ev)=>{
            let desno = this.kontejner.querySelector(".PrikazDesno");
            desno.innerHTML="";
            let opt = this.kontejner.querySelector(".selectAutomobil");
            let provera = opt.options[opt.selectedIndex].value;
            if(provera==0){
                this.dodajAutomobil(this.kontejner.querySelector(".PrikazLevo"));
            }
            else{
                this.izmeniAutomobil(this.kontejner.querySelector(".PrikazLevo"));
            }
        }
        
        //-----------------------------------------------------------------


        //Deo za oglase

        l = document.createElement("label");
        l.innerHTML="Oglas";
        l.className="DugmiciNaslov";
        divOglas.appendChild(l);


        se=document.createElement("select");
        se.className="selectOglas";
        divOglas.appendChild(se);

        op=document.createElement("option");
        op.innerHTML="Filtriraj oglase";
        op.value=0;
        se.appendChild(op);

        op=document.createElement("option");
        op.innerHTML="Nadji oglas";
        op.value=1;
        se.appendChild(op);

        op=document.createElement("option");
        op.innerHTML="Dodaj oglas";
        op.value=2;
        se.appendChild(op);

        op=document.createElement("option");
        op.innerHTML="Izmeni oglas";
        op.value=3;
        se.appendChild(op);

        op=document.createElement("option");
        op.innerHTML="Obrisi oglas";
        op.value=4;
        se.appendChild(op);

        dugme = document.createElement("button");
        dugme.innerHTML="Izvrsi";
        dugme.className="dugmeOglas";
        divOglas.appendChild(dugme);

        dugme.onclick=(ev)=>{
            let desno = this.kontejner.querySelector(".PrikazDesno");
            desno.innerHTML="";
            let opt = this.kontejner.querySelector(".selectOglas");
            let provera = opt.options[opt.selectedIndex].value;

            if(provera==0){
                this.filtrirajOglase(this.kontejner.querySelector(".PrikazLevo"));
            }
            else if (provera==1){
                this.nadjiOglas(this.kontejner.querySelector(".PrikazLevo"));
            }
            else if (provera==2){
                this.dodajOglas(this.kontejner.querySelector(".PrikazLevo"));
            }
            else if (provera==3){
                this.izmeniOglas(this.kontejner.querySelector(".PrikazLevo"));
            }
            else{
                this.obrisiOglas(this.kontejner.querySelector(".PrikazLevo"));
            }
        }


        //Deo za pijace

        l = document.createElement("label");
        l.innerHTML="Pijaca";
        l.className="DugmiciNaslov";
        divPijaca.appendChild(l);


        se=document.createElement("select");
        se.className="selectPijaca";
        divPijaca.appendChild(se);

        op=document.createElement("option");
        op.innerHTML="Dodaj pijacu";
        op.value=0;
        se.appendChild(op);

        op=document.createElement("option");
        op.innerHTML="Izmeni pijacu";
        op.value=1;
        se.appendChild(op);

        op=document.createElement("option");
        op.innerHTML="Nadji pijacu";
        op.value=2;
        se.appendChild(op);

        op=document.createElement("option");
        op.innerHTML="Prikazi sve pijace";
        op.value=3;
        se.appendChild(op);

        op=document.createElement("option");
        op.innerHTML="Obrisi pijacu";
        op.value=4;
        se.appendChild(op);

        dugme = document.createElement("button");
        dugme.innerHTML="Izvrsi";
        dugme.className="dugmePijaca";
        divPijaca.appendChild(dugme);
        dugme.onclick=(ev)=>{
            let desno = this.kontejner.querySelector(".PrikazDesno");
            desno.innerHTML="";
            let opt = this.kontejner.querySelector(".selectPijaca");
            let provera = opt.options[opt.selectedIndex].value;
            if(provera==0){
                this.dodajPijacu(this.kontejner.querySelector(".PrikazLevo"));
            }
            else if(provera==1){
                this.izmeniPijacu(this.kontejner.querySelector(".PrikazLevo"));
            }
            else if(provera==2){
                this.nadjiPijacu(this.kontejner.querySelector(".PrikazLevo"));
            }
            else if(provera==3){
                this.svePijace(this.kontejner.querySelector(".PrikazLevo"));
            }
            else if(provera==4){
                this.obrisiPijacu(this.kontejner.querySelector(".PrikazLevo"));
            }

        }

    }

    brisi(){
        this.kontejner.querySelector(".PrikazLevo").innerHTML="";
        this.kontejner.querySelector(".PrikazLevo").classList.add("PrikazLevoObrisiPadding");
        this.kontejner.querySelector(".PrikazLevo").classList.remove("PrikazLevoDodajPadding");

        this.kontejner.querySelector(".PrikazDesno").innerHTML="";
    }


    dodajPijacu(host){

        
        host.innerHTML="";

        host.classList.add("PrikazLevoDodajPadding");
        host.classList.remove("PrikazLevoObrisiPadding");

        let l;
        let i;
        let btn;
        let d;

        let h = document.createElement("div");
        h.className="h";
        host.appendChild(h);

        let x = document.createElement("img");
        x.src="../Slike/x.ico";
        x.className="x";
        h.appendChild(x);


        x.onclick=(ev)=>{
            this.brisi();
        }




        l=document.createElement("label");
        l.innerHTML="Dodaj pijacu";
        l.className="lblPrikazLevoNaslov";
        host.appendChild(l);





        l=document.createElement("div");
        l.className="divPijacaDodajUsernameSifra";
        host.appendChild(l);

        l=document.createElement("div");
        l.className="divPijacaDodajUsername";
        host.querySelector(".divPijacaDodajUsernameSifra").appendChild(l);

        l=document.createElement("div");
        l.className="divPijacaDodajSifra";
        host.querySelector(".divPijacaDodajUsernameSifra").appendChild(l);


        

        l=document.createElement("label");
        l.innerHTML="Korisnicko ime";
        host.querySelector(".divPijacaDodajUsername").appendChild(l);

        
        i=document.createElement("input");
        i.className="inputPijacaDodajUsername";
        host.querySelector(".divPijacaDodajUsername").appendChild(i);





        l=document.createElement("label");
        l.innerHTML="Lozinka";
        host.querySelector(".divPijacaDodajSifra").appendChild(l);

        
        i=document.createElement("input");
        i.className="inputPijacaDodajSifra";
        i.type="password";
        host.querySelector(".divPijacaDodajSifra").appendChild(i);




        l=document.createElement("div");
        l.className="divPijacaDodajDugme";
        host.appendChild(l);

        btn = document.createElement("button");
        btn.innerHTML="Prijavi se";
        btn.className="btnNadji";
        btn.classList.add("btnPijacaDodajPrijaviSe");
        host.querySelector(".divPijacaDodajDugme").appendChild(btn);


        d=document.createElement("div");
        d.className="divPijacaDodajDole";
        d.innerHTML="";
        host.appendChild(d);


        btn.onclick=(ev)=>{
            let validacija="";

            let username1=host.querySelector(".inputPijacaDodajUsername").value;
            let sifra1=host.querySelector(".inputPijacaDodajSifra").value;

            if(username1===null || username1===undefined || username1===""){
                validacija+="Neispravno korisnicko ime\n";
            }

            if(sifra1===null || sifra1===undefined || sifra1===""){
                validacija+="Neispravna lozinka\n";
            }

            if(validacija!=""){
                alert(validacija);
            }

            else{
                fetch("https://localhost:5001/Korisnik/NadjiAdmina/"+username1+"/"+sifra1,
                {
                    method:"GET"
                }).then(s=>{
                    if(s.ok){


                        host.querySelector(".divPijacaDodajDole").innerHTML="";

                        host.querySelector(".inputPijacaDodajUsername").disabled=true;
                        host.querySelector(".inputPijacaDodajUsername").style.cursor="not-allowed";


                        host.querySelector(".inputPijacaDodajSifra").disabled=true;
                        host.querySelector(".inputPijacaDodajSifra").style.cursor="not-allowed";


                        host.querySelector(".btnPijacaDodajPrijaviSe").disabled=true;
                        host.querySelector(".btnPijacaDodajPrijaviSe").style.cursor="not-allowed";
                        






                        l=document.createElement("div");
                        l.className="divPijacaDodajNazivLokacija";
                        host.querySelector(".divPijacaDodajDole").appendChild(l);

                        l=document.createElement("div");
                        l.className="divPijacaDodajNaziv";
                        host.querySelector(".divPijacaDodajNazivLokacija").appendChild(l);

                        l=document.createElement("div");
                        l.className="divPijacaDodajLokacija";
                        host.querySelector(".divPijacaDodajNazivLokacija").appendChild(l);


                        

                        l=document.createElement("label");
                        l.innerHTML="Naziv";
                        host.querySelector(".divPijacaDodajNaziv").appendChild(l);

                        
                        i=document.createElement("input");
                        i.className="inputPijacaDodajNaziv";
                        host.querySelector(".divPijacaDodajNaziv").appendChild(i);





                        l=document.createElement("label");
                        l.innerHTML="Grad";
                        host.querySelector(".divPijacaDodajLokacija").appendChild(l);

                        
                        i=document.createElement("input");
                        i.className="inputPijacaDodajLokacija";
                        host.querySelector(".divPijacaDodajLokacija").appendChild(i);




                        //*********************************************************************** */


                        l=document.createElement("div");
                        l.className="divPijacaDodajAdresaTelefon";
                        host.querySelector(".divPijacaDodajDole").appendChild(l);

                        l=document.createElement("div");
                        l.className="divPijacaDodajAdresa";
                        host.querySelector(".divPijacaDodajAdresaTelefon").appendChild(l);

                        l=document.createElement("div");
                        l.className="divPijacaDodajTelefon";
                        host.querySelector(".divPijacaDodajAdresaTelefon").appendChild(l);


                        

                        l=document.createElement("label");
                        l.innerHTML="Adresa";
                        host.querySelector(".divPijacaDodajAdresa").appendChild(l);

                        
                        i=document.createElement("input");
                        i.className="inputPijacaDodajAdresa";
                        host.querySelector(".divPijacaDodajAdresa").appendChild(i);





                        l=document.createElement("label");
                        l.innerHTML="Telefon";
                        host.querySelector(".divPijacaDodajTelefon").appendChild(l);

                        
                        i=document.createElement("input");
                        i.className="inputPijacaDodajTelefon";
                        host.querySelector(".divPijacaDodajTelefon").appendChild(i);





                        i=document.createElement("div");
                        i.className="divPijacaDodajDugmeDole";
                        host.querySelector(".divPijacaDodajDole").appendChild(i);

                        let btn1=document.createElement("button");
                        btn1.innerHTML="Dodaj pijacu";
                        btn1.className="btnDodaj";
                        host.querySelector(".divPijacaDodajDugmeDole").appendChild(btn1);

                        d=document.createElement("div");
                        d.className="divPijacaDodajDole1";
                        d.innerHTML="";
                        host.appendChild(d);


                        btn1.onclick=(ev)=>{
                            let validacija="";
                            let naziv1 = host.querySelector(".inputPijacaDodajNaziv").value;
                            if(naziv1===null || naziv1===undefined || naziv1===""){
                                validacija+="Nevalidan naziv\n";
                            }

                            let lokacija1 = host.querySelector(".inputPijacaDodajLokacija").value;

                            if(lokacija1===null || lokacija1===undefined || lokacija1===""){
                                validacija+="Nevalidan grad\n";
                            }

                            let adresa1 = host.querySelector(".inputPijacaDodajAdresa").value;

                            if(adresa1===null || adresa1===undefined || adresa1===""){
                                validacija+="Nevalidna adresa\n";
                            }


                            let telefon1 = host.querySelector(".inputPijacaDodajTelefon").value;

                            if(telefon1===null || telefon1===undefined || telefon1===""){
                                validacija+="Nevalidan telefon\n";
                            }


                            if(validacija!=""){
                                alert(validacija);
                            }

                            else{
                                fetch("https://localhost:5001/Pijaca/DodajPijacu/"+naziv1+"/"+lokacija1+"/"+adresa1+"/"+telefon1,
                                {
                                    method:"POST"
                                }).then(s=>{
                                    if(s.ok){
                                        s.json().then(data=>{
                                            const novaPijaca = new Pijaca(data.naziv, data.lokacija, data.adresa, data.telefon);
                                            this.kontejner.querySelector(".PrikazDesno").innerHTML="";
                                            novaPijaca.crtajPijacu(this.kontejner.querySelector(".PrikazDesno"));
                                        })
                                    }
                                    else{
                                        s.text().then(data=>{
                                            // host.querySelector(".divOglasIzmeniDole1").innerHTML="";
                                            // this.kontejner.querySelector(".PrikazDesno").innerHTML="";
                                            alert(data)
                                        })
                                    }
                                })
                            }
                        }


                    }
                    else{
                        s.text().then(data=>{
                            // host.querySelector(".divOglasIzmeniDole1").innerHTML="";
                            // this.kontejner.querySelector(".PrikazDesno").innerHTML="";
                            alert(data)
                        })
                    }
                })
            }
        }

    }

    izmeniPijacu(host){



        host.innerHTML="";

        host.classList.add("PrikazLevoDodajPadding");
        host.classList.remove("PrikazLevoObrisiPadding");

        let l;
        let i;
        let btn;
        let d;


        let h = document.createElement("div");
        h.className="h";
        host.appendChild(h);

        let x = document.createElement("img");
        x.src="../Slike/x.ico";
        x.className="x";
        h.appendChild(x);


        x.onclick=(ev)=>{
            this.brisi();
        }


        l=document.createElement("label");
        l.innerHTML="Izmeni pijacu";
        l.className="lblPrikazLevoNaslov";
        host.appendChild(l);


        l=document.createElement("div");
        l.className="divPijacaIzmeniUsernameSifra";
        host.appendChild(l);

        l=document.createElement("div");
        l.className="divPijacaIzmeniUsername";
        host.querySelector(".divPijacaIzmeniUsernameSifra").appendChild(l);

        l=document.createElement("div");
        l.className="divPijacaIzmeniSifra";
        host.querySelector(".divPijacaIzmeniUsernameSifra").appendChild(l);


        

        l=document.createElement("label");
        l.innerHTML="Korisnicko ime";
        host.querySelector(".divPijacaIzmeniUsername").appendChild(l);

        
        i=document.createElement("input");
        i.className="inputPijacaIzmeniUsername";
        host.querySelector(".divPijacaIzmeniUsername").appendChild(i);





        l=document.createElement("label");
        l.innerHTML="Lozinka";
        host.querySelector(".divPijacaIzmeniSifra").appendChild(l);

        
        i=document.createElement("input");
        i.className="inputPijacaIzmeniSifra";
        i.type="password";
        host.querySelector(".divPijacaIzmeniSifra").appendChild(i);




        l=document.createElement("div");
        l.className="divPijacaIzmeniDugme";
        host.appendChild(l);

        btn = document.createElement("button");
        btn.innerHTML="Prijavi se";
        btn.className="btnNadji";
        btn.classList.add("btnPijacaIzmeniPrijaviSe");
        host.querySelector(".divPijacaIzmeniDugme").appendChild(btn);


        d=document.createElement("div");
        d.className="divPijacaIzmeniDole";
        d.innerHTML="";
        host.appendChild(d);


        btn.onclick=(ev)=>{
            let validacija="";

            let username1=host.querySelector(".inputPijacaIzmeniUsername").value;
            let sifra1=host.querySelector(".inputPijacaIzmeniSifra").value;

            if(username1===null || username1===undefined || username1===""){
                validacija+="Neispravno korisnicko ime\n";
            }

            if(sifra1===null || sifra1===undefined || sifra1===""){
                validacija+="Neispravna lozinka\n";
            }

            if(validacija!=""){
                alert(validacija);
            }

            else{
                fetch("https://localhost:5001/Korisnik/NadjiAdmina/"+username1+"/"+sifra1,
                {
                    method:"GET"
                }).then(s=>{
                    if(s.ok){
                        host.querySelector(".divPijacaIzmeniDole").innerHTML="";


                        host.querySelector(".inputPijacaIzmeniUsername").disabled=true;
                        host.querySelector(".inputPijacaIzmeniUsername").style.cursor="not-allowed";


                        host.querySelector(".inputPijacaIzmeniSifra").disabled=true;
                        host.querySelector(".inputPijacaIzmeniSifra").style.cursor="not-allowed";


                        host.querySelector(".btnPijacaIzmeniPrijaviSe").disabled=true;
                        host.querySelector(".btnPijacaIzmeniPrijaviSe").style.cursor="not-allowed";

                        l=document.createElement("div");
                        l.className="divPijacaIzmeniNaziv";
                        host.querySelector(".divPijacaIzmeniDole").appendChild(l);
                        
                
                        l=document.createElement("label");
                        l.innerHTML="Naziv";
                        host.querySelector(".divPijacaIzmeniNaziv").appendChild(l);
                
                        i=document.createElement("select");
                        i.className="selectIzmeniPijacu";
                        host.querySelector(".divPijacaIzmeniNaziv").appendChild(i);

                        
                        let op;

                        fetch("https://localhost:5001/Pijaca/PreuzmiPijace/",
                        {
                            method:"GET",
                        }).then(s=>{
                            if(s.ok){
                                s.json().then(data1=>{
                                    if(data1.length==0){
                                        alert("Ne postoji nijedna pijaca!");
                                    }
                                    else{
                                        data1.forEach((data,index)=>{
                                            op=document.createElement("option");
                                            op.innerHTML=data.naziv;
                                            host.querySelector(".selectIzmeniPijacu").appendChild(op);    
                                            // i.appendChild(op);
                                        })
                                    }
                                })
                            }
                            else{
                                s.text().then(data=>{
                                    alert(data);
                                })
                            }
                        })
                
                
                
                
                        l=document.createElement("div");
                        l.className="divPijacaIzmeniDugmeDole";
                        host.querySelector(".divPijacaIzmeniDole").appendChild(l);
                
                        let btn1 = document.createElement("button");
                        btn1.innerHTML="Nadji pijacu";
                        btn1.className="btnNadji";
                        btn1.classList.add("izmeniPijacuu");
                        host.querySelector(".divPijacaIzmeniDugmeDole").appendChild(btn1);
                
                
                
                
                        d = document.createElement("div");
                        d.className="divPijacaIzmeniDole1";
                        d.innerHTML="";
                        host.appendChild(d);


                        btn1.onclick=(ev)=>{
                            let pijacaSelect1 = host.querySelector(".selectIzmeniPijacu");
                            let pijacaOpcija1 = pijacaSelect1.options[pijacaSelect1.selectedIndex].text;
                            if(pijacaOpcija1===null || pijacaOpcija1===undefined || pijacaOpcija1===""){
                                validacija+="Nevalidna pijaca\n";
                            }
                            else{
                                fetch("https://localhost:5001/Pijaca/PreuzmiPijacu/"+pijacaOpcija1,
                                {
                                    method:"GET"
                                }).then(s=>{
                                    if(s.ok){
                                        s.json().then(data=>{
                                            let novaPijaca = new Pijaca(data.naziv, data.lokacija, data.adresa, data.telefon);
                                            novaPijaca.crtajPijacu(this.kontejner.querySelector(".PrikazDesno"))


                                            host.querySelector(".selectIzmeniPijacu").disabled=true;
                                            host.querySelector(".selectIzmeniPijacu").style.cursor="not-allowed";

                                            host.querySelector(".izmeniPijacuu").disabled=true;
                                            host.querySelector(".izmeniPijacuu").style.cursor="not-allowed";



                                            d=host.querySelector(".divPijacaIzmeniDole1");
                                            d.innerHTML="";


                                            d=document.createElement("div");
                                            d.className="divPijacaIzmeniTelefon";
                                            host.querySelector(".divPijacaIzmeniDole1").appendChild(d);
                                    
                            
                            
                                            l=document.createElement("label");
                                            l.innerHTML="Novi telefon";
                                            host.querySelector(".divPijacaIzmeniTelefon").appendChild(l);
                            
                            
                                            i=document.createElement("input");
                                            i.className="KilometrazaAutomobilIzmeni";
                                            host.querySelector(".divPijacaIzmeniTelefon").appendChild(i);
                            



                                            
                                            d=document.createElement("div");
                                            d.className="divPijacaIzmeniDugmeDole1";
                                            host.querySelector(".divPijacaIzmeniDole1").appendChild(d);
                            
                                            let btn2 = document.createElement("button");
                                            btn2.innerHTML="Izmeni automobil";
                                            btn2.className="btnIzmeni";
                                            host.querySelector(".divPijacaIzmeniDugmeDole1").appendChild(btn2);

                                            btn2.onclick=(ev)=>{
                                                let telefon1 = host.querySelector(".KilometrazaAutomobilIzmeni").value;
                                                if(telefon1===null || telefon1===undefined || telefon1===""){
                                                    telefon1="-";
                                                }
                                                
                                                else{
                                                    fetch("https://localhost:5001/Pijaca/IzmeniPijacu/"+pijacaOpcija1+"/"+telefon1,
                                                    {
                                                        method:"PUT"
                                                    }).then(s=>{
                                                        if(s.ok){
                                                            s.json().then(data=>{
                                                                let novaPijaca = new Pijaca(data.naziv, data.lokacija, data.adresa, data.telefon);
                                                                let w = this.kontejner.querySelector(".PrikazDesno");
                                                                w.innerHTML="";  
                                                                novaPijaca.crtajPijacu(this.kontejner.querySelector(".PrikazDesno"))
                    
                                                            })
                                                        }
                                                        else{
                                                            s.text().then(data=>{
                                                                alert(data);
                                                            })
                                                        }
                                                    })
                                                }

                                            }
                                            
                                        })
                                    }
                                    else{
                                        s.text().then(data=>{
                                            alert(data);
                                        })
                                    }
                                })
                            }
                        }
                    }
                    else{
                        s.text().then(data=>{
                            // host.querySelector(".divOglasIzmeniDole1").innerHTML="";
                            // this.kontejner.querySelector(".PrikazDesno").innerHTML="";
                            alert(data)
                        })
                    }
                })
            }
        }
    }

    nadjiPijacu(host){

        host.innerHTML="";

        host.classList.add("PrikazLevoDodajPadding");
        host.classList.remove("PrikazLevoObrisiPadding");

        let l;
        let i;
        let btn;


        let h = document.createElement("div");
        h.className="h";
        host.appendChild(h);

        let x = document.createElement("img");
        x.src="../Slike/x.ico";
        x.className="x";
        h.appendChild(x);


        x.onclick=(ev)=>{
            this.brisi();
        }


        l=document.createElement("label");
        l.innerHTML="Nadji pijacu";
        l.className="lblPrikazLevoNaslov";
        host.appendChild(l);




        l=document.createElement("div");
        l.className="divPijacaNadjiNaziv";
        host.appendChild(l);

        l=document.createElement("label");
        l.innerHTML="Naziv";
        host.querySelector(".divPijacaNadjiNaziv").appendChild(l);

        i=document.createElement("select");
        i.className="selectNadjiPijacuNaziv"
        host.querySelector(".divPijacaNadjiNaziv").appendChild(i);

        let op;

        fetch("https://localhost:5001/Pijaca/PreuzmiPijace/",
        {
            method:"GET",
        }).then(s=>{
            if(s.ok){
                s.json().then(data1=>{
                    if(data1.length==0){
                        alert("Ne postoji nijedna pijaca!");
                    }
                    else{
                        data1.forEach((data,index)=>{
                            op=document.createElement("option");
                            op.innerHTML=data.naziv;
                            host.querySelector(".selectNadjiPijacuNaziv").appendChild(op);    
                            // i.appendChild(op);
                        })
                    }
                })
            }
            else{
                s.text().then(data=>{
                    alert(data);
                })
            }
        })




        l=document.createElement("div");
        l.className="divPijacaNadjiDugme";
        host.appendChild(l);


        btn = document.createElement("button");
        btn.innerHTML="Nadji";
        btn.className="btnNadji";
        host.querySelector(".divPijacaNadjiDugme").appendChild(btn);

        btn.onclick=(ev)=>{
            let pijacaSelect1 = host.querySelector(".selectNadjiPijacuNaziv");
            let pijacaOpcija1 = pijacaSelect1.options[pijacaSelect1.selectedIndex].text;
            if(pijacaOpcija1===null || pijacaOpcija1===undefined || pijacaOpcija1===""){
                validacija+="Nevalidna pijaca\n";
            }
            else{
                fetch("https://localhost:5001/Pijaca/PreuzmiPijacu/"+pijacaOpcija1,
                {
                    method:"GET",
                }).then(s=>{
                    if(s.ok){
                        s.json().then(data=>{
                            let novaPijaca = new Pijaca(data.naziv, data.lokacija, data.adresa, data.telefon);
                            let w = this.kontejner.querySelector(".PrikazDesno");
                            w.innerHTML="";  
                            novaPijaca.crtajPijacu(this.kontejner.querySelector(".PrikazDesno"))

                        })
                    }
                    else{
                        s.text().then(data=>{
                            alert(data);
                        })
                    }
                })
            }
        }
    }

    svePijace(host){

        host.innerHTML="";

        host.classList.add("PrikazLevoDodajPadding");
        host.classList.remove("PrikazLevoObrisiPadding");

        let l;
        let i;
        let btn;
        let d;


        let h = document.createElement("div");
        h.className="h";
        host.appendChild(h);

        let x = document.createElement("img");
        x.src="../Slike/x.ico";
        x.className="x";
        h.appendChild(x);


        x.onclick=(ev)=>{
            this.brisi();
        }


        l=document.createElement("label");
        l.innerHTML="Sve pijace";
        l.className="lblPrikazLevoNaslov";
        host.appendChild(l);


        l=document.createElement("div");
        l.className="divPijacaSveUsernameSifra";
        host.appendChild(l);

        l=document.createElement("div");
        l.className="divPijacaSveUsername";
        host.querySelector(".divPijacaSveUsernameSifra").appendChild(l);

        l=document.createElement("div");
        l.className="divPijacaSveSifra";
        host.querySelector(".divPijacaSveUsernameSifra").appendChild(l);


        

        l=document.createElement("label");
        l.innerHTML="Korisnicko ime";
        host.querySelector(".divPijacaSveUsername").appendChild(l);

        
        i=document.createElement("input");
        i.className="inputPijacaSveUsername";
        host.querySelector(".divPijacaSveUsername").appendChild(i);





        l=document.createElement("label");
        l.innerHTML="Lozinka";
        host.querySelector(".divPijacaSveSifra").appendChild(l);

        
        i=document.createElement("input");
        i.className="inputPijacaSveSifra";
        i.type="password";
        host.querySelector(".divPijacaSveSifra").appendChild(i);




        l=document.createElement("div");
        l.className="divPijacaSveDugme";
        host.appendChild(l);

        btn = document.createElement("button");
        btn.innerHTML="Prijavi se";
        btn.className="btnNadji";
        btn.classList.add("btnPijacaSvePrijaviSe");
        host.querySelector(".divPijacaSveDugme").appendChild(btn);


        btn.onclick=(ev)=>{
            let validacija="";

            let username1=host.querySelector(".inputPijacaSveUsername").value;
            let sifra1=host.querySelector(".inputPijacaSveSifra").value;

            if(username1===null || username1===undefined || username1===""){
                validacija+="Neispravno korisnicko ime\n";
            }

            if(sifra1===null || sifra1===undefined || sifra1===""){
                validacija+="Neispravna lozinka\n";
            }

            if(validacija!=""){
                alert(validacija);
            }

            else{
                fetch("https://localhost:5001/Korisnik/NadjiAdmina/"+username1+"/"+sifra1,
                {
                    method:"GET"
                }).then(s=>{
                    if(s.ok){
                        fetch("https://localhost:5001/Pijaca/PreuzmiPijace",
                        {
                            method:"GET"
                        }).then(q=>{
                            if(q.ok){
                                q.json().then(data1=>{
                                    if(data1.length==0){
                                        alert("Ne postoji nijenda pijaca u bazi");
                                    }
                                    else{
                                        data1.forEach((data, index)=>{
                                            const novaPijaca = new Pijaca(data.naziv, data.lokacija, data.adresa, data.telefon);
                                            novaPijaca.crtajPijace(this.kontejner.querySelector(".PrikazDesno"), index); 
                                        })

                                        host.querySelector(".inputPijacaSveUsername").disabled=true;
                                        host.querySelector(".inputPijacaSveUsername").style.cursor="not-allowed";

                                        host.querySelector(".inputPijacaSveSifra").disabled=true;
                                        host.querySelector(".inputPijacaSveSifra").style.cursor="not-allowed";

                                        host.querySelector(".btnPijacaSvePrijaviSe").disabled=true;
                                        host.querySelector(".btnPijacaSvePrijaviSe").style.cursor="not-allowed";
                                    }
                                })
                            }
                        })

                    }
                    else{
                        s.text().then(data=>{
                            alert(data);
                            this.kontejner.querySelector(".PrikazDesno").innerHTML="";
                        })
                    }
                })
            }
        }

    }

    obrisiPijacu(host){
        host.innerHTML="";

        host.classList.add("PrikazLevoDodajPadding");
        host.classList.remove("PrikazLevoObrisiPadding");

        let l;
        let i;
        let btn;
        let d;


        let h = document.createElement("div");
        h.className="h";
        host.appendChild(h);

        let x = document.createElement("img");
        x.src="../Slike/x.ico";
        x.className="x";
        h.appendChild(x);


        x.onclick=(ev)=>{
            this.brisi();
        }


        l=document.createElement("label");
        l.innerHTML="Obrisi pijacu";
        l.className="lblPrikazLevoNaslov";
        host.appendChild(l);


        l=document.createElement("div");
        l.className="divPijacaObrisiUsernameSifra";
        host.appendChild(l);

        l=document.createElement("div");
        l.className="divPijacaObrisiUsername";
        host.querySelector(".divPijacaObrisiUsernameSifra").appendChild(l);

        l=document.createElement("div");
        l.className="divPijacaObrisiSifra";
        host.querySelector(".divPijacaObrisiUsernameSifra").appendChild(l);


        

        l=document.createElement("label");
        l.innerHTML="Korisnicko ime";
        host.querySelector(".divPijacaObrisiUsername").appendChild(l);

        
        i=document.createElement("input");
        i.className="inputPijacaObrisiUsername";
        host.querySelector(".divPijacaObrisiUsername").appendChild(i);





        l=document.createElement("label");
        l.innerHTML="Lozinka";
        host.querySelector(".divPijacaObrisiSifra").appendChild(l);

        
        i=document.createElement("input");
        i.className="inputPijacaObrisiSifra";
        i.type="password";
        host.querySelector(".divPijacaObrisiSifra").appendChild(i);




        l=document.createElement("div");
        l.className="divPijacaObrisiDugme";
        host.appendChild(l);

        btn = document.createElement("button");
        btn.innerHTML="Prijavi se";
        btn.className="btnNadji";
        btn.classList.add("btnPijacaObrisiPrijaviSe");
        host.querySelector(".divPijacaObrisiDugme").appendChild(btn);


        d=document.createElement("div");
        d.className="divPijacaObrisiDole";
        d.innerHTML="";
        host.appendChild(d);


        btn.onclick=(ev)=>{
            let validacija="";

            let username1=host.querySelector(".inputPijacaObrisiUsername").value;
            let sifra1=host.querySelector(".inputPijacaObrisiSifra").value;

            if(username1===null || username1===undefined || username1===""){
                validacija+="Neispravno korisnicko ime\n";
            }

            if(sifra1===null || sifra1===undefined || sifra1===""){
                validacija+="Neispravna lozinka\n";
            }

            if(validacija!=""){
                alert(validacija);
            }

            else{
                fetch("https://localhost:5001/Korisnik/NadjiAdmina/"+username1+"/"+sifra1,
                {
                    method:"GET"
                }).then(s=>{
                    if(s.ok){

                        host.querySelector(".divPijacaObrisiDole").innerHTML="";

                        host.querySelector(".inputPijacaObrisiUsername").disabled=true;
                        host.querySelector(".inputPijacaObrisiUsername").style.cursor="not-allowed";

                        host.querySelector(".inputPijacaObrisiSifra").disabled=true;
                        host.querySelector(".inputPijacaObrisiSifra").style.cursor="not-allowed";

                        host.querySelector(".btnPijacaObrisiPrijaviSe").disabled=true;
                        host.querySelector(".btnPijacaObrisiPrijaviSe").style.cursor="not-allowed";


                        l=document.createElement("div");
                        l.className="divPijacaObrisiNaziv";
                        host.querySelector(".divPijacaObrisiDole").appendChild(l);
                        
                
                        l=document.createElement("label");
                        l.innerHTML="Naziv";
                        host.querySelector(".divPijacaObrisiNaziv").appendChild(l);
                
                        
                        i=document.createElement("select");
                        i.className="selectNadjiPijacuNazivObrisi"
                        host.querySelector(".divPijacaObrisiNaziv").appendChild(i);

                        let op;

                        fetch("https://localhost:5001/Pijaca/PreuzmiPijace/",
                        {
                            method:"GET",
                        }).then(s=>{
                            if(s.ok){
                                s.json().then(data1=>{
                                    if(data1.length==0){
                                        alert("Ne postoji nijedna pijaca!");
                                    }
                                    else{
                                        data1.forEach((data,index)=>{
                                            op=document.createElement("option");
                                            op.innerHTML=data.naziv;
                                            host.querySelector(".selectNadjiPijacuNazivObrisi").appendChild(op);    
                                            // i.appendChild(op);
                                        })
                                    }
                                })
                            }
                            else{
                                s.text().then(data=>{
                                    alert(data);
                                })
                            }
                        })
                
                
                
                
                        l=document.createElement("div");
                        l.className="divPijacaObrisiDugmeDole";
                        host.querySelector(".divPijacaObrisiDole").appendChild(l);
                
                        let btn1 = document.createElement("button");
                        btn1.innerHTML="Obrisi pijacu";
                        btn1.className="btnObrisi";
                        btn1.classList.add("btnObrisiSelect");
                        host.querySelector(".divPijacaObrisiDugmeDole").appendChild(btn1);
                
                
                
                
                        d = document.createElement("div");
                        d.className="divPijacaObrisiDole1";
                        d.innerHTML="";
                        host.appendChild(d);


                        btn1.onclick=(ev)=>{

                            let pijacaSelect1 = host.querySelector(".selectNadjiPijacuNazivObrisi");
                            let pijacaOpcija1 = pijacaSelect1.options[pijacaSelect1.selectedIndex].text;
                            if(pijacaOpcija1===null || pijacaOpcija1===undefined || pijacaOpcija1===""){
                                validacija+="Nevalidna pijaca\n";
                            }
                            else{
                                fetch("https://localhost:5001/Pijaca/PreuzmiPijacu/"+pijacaOpcija1,
                                {
                                    method:"GET"
                                }).then(s=>{
                                    if(s.ok){
                                        s.json().then(data=>{
                                            const novaPijaca = new Pijaca(data.naziv, data.lokacija, data.adresa, data.telefon);
                                            novaPijaca.crtajPijacu(this.kontejner.querySelector(".PrikazDesno")); 

                                            host.querySelector(".selectNadjiPijacuNazivObrisi").disabled=true;
                                            host.querySelector(".selectNadjiPijacuNazivObrisi").style.cursor="not-allowed";

                                            host.querySelector(".btnObrisiSelect").disabled=true;
                                            host.querySelector(".btnObrisiSelect").style.cursor="not-allowed";


                                            host.querySelector(".divPijacaObrisiDole1").innerHTML="";

                                            d=document.createElement("div");
                                            d.className="divLabelaObrisiPijacu";
                                            host.querySelector(".divPijacaObrisiDole1").appendChild(d);

                                            l=document.createElement("label");
                                            l.innerHTML="Da li ste sigurni?"
                                            l.className="lblPrikazLevoNaslov";
                                            host.querySelector(".divLabelaObrisiPijacu").appendChild(l);





                                            d=document.createElement("div");
                                            d.className="divObrisiPijacuDugmici";
                                            host.querySelector(".divPijacaObrisiDole1").appendChild(d);

                                            d=document.createElement("div");
                                            d.className="divObrisiPijacuDugmiciPotvrdi";
                                            host.querySelector(".divObrisiPijacuDugmici").appendChild(d);

                                            d=document.createElement("div");
                                            d.className="divObrisiPijacuDugmiciPonisti";
                                            host.querySelector(".divObrisiPijacuDugmici").appendChild(d);




                                            let btnPotvrdi=document.createElement("button");
                                            btnPotvrdi.className="divObrisiPijacuPotvrdi";
                                            btnPotvrdi.innerHTML="Potvrdi";
                                            host.querySelector(".divObrisiPijacuDugmiciPotvrdi").appendChild(btnPotvrdi);

                                            let btnPonisti=document.createElement("button");
                                            btnPonisti.className="btnObrisiPijacuPonisti";
                                            btnPonisti.innerHTML="Ponisti";
                                            host.querySelector(".divObrisiPijacuDugmiciPotvrdi").appendChild(btnPonisti);


                                            btnPotvrdi.onclick=(ev)=>{
                                                fetch("https://localhost:5001/Pijaca/ObrisiPijacu/"+pijacaOpcija1,
                                                {
                                                    method:"DELETE"
                                                }).then(s=>{
                                                    if(s.ok){
                                                        this.kontejner.querySelector(".PrikazDesno").innerHTML="";
                                                        this.crtaj(this.kontejner);
                                                        alert("Pijaca uspesno obrisana");
                                                    }
                                                    else{
                                                        s.text().then(data=>{
                                                            alert(data);
                                                        })
                                                    }
                                                })
                                            }
                                            
                                            btnPonisti.onclick=(ev)=>{
                                                this.kontejner.querySelector(".PrikazDesno").innerHTML="";
                                                this.obrisiPijacu(host);                            
                                            }
                                        })
                                    }
                                    else{
                                        s.text().then(data=>{
                                            alert(data);
                                        })
                                    }
                                })
                            }
                        }


                    }
                    else{
                        s.text().then(data=>{
                            alert(data);
                        })
                    }
                })
            }
        }
    }

    filtrirajOglase(host){

        host.innerHTML="";

        host.classList.add("PrikazLevoDodajPadding");
        host.classList.remove("PrikazLevoObrisiPadding");
        

        let l;
        let i;
        let op;


        let h = document.createElement("div");
        h.className="h";
        host.appendChild(h);

        let x = document.createElement("img");
        x.src="../Slike/x.ico";
        x.className="x";
        h.appendChild(x);


        x.onclick=(ev)=>{
            this.brisi();
        }

        l=document.createElement("label");
        l.innerHTML="Pretrazi automobile";
        l.className="lblPrikazLevoNaslov";
        host.appendChild(l);



        l=document.createElement("div");
        l.className="divFilterCena";
        host.appendChild(l);



        l=document.createElement("div");
        l.className="divFilterGodina";
        host.appendChild(l);

        l=document.createElement("div");
        l.className="divFilterGodinaOd";
        host.querySelector(".divFilterGodina").appendChild(l);

        l=document.createElement("div");
        l.className="divFilterGodinaDo";
        host.querySelector(".divFilterGodina").appendChild(l);




        l=document.createElement("div");
        l.className="divFilterMarkaModel";
        host.appendChild(l);

        l=document.createElement("div");
        l.className="divFilterMarka";
        host.querySelector(".divFilterMarkaModel").appendChild(l);

        l=document.createElement("div");
        l.className="divFilterModel";
        host.querySelector(".divFilterMarkaModel").appendChild(l);



        l=document.createElement("div");
        l.className="divFilterKaroserijaGorivo";
        host.appendChild(l);

        l=document.createElement("div");
        l.className="divFilterKaroserija";
        host.querySelector(".divFilterKaroserijaGorivo").appendChild(l);

        l=document.createElement("div");
        l.className="divFilterGorivo";
        host.querySelector(".divFilterKaroserijaGorivo").appendChild(l);



        l=document.createElement("div");
        l.className="divFilterKilometraza";
        host.appendChild(l);



        let nizLabela=["Cena", "Godiste od", "Godiste do", "Marka", "Model", "Karoserija", "Gorivo", "Kilometraza"];
        let nizInputa=["number", "number", "number", "text", "text", "select", "select", "number"];
        let nizKaroserija = ["-", "Limuzina", "Hecbek", "Karavan", "Kupe", "Kabriolet", "Dzip", "Pickup"];
        let nizGoriva=["-", "Dizel", "Benzin", "Benzin+plin", "ElektricniPogon", "HibridniPogon"];

        nizLabela.forEach((p,index)=>{
            l=document.createElement("label");
            l.innerHTML=p;
            l.className="lblOglasFilter"

            if(index==0){
                i=document.createElement("input");
                i.type=nizInputa[index];
                i.className="inputOglasFilter";
                i.classList.add("inputFilterCena");
                host.querySelector(".divFilterCena").appendChild(l);
                host.querySelector(".divFilterCena").appendChild(i);

            }

            else if (index==1 || index==2){
                i=document.createElement("input");
                i.type=nizInputa[index];
                i.className="inputOglasFilter";
                if(index==1){
                    i.classList.add("inputFilterGodinaOd");
                    host.querySelector(".divFilterGodinaOd").appendChild(l);
                    host.querySelector(".divFilterGodinaOd").appendChild(i);  
                }
                else{
                    i.classList.add("inputFilterGodinaDo");
                    host.querySelector(".divFilterGodinaDo").appendChild(l);
                    host.querySelector(".divFilterGodinaDo").appendChild(i);                      
                }          
            }

            if(index==3 || index==4){
                i=document.createElement("input");
                i.type=nizInputa[index];
                i.className="inputOglasFilter";
                if(index==3){
                    i.classList.add("inputFilterMarka");
                    host.querySelector(".divFilterMarka").appendChild(l);
                    host.querySelector(".divFilterMarka").appendChild(i);
                }
                else{
                    i.classList.add("inputFilterModel");
                    host.querySelector(".divFilterModel").appendChild(l);
                    host.querySelector(".divFilterModel").appendChild(i);
                }

            }

            if(index==5){
                i=document.createElement("select");
                i.className="selectFilterOglaseKaroserija";
                // i.className="inputOglasFilter";
                host.querySelector(".divFilterKaroserija").appendChild(l);
                host.querySelector(".divFilterKaroserija").appendChild(i);

                nizKaroserija.forEach((q, ind)=>{
                    op=document.createElement("option");
                    op.innerHTML=q;
                    op.value=ind; //Limuzina=1, Hecbek=2, Karavan=3, Kupe=4, Kabriolet=5, Dzip=6, Pickup=7
                    i.appendChild(op);
                })


            }

            else if(index==6){
                i=document.createElement("select");
                i.className="selectFilterOglaseGorivo";
                i.classList.add("inputOglasFilter");
                host.querySelector(".divFilterGorivo").appendChild(l);
                host.querySelector(".divFilterGorivo").appendChild(i);

                nizGoriva.forEach((q, ind)=>{
                    op = document.createElement("option");
                    op.innerHTML=q;
                    op.value=ind;//Dizel=1, Benzin=2, Benzin+plin=3, ElektricniPogon=4, HibridniPogon=5
                    i.appendChild(op);
                })
            }

            else if (index==7){
                i=document.createElement("input");
                i.type=nizInputa[index];
                i.className="inputOglasFilter";
                i.classList.add("inputFilterKilometraza");
                host.querySelector(".divFilterKilometraza").appendChild(l);
                host.querySelector(".divFilterKilometraza").appendChild(i);
            }
        })

        i=document.createElement("div");
        i.className="divOglasFiltrirajDugme";
        host.appendChild(i);

        let btn = document.createElement("button");
        btn.innerHTML="Filtriraj";
        btn.className="btnFiltriraj";
        host.querySelector(".divOglasFiltrirajDugme").appendChild(btn);

        btn.onclick=(ev)=>{
            this.kontejner.querySelector(".PrikazDesno").innerHTML="";
            let validacija="";

            let cena1 = host.querySelector(".inputFilterCena").value;
            
            if(cena1<0){
                validacija+="Nevalidna cena\n";
            }
            if(cena1===null || cena1===undefined || cena1===""){
                cena1=0;
            }


            let godisteOd1 = host.querySelector(".inputFilterGodinaOd").value;
        
            if(godisteOd1===null || godisteOd1===undefined || godisteOd1===""){
                godisteOd1=0;
            }
            else if(godisteOd1<1950 || godisteOd1>2022){
                validacija+="Nevalidna donja granica\n";
            }



            let godisteDo1 = host.querySelector(".inputFilterGodinaDo").value;
            
            if(godisteDo1===null || godisteDo1===undefined || godisteDo1===""){
                godisteDo1=0;
            }
            else if(godisteDo1<1950 || godisteDo1>2022){
                validacija+="Nevalidna gornja granica\n";
            }

            if(godisteOd1!=0 && godisteDo1==0){
                godisteDo1=2022;
            }

            if (godisteOd1>godisteDo1){
                validacija+="Donja granica ne moze biti veca od gornje\n";
            }

            let marka1 = host.querySelector(".inputFilterMarka").value;
            if(marka1===null || marka1===undefined || marka1===""){
                marka1="-";
            }

            let model1 = host.querySelector(".inputFilterModel").value;
            if(model1===null || model1===undefined || model1===""){
                model1="-";
            }

            let karoserijaSelect1 = host.querySelector(".selectFilterOglaseKaroserija");
            let karoserijaOpcija1 = karoserijaSelect1.options[karoserijaSelect1.selectedIndex].text;
            // if(karoserijaOpcija1===null || karoserijaOpcija1===undefined || karoserijaOpcija1===""){
            //     validacija+="Nevalidna karoserija\n";
            // }
            let gorivoSelect1 = host.querySelector(".selectFilterOglaseGorivo");
            let gorivoOpcija1 = gorivoSelect1.options[gorivoSelect1.selectedIndex].text;
            // if(gorivoOpcija1===null || gorivoOpcija1===undefined || gorivoOpcija1===""){
            //     validacija+="Nevalidno gorivo\n";
            // }

            let kilometraza1 = host.querySelector(".inputFilterKilometraza").value;
            if(kilometraza1<0 || kilometraza1>1000000){
                validacija+="Nevalidna kilometraza\n";
            }

            if(kilometraza1===null || kilometraza1===undefined || kilometraza1===""){
                kilometraza1=0;
            }
            

            if(validacija!=""){
                alert(validacija);
            }

            else{
                
                fetch("https://localhost:5001/Oglasi/FiltrirajOglase/"+cena1+"/"+godisteOd1+"/"+godisteDo1+"/"+marka1+"/"+model1+"/"+karoserijaOpcija1+"/"+gorivoOpcija1+"/"+kilometraza1,
                {
                    method:"GET",
                }).then(s=>{
                    if(s.ok){
                        s.json().then(data1=>{
                            if(data1.length==0){
                                alert("Nemamo takve oglase");
                            }
                            else{
                                data1.forEach((data,index)=>{
                                    const noviOglas = new Oglas(data.usernamekorisnika, data.adresaKorisnika, data.brojSasijeAutomobila, data.cena, data.datum, data.emailKorisnika, data.godisteAutomobila, data.gorivoAutomobila, data.gradKorisnika, data.imeKorisnika, data.jmbGkorisnika, data.karoserijaAutomobila, data.kilometrazaAutomobila, data.kubikazaAutomobila, data.lokacijaPijace, data.markaAutomobila, data.modelAutomobila, data.nazivPijace, data.prezimeKorisnika, data.sifraOglasa, data.snagaMotoraAutomobila, data.telefonKorisnika, data.telefonPijace, data.slikaKorisnika, data.adresaPijace);
                                    noviOglas.crtajOglase(this.kontejner.querySelector(".PrikazDesno"), index);    
                                })
                            }
                        })
                    }
                    else{
                        s.text().then(data=>{
                            alert(data);
                        })
                    }
                })
            }
        }

    }

    nadjiOglas(host){

        host.innerHTML="";

        host.classList.add("PrikazLevoDodajPadding");
        host.classList.remove("PrikazLevoObrisiPadding");

        let l;
        let i;
        let btn;


        let h = document.createElement("div");
        h.className="h";
        host.appendChild(h);

        let x = document.createElement("img");
        x.src="../Slike/x.ico";
        x.className="x";
        h.appendChild(x);


        x.onclick=(ev)=>{
            this.brisi();
        }


        l=document.createElement("label");
        l.innerHTML="Nadji oglas";
        l.className="lblPrikazLevoNaslov";
        host.appendChild(l);




        l=document.createElement("div");
        l.className="divOglasNadjiSifraOglasa";
        host.appendChild(l);

        l=document.createElement("label");
        l.innerHTML="Sifra oglasa";
        host.querySelector(".divOglasNadjiSifraOglasa").appendChild(l);

        i=document.createElement("input");
        i.className="inputNadjiOglasSifraOglasa"
        host.querySelector(".divOglasNadjiSifraOglasa").appendChild(i);




        l=document.createElement("div");
        l.className="divOglasNadjiDugme";
        host.appendChild(l);


        btn = document.createElement("button");
        btn.innerHTML="Nadji";
        btn.className="btnNadji";
        host.querySelector(".divOglasNadjiDugme").appendChild(btn);

        btn.onclick=(ev)=>{
            let sifraOglasa1=host.querySelector(".inputNadjiOglasSifraOglasa").value;
            if(sifraOglasa1===null || sifraOglasa1===undefined || sifraOglasa1===""){
                alert("Neispravna sifra oglasa");
            }
            else{
                fetch("https://localhost:5001/Oglasi/NadjiOglas/"+sifraOglasa1,
                {
                    method:"GET",
                }).then(s=>{
                    if(s.ok){
                        s.json().then(data=>{
                            const noviOglas = new Oglas(data.usernamekorisnika, data.adresaKorisnika, data.brojSasijeAutomobila, data.cena, data.datum, data.emailKorisnika, data.godisteAutomobila, data.gorivoAutomobila, data.gradKorisnika, data.imeKorisnika, data.jmbGkorisnika, data.karoserijaAutomobila, data.kilometrazaAutomobila, data.kubikazaAutomobila, data.lokacijaPijace, data.markaAutomobila, data.modelAutomobila, data.nazivPijace, data.prezimeKorisnika, data.sifraOglasa, data.snagaMotoraAutomobila, data.telefonKorisnika, data.telefonPijace, data.slikaKorisnika, data.adresaPijace);
                            noviOglas.crtajOglas(this.kontejner.querySelector(".PrikazDesno"));    
                        })
                    }
                    else{
                        s.text().then(data=>{
                            alert(data);
                        })
                    }
                })
                    
            }
        }

        
    }

    dodajOglas(host){

        host.innerHTML="";

        host.classList.add("PrikazLevoDodajPadding");
        host.classList.remove("PrikazLevoObrisiPadding");

        let l;
        let i;


        let h = document.createElement("div");
        h.className="h";
        host.appendChild(h);

        let x = document.createElement("img");
        x.src="../Slike/x.ico";
        x.className="x";
        h.appendChild(x);


        x.onclick=(ev)=>{
            this.brisi();
        }


        l=document.createElement("label");
        l.innerHTML="Dodaj oglas";
        l.className="lblPrikazLevoNaslov";
        host.appendChild(l);


        

        l=document.createElement("div");
        l.className="divOglasDodajJMBGVlasnikaSifra";
        host.appendChild(l);





        l=document.createElement("div");
        l.className="divOglasDodajJMBGVlasnika"
        host.querySelector(".divOglasDodajJMBGVlasnikaSifra").appendChild(l);

        l=document.createElement("label");
        l.innerHTML="Korisnicko ime";
        host.querySelector(".divOglasDodajJMBGVlasnika").appendChild(l);

        i=document.createElement("input");
        i.className="inputOglasDodajVlasnik"
        host.querySelector(".divOglasDodajJMBGVlasnika").appendChild(i);



        l=document.createElement("div");
        l.className="divOglasDodajSifra"
        host.querySelector(".divOglasDodajJMBGVlasnikaSifra").appendChild(l);

        l=document.createElement("label");
        l.innerHTML="Lozinka";
        host.querySelector(".divOglasDodajSifra").appendChild(l);

        i=document.createElement("input");
        i.className="inputOglasDodajSifra";
        i.type="password";
        host.querySelector(".divOglasDodajSifra").appendChild(i);




        l=document.createElement("div");
        l.className="divOglasDodajPrijaviSeDugme";
        host.appendChild(l);

        let btn = document.createElement("button");
        btn.innerHTML="Prijavi se";
        btn.className="btnNadji";
        btn.classList.add("btnDodajOglasPrijaviSe");
        host.querySelector(".divOglasDodajPrijaviSeDugme").appendChild(btn);

        let d=document.createElement("div");
        d.className="divOglasDodajDole";
        d.innerHTML="";
        host.appendChild(d);


        btn.onclick=(ev)=>{

            let validacija="";
            let username1=host.querySelector(".inputOglasDodajVlasnik").value;
            let sifra1=host.querySelector(".inputOglasDodajSifra").value;

            if(username1===null || username1===undefined || username1===""){
                validacija+="Neispravno korisnicko ime\n";
            }

            if(sifra1===null || sifra1===undefined || sifra1===""){
                validacija+="Neispravna lozinka\n";
            }

            if(validacija!=""){
                alert(validacija);
            }

            else{
                fetch("https://localhost:5001/Korisnik/NadjiKorisnika/"+username1+"/"+sifra1,
                    {
                        method:"GET"
                    }).then(s=>{
                        if(s.ok){
                            // s.json().then(data=>{
                            //     const noviKorisnik = new Korisnik(data.jmbg, data.ime, data.prezime, data.grad, data.adresa, data.telefon, data.email, data.slika);
                            // })

                            host.querySelector(".inputOglasDodajVlasnik").disabled=true;
                            host.querySelector(".inputOglasDodajVlasnik").style.cursor="not-allowed";

                            host.querySelector(".inputOglasDodajSifra").disabled=true;
                            host.querySelector(".inputOglasDodajSifra").style.cursor="not-allowed";

                            host.querySelector(".btnDodajOglasPrijaviSe").disabled=true;
                            host.querySelector(".btnDodajOglasPrijaviSe").style.cursor="not-allowed";

                            d=host.querySelector(".divOglasDodajDole");
                            d.innerHTML="";


                            l=document.createElement("div");
                            l.className="divOglasDodajCena";
                            host.querySelector(".divOglasDodajDole").appendChild(l);

                            l=document.createElement("label");
                            l.innerHTML="Cena";
                            host.querySelector(".divOglasDodajCena").appendChild(l);
                
                            i=document.createElement("input");
                            i.className="inputOglasDodajCena";
                            i.type="number";
                            host.querySelector(".divOglasDodajCena").appendChild(i);


                            

                            l=document.createElement("div");
                            l.className="divOglasDodajBrojSasijePijaca"
                            host.querySelector(".divOglasDodajDole").appendChild(l);


                            l=document.createElement("div");
                            l.className="divOglasDodajBrojSasije"
                            host.querySelector(".divOglasDodajBrojSasijePijaca").appendChild(l);
                
                            l=document.createElement("label");
                            l.innerHTML="Broj sasije";
                            host.querySelector(".divOglasDodajBrojSasije").appendChild(l);
                
                            i=document.createElement("input");
                            i.className="inputOglasDodajAutomobil";
                            host.querySelector(".divOglasDodajBrojSasije").appendChild(i);
                
                
                
                
                
                            l=document.createElement("div");
                            l.className="divOglasDodajPijacu"
                            host.querySelector(".divOglasDodajBrojSasijePijaca").appendChild(l);
                
                            l=document.createElement("label");
                            l.innerHTML="Naziv pijace";
                            host.querySelector(".divOglasDodajPijacu").appendChild(l);
                
                            i=document.createElement("select");
                            i.className="selectOglasDodajPijaca";
                            host.querySelector(".divOglasDodajPijacu").appendChild(i);

                            let op;

                            fetch("https://localhost:5001/Pijaca/PreuzmiPijace/",
                            {
                                method:"GET",
                            }).then(s=>{
                                if(s.ok){
                                    s.json().then(data1=>{
                                        if(data1.length==0){
                                            alert("Ne postoji nijedna pijaca!");
                                        }
                                        else{
                                            data1.forEach((data,index)=>{
                                                op=document.createElement("option");
                                                op.innerHTML=data.naziv;
                                                host.querySelector(".selectOglasDodajPijaca").appendChild(op);    
                                                // i.appendChild(op);
                                            })
                                        }
                                    })
                                }
                                else{
                                    s.text().then(data=>{
                                        alert(data);
                                    })
                                }
                            })
                
                
                
                
                
                            l=document.createElement("div");
                            l.className="divOglasDodajDugme";
                            host.querySelector(".divOglasDodajDole").appendChild(l);
                
                            let btn1 = document.createElement("button");
                            btn1.innerHTML="Dodaj";
                            btn1.className="btnDodaj";
                            host.querySelector(".divOglasDodajDugme").appendChild(btn1);


                            btn1.onclick=(ev)=>{
                                let validacija="";
                                let username2 = host.querySelector(".inputOglasDodajVlasnik").value;
                                if(username2===null || username2===undefined || username2==="" ){
                                    validacija+="Nevalidno korisnicko ime\n";
                                }
                                let cena1 = host.querySelector(".inputOglasDodajCena").value;
                                if(cena1===null || cena1===undefined || cena1==="" || cena1<0){
                                    validacija+="Nevalidna cena\n";
                                }
                                let brojSasije1 = host.querySelector(".inputOglasDodajAutomobil").value;
                                if(brojSasije1===null || brojSasije1===undefined || brojSasije1===""){
                                    validacija+="Nevalidan broj sasije\n";
                                }

                                let pijacaSelect1 = host.querySelector(".selectOglasDodajPijaca");
                                let pijacaOpcija1 = pijacaSelect1.options[pijacaSelect1.selectedIndex].text;
                                if(pijacaOpcija1===null || pijacaOpcija1===undefined || pijacaOpcija1===""){
                                    validacija+="Nevalidna pijaca\n";
                                }
                                if(validacija!=""){
                                    alert(validacija);
                                }
                                else{
                                    fetch("https://localhost:5001/Oglasi/DodajOglas/"+username2+"/"+brojSasije1+"/"+pijacaOpcija1+"/"+cena1,
                                    {
                                        method:"POST"
                                    }).then(s=>{
                                        if(s.ok){
                                            s.json().then(data=>{
                                                console.log(data);
                                                const noviOglas = new Oglas(data.usernamekorisnika, data.adresaKorisnika, data.brojSasijeAutomobila, data.cena, data.datum, data.emailKorisnika, data.godisteAutomobila, data.gorivoAutomobila, data.gradKorisnika, data.imeKorisnika, data.jmbGkorisnika, data.karoserijaAutomobila, data.kilometrazaAutomobila, data.kubikazaAutomobila, data.lokacijaPijace, data.markaAutomobila, data.modelAutomobila, data.nazivPijace, data.prezimeKorisnika, data.sifraOglasa, data.snagaMotoraAutomobila, data.telefonKorisnika, data.telefonPijace, data.slikaKorisnika, data.adresaPijace);
                                                noviOglas.crtajOglas(this.kontejner.querySelector(".PrikazDesno"));
                                            })
                                        }
                                        else{ //Ovo je za dodavanje oglasa, ako tu izbaci gresku
                                            s.text().then(data=>{
                                                alert(data);
                                            })
                                        }
                                    })
                                    // const noviOglas = new Oglas("Vucje", "F43F34WQF43Q", 3000, "08/03/2022", "vuk.cvetkovic@gmail.com", 2015, "Dizel", "Leskovac", "Vuk", "2222222222222", "Dzip", 44445, 3000, "Leskovac", "BMW", "X5", "AutoPijacaLe", "Cvetkovic", "ZM6VPHKCRR", 300, "0691608321", "016855855", "1");
                                    // noviOglas.crtajOglas(this.kontejner.querySelector(".PrikazDesno"));
                                }
                            }

                        }
                        else{ //ovo je za metodu koja trazi korisnika
                            s.text().then(data=>{
                                alert(data);
                            })
                        }
                    })
            }


           

        }
    }
    izmeniOglas(host){

        host.innerHTML="";

        host.classList.add("PrikazLevoDodajPadding");
        host.classList.remove("PrikazLevoObrisiPadding");

        let l;
        let i;
        let btn;


        let h = document.createElement("div");
        h.className="h";
        host.appendChild(h);

        let x = document.createElement("img");
        x.src="../Slike/x.ico";
        x.className="x";
        h.appendChild(x);


        x.onclick=(ev)=>{
            this.brisi();
        }


        l=document.createElement("label");
        l.innerHTML="Izmeni oglas";
        l.className="lblPrikazLevoNaslov";
        host.appendChild(l);







        l=document.createElement("div");
        l.className="divOglasIzmeniJMBGSifra";
        host.appendChild(l);

        l=document.createElement("div");
        l.className="divOglasIzmeniJMBG";
        host.querySelector(".divOglasIzmeniJMBGSifra").appendChild(l);

        l=document.createElement("div");
        l.className="divKOglasIzmeniSifra";
        host.querySelector(".divOglasIzmeniJMBGSifra").appendChild(l);


        

        l=document.createElement("label");
        l.innerHTML="Korisnicko ime";
        host.querySelector(".divOglasIzmeniJMBG").appendChild(l);

        
        i=document.createElement("input");
        i.className="inputOglasIzmeniJMBG";
        host.querySelector(".divOglasIzmeniJMBG").appendChild(i);





        l=document.createElement("label");
        l.innerHTML="Lozinka";
        host.querySelector(".divKOglasIzmeniSifra").appendChild(l);

        
        i=document.createElement("input");
        i.className="inputOglasIzmeniSifra";
        i.type="password";
        host.querySelector(".divKOglasIzmeniSifra").appendChild(i);


        l=document.createElement("div");
        l.className="divOglasIzmeniDugmePrijaviSe";
        host.appendChild(l);



        btn = document.createElement("button");
        btn.innerHTML="Prijavi se";
        btn.className="btnNadji";
        btn.classList.add("btnIzmeniOglasBlock");
        host.querySelector(".divOglasIzmeniDugmePrijaviSe").appendChild(btn);

        l=document.createElement("div");
        l.className="divOglasIzmeniDole1";
        host.appendChild(l);


        btn.onclick=(ev)=>{

            let username1=host.querySelector(".inputOglasIzmeniJMBG").value;
            let sifra1=host.querySelector(".inputOglasIzmeniSifra").value;

            if(username1===null || username1===undefined || username1===""){
                alert("Neispravno korisnicko ime");
            }

            else if(sifra1===null || sifra1===undefined || sifra1===""){
                alert("Neispravna sifra");
            }

            else{
                fetch("https://localhost:5001/Korisnik/NadjiKorisnika/"+username1+"/"+sifra1,
                {
                    method:"GET"
                }).then(s=>{
                    if(s.ok){
                        host.querySelector(".divOglasIzmeniDole1").innerHTML="";
                        host.querySelector(".inputOglasIzmeniJMBG").disabled=true;
                        host.querySelector(".inputOglasIzmeniJMBG").style.cursor="not-allowed";

                        host.querySelector(".inputOglasIzmeniSifra").disabled=true;
                        host.querySelector(".inputOglasIzmeniSifra").style.cursor="not-allowed";


                        host.querySelector(".btnIzmeniOglasBlock").disabled=true;
                        host.querySelector(".btnIzmeniOglasBlock").style.cursor="not-allowed";


                        l=document.createElement("div");
                        l.className="divOglasIzmeniSifraOglasa";
                        host.querySelector(".divOglasIzmeniDole1").appendChild(l);

                        l=document.createElement("label");
                        l.innerHTML="Sifra oglasa";
                        host.querySelector(".divOglasIzmeniSifraOglasa").appendChild(l);

                        i=document.createElement("input");
                        i.className="inputOglasIzmeni"
                        i.classList.add("inputOglasIzmeniSifraOglasa");
                        host.querySelector(".divOglasIzmeniSifraOglasa").appendChild(i);




                        l=document.createElement("div");
                        l.className="divOglasIzmeniDugme";
                        host.querySelector(".divOglasIzmeniDole1").appendChild(l);

                        let btn1 = document.createElement("button");
                        btn1.innerHTML="Nadji";
                        btn1.className="btnNadji";
                        btn1.classList.add("btnIzmeniOglasBlock2");
                        host.querySelector(".divOglasIzmeniDugme").appendChild(btn1);

                        let d = document.createElement("div");
                        d.className="divOglasIzmeniDole";
                        d.innerHTML="";
                        host.querySelector(".divOglasIzmeniDole1").appendChild(d);
            
            
                        btn1.onclick=(ev)=>{

                            let sifraOglasa1=host.querySelector(".inputOglasIzmeniSifraOglasa").value;
                            if(sifraOglasa1===null || sifraOglasa1===undefined || sifraOglasa1===""){
                                alert("Nevalidna sifra oglasa");
                            }

                            fetch("https://localhost:5001/Oglasi/NadjiOglas/"+sifraOglasa1,
                            {
                                method:"GET"
                            }).then(s=>{
                                if(s.ok){
                                    s.json().then(data=>{

                                        if(username1==data.usernamekorisnika){
                                            const noviOglas = new Oglas(data.usernamekorisnika, data.adresaKorisnika, data.brojSasijeAutomobila, data.cena, data.datum, data.emailKorisnika, data.godisteAutomobila, data.gorivoAutomobila, data.gradKorisnika, data.imeKorisnika, data.jmbGkorisnika, data.karoserijaAutomobila, data.kilometrazaAutomobila, data.kubikazaAutomobila, data.lokacijaPijace, data.markaAutomobila, data.modelAutomobila, data.nazivPijace, data.prezimeKorisnika, data.sifraOglasa, data.snagaMotoraAutomobila, data.telefonKorisnika, data.telefonPijace, data.slikaKorisnika, data.adresaPijace);
                                            noviOglas.crtajOglas(this.kontejner.querySelector(".PrikazDesno"));
                                            
                                            
                                            
                                            d=host.querySelector(".divOglasIzmeniDole");
                                            d.innerHTML="";
                            
                                            host.querySelector(".inputOglasIzmeniSifraOglasa").disabled=true;
                                            host.querySelector(".inputOglasIzmeniSifraOglasa").style.cursor="not-allowed";

                                            host.querySelector(".btnIzmeniOglasBlock2").disabled=true;
                                            host.querySelector(".btnIzmeniOglasBlock2").style.cursor="not-allowed";
                            
                            
                                            d=document.createElement("div");
                                            d.className="divOglasIzmeniCena";
                                            host.querySelector(".divOglasIzmeniDole").appendChild(d);
                                    
                            
                            
                                            l=document.createElement("label");
                                            l.innerHTML="Nova cena";
                                            host.querySelector(".divOglasIzmeniDole").appendChild(l);
                            
                            
                                            i=document.createElement("input");
                                            i.type="number";
                                            i.className="inputOglasIzmeniCena";
                                            host.querySelector(".divOglasIzmeniDole").appendChild(i);
                            
                                            
                                            d=document.createElement("div");
                                            d.className="divOglasIzmeniDugmeDole";
                                            host.querySelector(".divOglasIzmeniDole").appendChild(d);
                            
                                            let btn2 = document.createElement("button");
                                            btn2.innerHTML="Izmeni oglas";
                                            btn2.className="btnIzmeni";
                                            host.querySelector(".divOglasIzmeniDole").appendChild(btn2);


                                            btn2.onclick=(ev)=>{
                                                let novaCena1=host.querySelector(".inputOglasIzmeniCena").value;
                                                if(novaCena1===null || novaCena1===undefined || novaCena1==="" || novaCena1<0){
                                                    alert("Nevalidna cena");
                                                }
                                                else{
                                                    fetch("https://localhost:5001/Oglasi/IzmeniOglas/"+username1+"/"+sifraOglasa1+"/"+novaCena1,
                                                    {
                                                        method:"PUT",
                                                    }).then(s=>{
                                                        if(s.ok){
                                                            s.json().then(data=>{
                                                                const noviOglas = new Oglas(data.usernamekorisnika, data.adresaKorisnika, data.brojSasijeAutomobila, data.cena, data.datum, data.emailKorisnika, data.godisteAutomobila, data.gorivoAutomobila, data.gradKorisnika, data.imeKorisnika, data.jmbGkorisnika, data.karoserijaAutomobila, data.kilometrazaAutomobila, data.kubikazaAutomobila, data.lokacijaPijace, data.markaAutomobila, data.modelAutomobila, data.nazivPijace, data.prezimeKorisnika, data.sifraOglasa, data.snagaMotoraAutomobila, data.telefonKorisnika, data.telefonPijace, data.slikaKorisnika, data.adresaPijace);
                                                                let w = this.kontejner.querySelector(".PrikazDesno");
                                                                w.innerHTML="";
                                                                noviOglas.crtajOglas(this.kontejner.querySelector(".PrikazDesno"));
                                                            })

                                                        }
                                                        else{
                                                            s.text().then(data=>{
                                                                host.querySelector(".divOglasIzmeniDole1").innerHTML="";
                                                                this.kontejner.querySelector(".PrikazDesno").innerHTML="";
                                                                alert(data);
                        
                        
                                                            })
                                                        }
                                                    })
                                                }
                                            }
                                        }
                                        else{
                                            alert("Korisnik nije vlasnik datog oglasa");
                                        }
                                    })
                                }
                                else{
                                    s.text().then(data=>{
                                        host.querySelector(".divOglasIzmeniDole").innerHTML="";
                                        this.kontejner.querySelector(".PrikazDesno").innerHTML="";
                                        alert(data);


                                    })
                                }
                            })



                            
                        }
                    }
                    else {
                        s.text().then(data=>{
                            host.querySelector(".divOglasIzmeniDole1").innerHTML="";
                            this.kontejner.querySelector(".PrikazDesno").innerHTML="";
                            alert(data)
                        })
                    }
                })
            }
            

            

           
        }


        


        
    }


    obrisiOglas(host){

        host.innerHTML="";

        host.classList.add("PrikazLevoDodajPadding");
        host.classList.remove("PrikazLevoObrisiPadding");

        let l;
        let i;
        let btn;


        let h = document.createElement("div");
        h.className="h";
        host.appendChild(h);

        let x = document.createElement("img");
        x.src="../Slike/x.ico";
        x.className="x";
        h.appendChild(x);


        x.onclick=(ev)=>{
            this.brisi();
        }


        l=document.createElement("label");
        l.innerHTML="Obrisi oglas";
        l.className="lblPrikazLevoNaslov";
        host.appendChild(l);

        l=document.createElement("div");
        l.className="divOglasObrisiJMBGSifra";
        host.appendChild(l);

        l=document.createElement("div");
        l.className="divOglasObrisiJMBG";
        host.querySelector(".divOglasObrisiJMBGSifra").appendChild(l);

        l=document.createElement("div");
        l.className="divOglasObrisiSifra";
        host.querySelector(".divOglasObrisiJMBGSifra").appendChild(l);


        

        l=document.createElement("label");
        l.innerHTML="Korisnicko ime";
        host.querySelector(".divOglasObrisiJMBG").appendChild(l);

        
        i=document.createElement("input");
        i.className="inputOglasObrisiJMBG";
        host.querySelector(".divOglasObrisiJMBG").appendChild(i);





        l=document.createElement("label");
        l.innerHTML="Lozinka";
        host.querySelector(".divOglasObrisiSifra").appendChild(l);

        
        i=document.createElement("input");
        i.className="inputOglasObrisiSifra";
        i.type="password";
        host.querySelector(".divOglasObrisiSifra").appendChild(i);




        l=document.createElement("div");
        l.className="divOglasObrisiDugmePrijaviSe";
        host.appendChild(l);

        btn = document.createElement("button");
        btn.innerHTML="Prijavi se";
        btn.className="btnNadji";
        btn.classList.add("btnNadjiKorisnikaObrisi");
        host.querySelector(".divOglasObrisiDugmePrijaviSe").appendChild(btn);


        let d=document.createElement("div");
        d.className="divOglasObrisiDole1";
        d.innerHTML="";
        host.appendChild(d);

        btn.onclick=(ev)=>{

            let validacija="";

            let username1=host.querySelector(".inputOglasObrisiJMBG").value;
            let sifra1=host.querySelector(".inputOglasObrisiSifra").value;

            if(username1===null || username1===undefined || username1===""){
                validacija+="Neispravno korisnicko ime\n";
            }

            if(sifra1===null || sifra1===undefined || sifra1===""){
                validacija+="Neispravna sifra\n";
            }

            if(validacija!=""){
                alert(validacija);
            }

            else{
                fetch("https://localhost:5001/Korisnik/NadjiKorisnika/"+username1+"/"+sifra1,
                    {
                        method:"GET"
                    }).then(s=>{
                        if(s.ok){
                            host.querySelector(".divOglasObrisiDole1").innerHTML="";


                            host.querySelector(".inputOglasObrisiJMBG").disabled=true;
                            host.querySelector(".inputOglasObrisiJMBG").style.cursor="not-allowed";

                            host.querySelector(".inputOglasObrisiSifra").disabled=true;
                            host.querySelector(".inputOglasObrisiSifra").style.cursor="not-allowed";
                            
                            host.querySelector(".btnNadjiKorisnikaObrisi").disabled=true;
                            host.querySelector(".btnNadjiKorisnikaObrisi").style.cursor="not-allowed";

                            

                            l=document.createElement("div");
                            l.className="divOglasObrisiSifraOglasa";
                            host.querySelector(".divOglasObrisiDole1").appendChild(l);
                
                            l=document.createElement("label");
                            l.innerHTML="Sifra oglasa";
                            host.querySelector(".divOglasObrisiSifraOglasa").appendChild(l);
                
                            i=document.createElement("input");
                            i.className="inputOglasObrisiSifraOglasa";
                            host.querySelector(".divOglasObrisiSifraOglasa").appendChild(i);
                
                
                
                
                            l=document.createElement("div");
                            l.className="divOglasObrisiDugmeNadji";
                            host.querySelector(".divOglasObrisiDole1").appendChild(l);
                
                            let btn1 = document.createElement("button");
                            btn1.innerHTML="Obrisi oglas";
                            btn1.className="btnObrisi";
                            btn1.classList.add("btnObrisiOglasBrisanje");
                            host.querySelector(".divOglasObrisiDugmeNadji").appendChild(btn1);

                            l = document.createElement("div");
                            l.className="divOglasObrisiDole2";
                            host.querySelector(".divOglasObrisiDole1").appendChild(l);

                            btn1.onclick=(ev)=>{

                                let sifraOglasa1=host.querySelector(".inputOglasObrisiSifraOglasa").value;
                                if(sifraOglasa1===null || sifraOglasa1===undefined || sifraOglasa1===""){
                                    alert("Neispravna sifra oglasa");
                                }
                                else{
                                    fetch("https://localhost:5001/Oglasi/NadjiOglasSaUsername/"+sifraOglasa1+"/"+username1,
                                    {
                                        method:"GET",
                                    }).then(s=>{
                                        if(s.ok){
                                            s.json().then(data=>{
                                                const noviOglas = new Oglas(data.usernamekorisnika, data.adresaKorisnika, data.brojSasijeAutomobila, data.cena, data.datum, data.emailKorisnika, data.godisteAutomobila, data.gorivoAutomobila, data.gradKorisnika, data.imeKorisnika, data.jmbGkorisnika, data.karoserijaAutomobila, data.kilometrazaAutomobila, data.kubikazaAutomobila, data.lokacijaPijace, data.markaAutomobila, data.modelAutomobila, data.nazivPijace, data.prezimeKorisnika, data.sifraOglasa, data.snagaMotoraAutomobila, data.telefonKorisnika, data.telefonPijace, data.slikaKorisnika, data.adresaPijace);
                                                noviOglas.crtajOglas(this.kontejner.querySelector(".PrikazDesno")); 
                                            })
                                            d=host.querySelector(".divOglasObrisiDole2");
                                            d.innerHTML="";

                                            host.querySelector(".inputOglasObrisiSifraOglasa").disabled=true;
                                            host.querySelector(".inputOglasObrisiSifraOglasa").style.cursor="not-allowed";
                                            
                                            host.querySelector(".btnObrisiOglasBrisanje").disabled=true;
                                            host.querySelector(".btnObrisiOglasBrisanje").style.cursor="not-allowed";

                                            d=document.createElement("div");
                                            d.className="divLabelaObrisiOglas";
                                            host.querySelector(".divOglasObrisiDole2").appendChild(d);

                                            l=document.createElement("label");
                                            l.innerHTML="Da li ste sigurni?"
                                            l.className="lblPrikazLevoNaslov";
                                            host.querySelector(".divLabelaObrisiOglas").appendChild(l);





                                            d=document.createElement("div");
                                            d.className="divObrisiOglasDugmici";
                                            host.querySelector(".divOglasObrisiDole2").appendChild(d);

                                            d=document.createElement("div");
                                            d.className="divObrisiOglasDugmiciPotvrdi";
                                            host.querySelector(".divObrisiOglasDugmici").appendChild(d);

                                            d=document.createElement("div");
                                            d.className="divObrisiOglasDugmiciPonisti";
                                            host.querySelector(".divObrisiOglasDugmici").appendChild(d);




                                            let btnPotvrdi=document.createElement("button");
                                            btnPotvrdi.className="divObrisiOglasPotvrdi";
                                            btnPotvrdi.innerHTML="Potvrdi";
                                            host.querySelector(".divObrisiOglasDugmiciPotvrdi").appendChild(btnPotvrdi);

                                            let btnPonisti=document.createElement("button");
                                            btnPonisti.className="btnObrisiPonisti";
                                            btnPonisti.innerHTML="Ponisti";
                                            host.querySelector(".divObrisiOglasDugmiciPonisti").appendChild(btnPonisti);


                                            btnPotvrdi.onclick=(ev)=>{
                                                fetch("https://localhost:5001/Oglasi/ObrisiOglas/"+sifraOglasa1+"/"+username1,
                                                {
                                                    method:"DELETE"
                                                }).then(s=>{
                                                    if(s.ok){
                                                        this.kontejner.querySelector(".PrikazDesno").innerHTML="";
                                                        this.crtaj(this.kontejner);
                                                        alert("Oglas uspesno obrisan");
                                                    }
                                                    else{
                                                        s.text().then(data=>{
                                                            alert(data);
                                                        })
                                                    }
                                                })
                                            }
                                            
                                            btnPonisti.onclick=(ev)=>{
                                                this.kontejner.querySelector(".PrikazDesno").innerHTML="";
                                                this.obrisiOglas(host);                            
                                            }
                
                                        }
                                        else{
                                            s.text().then(data=>{
                                                alert(data);
                                            })
                                        }
                                    })
                                }
                            }
                        }
                        else{
                            s.text().then(data=>{
                                alert(data);
                            })
                        }
                    })
            }
            
           
        }



    }

    dodajAutomobil(host){

        host.innerHTML="";

        host.classList.add("PrikazLevoDodajPadding");
        host.classList.remove("PrikazLevoObrisiPadding");

        let l;
        let i;
        let op;


        let h = document.createElement("div");
        h.className="h";
        host.appendChild(h);

        let x = document.createElement("img");
        x.src="../Slike/x.ico";
        x.className="x";
        h.appendChild(x);


        x.onclick=(ev)=>{
            this.brisi();
        }

        l=document.createElement("label");
        l.innerHTML="Dodaj automobil";
        l.className="lblPrikazLevoNaslov";
        host.appendChild(l);




        l=document.createElement("div");
        l.className="divAutomobilDodajBrojSasije";
        host.appendChild(l);



        l=document.createElement("div");
        l.className="divAutomobilDodajMarkaModel";
        host.appendChild(l);

        l=document.createElement("div");
        l.className="divAutomobilDodajMarka";
        host.querySelector(".divAutomobilDodajMarkaModel").appendChild(l);

        l=document.createElement("div");
        l.className="divAutomobilDodajModel";
        host.querySelector(".divAutomobilDodajMarkaModel").appendChild(l);




        l=document.createElement("div");
        l.className="divAutomobilDodajGodisteKilometraza";
        host.appendChild(l);

        l=document.createElement("div");
        l.className="divAutomobilDodajGodiste";
        host.querySelector(".divAutomobilDodajGodisteKilometraza").appendChild(l);

        l=document.createElement("div");
        l.className="divAutomobilDodajKilometraza";
        host.querySelector(".divAutomobilDodajGodisteKilometraza").appendChild(l);





        l=document.createElement("div");
        l.className="divAutomobilDodajKaroserijaGorivo";
        host.appendChild(l);

        l=document.createElement("div");
        l.className="divAutomobilDodajKaroserija";
        host.querySelector(".divAutomobilDodajKaroserijaGorivo").appendChild(l);

        l=document.createElement("div");
        l.className="divAutomobilDodajGorivo";
        host.querySelector(".divAutomobilDodajKaroserijaGorivo").appendChild(l);







        l=document.createElement("div");
        l.className="divAutomobilDodajKubikazaSnaga";
        host.appendChild(l);

        l=document.createElement("div");
        l.className="divAutomobilDodajKubikaza";
        host.querySelector(".divAutomobilDodajKubikazaSnaga").appendChild(l);

        l=document.createElement("div");
        l.className="divAutomobilDodajSnaga";
        host.querySelector(".divAutomobilDodajKubikazaSnaga").appendChild(l);






        l=document.createElement("div");
        l.className="divAutomobilDodajJMBGVlasnikaPijaca";
        host.appendChild(l);

        l=document.createElement("div");
        l.className="divAutomobilDodajJMBGVlasnika";
        host.querySelector(".divAutomobilDodajJMBGVlasnikaPijaca").appendChild(l);

        l=document.createElement("div");
        l.className="divAutomobilDodajPijaca";
        host.querySelector(".divAutomobilDodajJMBGVlasnikaPijaca").appendChild(l);



        

        let nizLabela=["Broj šasije", "Marka", "Model", "Godiste", "Kilometraza", "Karoserija", "Gorivo", "Kubikaza", "Snaga", "Korisnicko ime", "Pijaca"];
        let nizInputa=["text", "text", "text", "number", "number", "select", "select", "number", "number", "text", "select"];
        let nizKaroserija = ["Limuzina", "Hecbek", "Karavan", "Kupe", "Kabriolet", "Dzip", "Pickup"];
        let nizGoriva=["Dizel", "Benzin", "Benzin+plin", "ElektricniPogon", "HibridniPogon"];

        nizLabela.forEach((p,index)=>{
            l=document.createElement("label");
            l.innerHTML=p;

            if(index==0){
                i=document.createElement("input");
                i.type=nizInputa[index];
                i.className="inputAutomobilDodajBrojSasije";
                host.querySelector(".divAutomobilDodajBrojSasije").appendChild(l);
                host.querySelector(".divAutomobilDodajBrojSasije").appendChild(i);
            }

            else if(index==1){
                i=document.createElement("input");
                i.type=nizInputa[index];
                i.className="inputAutomobilDodajMarka";
                host.querySelector(".divAutomobilDodajMarka").appendChild(l);
                host.querySelector(".divAutomobilDodajMarka").appendChild(i);
            }

            else if(index==2){
                i=document.createElement("input");
                i.type=nizInputa[index];
                i.className="inputAutomobilDodajModel";
                host.querySelector(".divAutomobilDodajModel").appendChild(l);
                host.querySelector(".divAutomobilDodajModel").appendChild(i);
            }

            else if(index==3){
                i=document.createElement("input");
                i.type=nizInputa[index];
                i.className="inputAutomobilDodajGodiste";
                host.querySelector(".divAutomobilDodajGodiste").appendChild(l);
                host.querySelector(".divAutomobilDodajGodiste").appendChild(i);
            }

            else if(index==4){
                i=document.createElement("input");
                i.type=nizInputa[index];
                i.className="inputAutomobilDodajKilometraza";
                host.querySelector(".divAutomobilDodajKilometraza").appendChild(l);
                host.querySelector(".divAutomobilDodajKilometraza").appendChild(i);
            }

            if(index==5){
                i=document.createElement("select");
                i.className="selectDodajAutomobilKaroserija";
                host.querySelector(".divAutomobilDodajKaroserija").appendChild(l);
                host.querySelector(".divAutomobilDodajKaroserija").appendChild(i);

                nizKaroserija.forEach((q, ind)=>{
                    op=document.createElement("option");
                    op.innerHTML=q;
                    op.value=ind; //Limuzina=0, Hecbek=1, Karavan=2, Kupe=3, Kabriolet=4, Dzip=5, Pickup=6
                    i.appendChild(op);
                })


            }

            else if(index==6){
                i=document.createElement("select");
                i.className="selectDodajAutomobilGorivo";
                host.querySelector(".divAutomobilDodajGorivo").appendChild(l);
                host.querySelector(".divAutomobilDodajGorivo").appendChild(i);

                nizGoriva.forEach((q, ind)=>{
                    op = document.createElement("option");
                    op.innerHTML=q;
                    op.value=ind;//Dizel=0, Benzin=1, Benzin+plin=2
                    i.appendChild(op);
                })
            }

            else if(index==7){
                i=document.createElement("input");
                i.type=nizInputa[index];
                i.className="inputAutomobilDodajKubikaza";
                host.querySelector(".divAutomobilDodajKubikaza").appendChild(l);
                host.querySelector(".divAutomobilDodajKubikaza").appendChild(i);
            }

            else if(index==8){
                i=document.createElement("input");
                i.type=nizInputa[index];
                i.className="inputAutomobilDodajSnaga";
                host.querySelector(".divAutomobilDodajSnaga").appendChild(l);
                host.querySelector(".divAutomobilDodajSnaga").appendChild(i);
            }

            else if(index==9){
                i=document.createElement("input");
                i.type=nizInputa[index];
                i.className="inputAutomobilDodajJMBGVlasnika";
                host.querySelector(".divAutomobilDodajJMBGVlasnika").appendChild(l);
                host.querySelector(".divAutomobilDodajJMBGVlasnika").appendChild(i);
            }

            else if(index==10){
                i=document.createElement("select");
                i.className="selectAutomobilDodajPijaca";
                host.querySelector(".divAutomobilDodajPijaca").appendChild(l);
                host.querySelector(".divAutomobilDodajPijaca").appendChild(i);

                fetch("https://localhost:5001/Pijaca/PreuzmiPijace/",
                {
                    method:"GET",
                }).then(s=>{
                    if(s.ok){
                        s.json().then(data1=>{
                            if(data1.length==0){
                                alert("Ne postoji nijedna pijaca!");
                            }
                            else{
                                data1.forEach((data,index)=>{
                                    op=document.createElement("option");
                                    console.log(data.naziv);
                                    op.innerHTML=data.naziv;
                                    console.log(i);
                                    host.querySelector(".selectAutomobilDodajPijaca").appendChild(op);    
                                    // i.appendChild(op);
                                })
                            }
                        })
                    }
                    else{
                        s.text().then(data=>{
                            alert(data);
                        })
                    }
                })
            }


        })

        i=document.createElement("div");
        i.className="divAutomobilDodajDugme";
        host.appendChild(i);

        let btn=document.createElement("button");
        btn.innerHTML="Dodaj automobil";
        btn.className="btnDodaj";
        host.querySelector(".divAutomobilDodajDugme").appendChild(btn);

        btn.onclick=(ev)=>{
            let validacija="";
            let brojSasije1 = host.querySelector(".inputAutomobilDodajBrojSasije").value;
            if(brojSasije1===null || brojSasije1===undefined || brojSasije1===""){
                validacija+="Nevalidan broj sasije\n";
            }
            let marka1 = host.querySelector(".inputAutomobilDodajMarka").value;
            if(marka1===null || marka1===undefined || marka1===""){
                validacija+="Nevalidna marka\n";
            }
            let model1 = host.querySelector(".inputAutomobilDodajModel").value;
            if(model1===null || model1===undefined || model1===""){
                validacija+="Nevalidan model\n";
            }
            let godiste1 = host.querySelector(".inputAutomobilDodajGodiste").value;
            if(godiste1<1950 || godiste1>2022){
                validacija+="Nevalidno godiste\n";
            }
            let kilometraza1 = host.querySelector(".inputAutomobilDodajKilometraza").value;
            if(kilometraza1<0 || kilometraza1>1000000){
                validacija+="Nevalidna kilometraza\n";
            }
            let karoserijaSelect1 = host.querySelector(".selectDodajAutomobilKaroserija");
            let karoserijaOpcija1 = karoserijaSelect1.options[karoserijaSelect1.selectedIndex].text;
            if(karoserijaOpcija1===null || karoserijaOpcija1===undefined || karoserijaOpcija1===""){
                validacija+="Nevalidna karoserija\n";
            }
            let gorivoSelect1 = host.querySelector(".selectDodajAutomobilGorivo");
            let gorivoOpcija1 = gorivoSelect1.options[gorivoSelect1.selectedIndex].text;
            if(gorivoOpcija1===null || gorivoOpcija1===undefined || gorivoOpcija1===""){
                validacija+="Nevalidno gorivo\n";
            }
            let kubikaza1 = host.querySelector(".inputAutomobilDodajKubikaza").value;
            if(kubikaza1===null || kubikaza1===undefined || kubikaza1===""){
                validacija+="Nevalidna kubikaza\n";
            }
            let snaga1 = host.querySelector(".inputAutomobilDodajSnaga").value;
            if(snaga1===null || snaga1===undefined || snaga1===""){
                validacija+="Nevalidna snaga\n";
            }
            let korisnickoImeVlasnika1 = host.querySelector(".inputAutomobilDodajJMBGVlasnika").value;
            if(korisnickoImeVlasnika1===null || korisnickoImeVlasnika1===undefined || korisnickoImeVlasnika1===""){
                validacija+="Nevalidno korisnicko ime vlasnika\n";
            }


            let pijacaSelect1 = host.querySelector(".selectAutomobilDodajPijaca");
            let pijacaOpcija1 = pijacaSelect1.options[pijacaSelect1.selectedIndex].text;
            if(pijacaOpcija1===null || pijacaOpcija1===undefined || pijacaOpcija1===""){
                validacija+="Nevalidna pijaca\n";
            }

            if(validacija!=""){
                alert(validacija);
            }
            else{
                fetch("https://localhost:5001/Automobil/DodajAutomobilNaPlac/"+brojSasije1+"/"+marka1+"/"+model1+"/"+godiste1+"/"+kilometraza1+"/"+karoserijaOpcija1+"/"+gorivoOpcija1+"/"+kubikaza1+"/"+snaga1+"/"+korisnickoImeVlasnika1+"/"+slikaAutomobila,
                {
                    method:"POST"
                }).then(s=>{
                    if(s.ok){
                        s.json().then(data=>{
                            this.dodajAutomobil(host);
                            let auto = new Automobil(data.brojSasije, data.marka, data.model, data.godiste, data.kilometraza, data.karoserija, data.gorivo, data.kubikaza, data.snagaMotora, data.vlasnik.username, data.pijaca.naziv,data.slikaAutomobila);
                            auto.crtajAutomobil(this.kontejner.querySelector(".PrikazDesno"));
                        })
                    }
                    else{
                        s.text().then(data=>{
                            alert(data);
                        })
                    }
                })
                
                // auto.crtajAutomobil(this.kontejner.querySelector(".PrikazDesno"));
            }


        }

    }

    izmeniAutomobil(host){

        host.innerHTML="";

        host.classList.add("PrikazLevoDodajPadding");
        host.classList.remove("PrikazLevoObrisiPadding");

        let l;
        let i;
        let btn;
        let d;


        let h = document.createElement("div");
        h.className="h";
        host.appendChild(h);

        let x = document.createElement("img");
        x.src="../Slike/x.ico";
        x.className="x";
        h.appendChild(x);


        x.onclick=(ev)=>{
            this.brisi();
        }


        l=document.createElement("label");
        l.innerHTML="Izmeni automobil";
        l.className="lblPrikazLevoNaslov";
        host.appendChild(l);


        l=document.createElement("div");
        l.className="divAutomobilIzmeniUsernameSifra";
        host.appendChild(l);

        l=document.createElement("div");
        l.className="divAutomobilIzmeniUsername";
        host.querySelector(".divAutomobilIzmeniUsernameSifra").appendChild(l);

        l=document.createElement("div");
        l.className="divAutomobilIzmeniSifra";
        host.querySelector(".divAutomobilIzmeniUsernameSifra").appendChild(l);


        

        l=document.createElement("label");
        l.innerHTML="Korisnicko ime";
        host.querySelector(".divAutomobilIzmeniUsername").appendChild(l);

        
        i=document.createElement("input");
        i.className="UsernameAutomobilIzmeni";
        host.querySelector(".divAutomobilIzmeniUsername").appendChild(i);





        l=document.createElement("label");
        l.innerHTML="Lozinka";
        host.querySelector(".divAutomobilIzmeniSifra").appendChild(l);

        
        i=document.createElement("input");
        i.className="SifraAutomobilIzmeni";
        i.type="password";
        host.querySelector(".divAutomobilIzmeniSifra").appendChild(i);




        l=document.createElement("div");
        l.className="divAutomobilIzmeniDugme1";
        host.appendChild(l);

        btn = document.createElement("button");
        btn.innerHTML="Prijavi se";
        btn.className="btnNadji";
        btn.classList.add("btnIzmeniAutomobilPrijaviSe");
        host.querySelector(".divAutomobilIzmeniDugme1").appendChild(btn);


        d=document.createElement("div");
        d.className="divAutomobilIzmeniDole1";
        d.innerHTML="";
        host.appendChild(d);



        btn.onclick=(ev)=>{
            let validacija="";

            let username1=host.querySelector(".UsernameAutomobilIzmeni").value;
            let sifra1=host.querySelector(".SifraAutomobilIzmeni").value;

            if(username1===null || username1===undefined || username1===""){
                validacija+="Neispravno korisnicko ime\n";
            }

            if(sifra1===null || sifra1===undefined || sifra1===""){
                validacija+="Neispravna lozinka\n";
            }

            if(validacija!=""){
                alert(validacija);
            }

            else{
                fetch("https://localhost:5001/Korisnik/NadjiKorisnika/"+username1+"/"+sifra1,
                {
                    method:"GET",
                }).then(s=>{
                    if(s.ok){
                        s.json().then(data=>{
                            // const noviKorisnik = new Korisnik(data.jmbg, data.username, data.sifra, data.ime, data.prezime, data.grad, data.adresa, data.telefon, data.email, data.slika);
                            // noviKorisnik.crtajKorisnika(this.kontejner.querySelector(".PrikazDesno"));
                        })

                        host.querySelector(".UsernameAutomobilIzmeni").disabled=true;
                        host.querySelector(".UsernameAutomobilIzmeni").style.cursor="not-allowed";
                        host.querySelector(".SifraAutomobilIzmeni").disabled=true;
                        host.querySelector(".SifraAutomobilIzmeni").style.cursor="not-allowed";
                        host.querySelector(".btnIzmeniAutomobilPrijaviSe").disabled=true;
                        host.querySelector(".btnIzmeniAutomobilPrijaviSe").style.cursor="not-allowed";

                        host.querySelector(".divAutomobilIzmeniDole1").innerHTML="";
                       
                       
                        l=document.createElement("div");
                        l.className="divAutomobilIzmeniBrojSasije";
                        host.appendChild(l);
                        
                
                        l=document.createElement("label");
                        l.innerHTML="Broj sasije";
                        host.querySelector(".divAutomobilIzmeniBrojSasije").appendChild(l);
                
                        
                        i=document.createElement("input");
                        i.className="inputAutomobilIzmeniBrojSasije";
                        host.querySelector(".divAutomobilIzmeniBrojSasije").appendChild(i);
                
                
                
                
                        l=document.createElement("div");
                        l.className="divAutomobilIzmeniDugme";
                        host.appendChild(l);
                
                        let btn1 = document.createElement("button");
                        btn1.innerHTML="Nadji automobil";
                        btn1.className="btnNadji";
                        host.querySelector(".divAutomobilIzmeniDugme").appendChild(btn1);
                
                
                
                
                        d = document.createElement("div");
                        d.className="divAutomobilIzmeniDole";
                        d.innerHTML="";
                        host.appendChild(d);
                
                        btn1.onclick=(ev)=>{
                
                            let brojSasije1=host.querySelector(".inputAutomobilIzmeniBrojSasije").value;
                
                            if(brojSasije1===null || brojSasije1===undefined || brojSasije1===""){
                                alert("Neispravan broj sasije");
                            }
                            else{
                
                                fetch("https://localhost:5001/Automobil/NadjiAutomobil/"+brojSasije1,
                                {
                                    method:"GET"
                                }).then(s=>{
                                    if(s.ok){
                                        s.json().then(data=>{
                                            let noviAutomobil = new Automobil(data.brojSasije, data.marka, data.model, data.godiste, data.kilometraza, data.karoserija, data.gorivo, data.kubikaza, data.snaga, data.usernamevlasnika, data.pijaca);
                                            noviAutomobil.crtajAutomobil(this.kontejner.querySelector(".PrikazDesno"));
                                        })
                
                                        host.querySelector(".inputAutomobilIzmeniBrojSasije").disabled=true;
                                        host.querySelector(".inputAutomobilIzmeniBrojSasije").style.cursor="not-allowed";

                                        host.querySelector(".inputAutomobilIzmeniBrojSasije").disabled=true;
                                        host.querySelector(".inputAutomobilIzmeniBrojSasije").style.cursor="not-allowed";

                                        btn1.disabled=true;
                                        btn1.style.cursor="not-allowed";

                                        
                                        // btn1.disabled=true;
                                        // btn1.style.cursor="not-allowed";

                                        d=host.querySelector(".divAutomobilIzmeniDole");
                                        d.innerHTML="";
                        
                        
                                        d=document.createElement("div");
                                        d.className="divAutomobilIzmeniKilometraza";
                                        host.querySelector(".divAutomobilIzmeniDole").appendChild(d);
                                
                        
                        
                                        l=document.createElement("label");
                                        l.innerHTML="Nova kilometraza";
                                        host.querySelector(".divAutomobilIzmeniKilometraza").appendChild(l);
                        
                        
                                        i=document.createElement("input");
                                        i.type="number";
                                        i.className="KilometrazaAutomobilIzmeni";
                                        host.querySelector(".divAutomobilIzmeniKilometraza").appendChild(i);
                        
                                        
                                        d=document.createElement("div");
                                        d.className="divAutomobilIzmeniDugmeDole";
                                        host.querySelector(".divAutomobilIzmeniDole").appendChild(d);
                        
                                        let btn2 = document.createElement("button");
                                        btn2.innerHTML="Izmeni automobil";
                                        btn2.className="btnIzmeni";
                                        host.querySelector(".divAutomobilIzmeniDugmeDole").appendChild(btn2);
                
                                        btn2.onclick=(ev)=>{
                                            let kilometraza1 = host.querySelector(".KilometrazaAutomobilIzmeni").value;
                                            
                                            if(kilometraza1<0 || kilometraza1>1000000 ||  kilometraza1===null || kilometraza1===undefined || kilometraza1==="")
                                            {
                                                alert("Neispravna kilometraza");
                                            }
                                            else{
                
                                                fetch("https://localhost:5001/Automobil/IzmeniAutomobil/"+brojSasije1+"/"+kilometraza1,
                                                {
                                                    method:"PUT"
                                                }).then(s=>{
                                                    if(s.ok){
                                                        s.json().then(data=>{
                                                            let noviAutomobil = new Automobil(data.brojSasije, data.marka, data.model, data.godiste, data.kilometraza, data.karoserija, data.gorivo, data.kubikaza, data.snagaMotora, data.usernamevlasnika, data.pijaca);
                                                            let w = this.kontejner.querySelector(".PrikazDesno");
                                                            w.innerHTML="";  
                                                            noviAutomobil.crtajAutomobil(this.kontejner.querySelector(".PrikazDesno"));
                                                        })
                                                    }
                                                    else{
                                                        s.text().then(data=>{
                                                            alert(data);
                                                        })
                                                    }
                                                })
                                            }
                                        }
                                    }
                                    else{
                                        s.text().then(data=>{
                                            alert(data);
                                        })
                                    }
                                })
                
                               
                            }
                      
                        }
                    }
                    else{
                        s.text().then(data=>{
                            alert(data)
                        })
                    }
                })

            }
        }









      


    }

    dodajKorisnika(host){

        host.innerHTML="";

        host.classList.add("PrikazLevoDodajPadding");
        host.classList.remove("PrikazLevoObrisiPadding");

        let l;
        let i;


        let h = document.createElement("div");
        h.className="h";
        host.appendChild(h);

        let x = document.createElement("img");
        x.src="../Slike/x.ico";
        x.className="x";
        h.appendChild(x);


        x.onclick=(ev)=>{
            this.brisi();
        }

        let izabranaSlika;
        let flag=0;

        
        l=document.createElement("label");
        l.innerHTML="Dodaj korisnika";
        l.className="lblPrikazLevoNaslov";
        host.appendChild(l);

        l=document.createElement("div");
        l.className="divDodajKorisnikaJMBG";
        host.appendChild(l);


        l=document.createElement("div");
        l.className="divDodajKorisnikaUsernameSifra";
        host.appendChild(l);




        

        l=document.createElement("div");
        l.className="divDodajKorisnikaUsername";
        host.querySelector(".divDodajKorisnikaUsernameSifra").appendChild(l);

        l=document.createElement("div");
        l.className="divDodajKorisnikaSifra";
        host.querySelector(".divDodajKorisnikaUsernameSifra").appendChild(l);





        l=document.createElement("div");
        l.className="divDodajKorisnikaImePrezime";
        host.appendChild(l);

        l=document.createElement("div");
        l.className="divDodajKorisnikaIme";
        host.querySelector(".divDodajKorisnikaImePrezime").appendChild(l);

        l=document.createElement("div");
        l.className="divDodajKorisnikaPrezime";
        host.querySelector(".divDodajKorisnikaImePrezime").appendChild(l);





        l=document.createElement("div");
        l.className="divDodajKorisnikaGradAdresa";
        host.appendChild(l);

        l=document.createElement("div");
        l.className="divDodajKorisnikaGrad";
        host.querySelector(".divDodajKorisnikaGradAdresa").appendChild(l);

        l=document.createElement("div");
        l.className="divDodajKorisnikaAdresa";
        host.querySelector(".divDodajKorisnikaGradAdresa").appendChild(l);





        l=document.createElement("div");
        l.className="divDodajKorisnikaTelefonEmail";
        host.appendChild(l);

        l=document.createElement("div");
        l.className="divDodajKorisnikaTelefon";
        host.querySelector(".divDodajKorisnikaTelefonEmail").appendChild(l);

        l=document.createElement("div");
        l.className="divDodajKorisnikaEmail";
        host.querySelector(".divDodajKorisnikaTelefonEmail").appendChild(l);



        l=document.createElement("div");
        l.className="divDodajKorisnikaSlika";
        host.appendChild(l);



        l=document.createElement("div");
        l.className="btnDodajKorisnika";
        host.appendChild(l);






        let nizLabela=["JMBG", "Korisnicko ime", "Lozinka", "Ime", "Prezime", "Grad", "Adresa", "Telefon", "E-mail", "Slika"];

        nizLabela.forEach((p,index)=>
            {
                l = document.createElement("label");
                l.innerHTML=p;
                
                if(index!=9){
                    i = document.createElement("input");
                    i.className="inputKorisnikDodaj"; //inputKorisnikDodaj, inputKorisnikDodaj...
                }

                if(index==0){
                    i.classList.add("inputKorisnikDodajJMBG");
                    host.querySelector(".divDodajKorisnikaJMBG").appendChild(l);
                    host.querySelector(".divDodajKorisnikaJMBG").appendChild(i);
                }

                else if(index==1){
                    i.classList.add("inputKorisnikDodajUsername");
                    host.querySelector(".divDodajKorisnikaUsername").appendChild(l);
                    host.querySelector(".divDodajKorisnikaUsername").appendChild(i);
                }
                else if(index==2){
                    i.classList.add("inputKorisnikDodajSifra");
                    i.type="password";
                    host.querySelector(".divDodajKorisnikaSifra").appendChild(l);
                    host.querySelector(".divDodajKorisnikaSifra").appendChild(i);
                }

                else if(index==3){
                    i.classList.add("inputKorisnikDodajIme");
                    host.querySelector(".divDodajKorisnikaIme").appendChild(l);
                    host.querySelector(".divDodajKorisnikaIme").appendChild(i);
                }

                else if (index==4){
                    i.classList.add("inputKorisnikDodajPrezime");
                    host.querySelector(".divDodajKorisnikaPrezime").appendChild(l);
                    host.querySelector(".divDodajKorisnikaPrezime").appendChild(i);
                }

                else if (index==5){
                    i.classList.add("inputKorisnikDodajGrad");
                    host.querySelector(".divDodajKorisnikaGrad").appendChild(l);
                    host.querySelector(".divDodajKorisnikaGrad").appendChild(i);
                }

                else if (index==6){
                    i.classList.add("inputKorisnikDodajAdresa");
                    host.querySelector(".divDodajKorisnikaAdresa").appendChild(l);
                    host.querySelector(".divDodajKorisnikaAdresa").appendChild(i);
                }

                else if (index==7){
                    i.classList.add("inputKorisnikDodajTelefon");
                    host.querySelector(".divDodajKorisnikaTelefon").appendChild(l);
                    host.querySelector(".divDodajKorisnikaTelefon").appendChild(i);
                }

                else if (index==8){
                    i.classList.add("inputKorisnikDodajEmail");
                    host.querySelector(".divDodajKorisnikaEmail").appendChild(l);
                    host.querySelector(".divDodajKorisnikaEmail").appendChild(i);
                }

                else{

                    i = document.createElement("button");
                    i.className="inputKorisnikDodaj";
                    i.innerHTML="Slika";
                    i.classList.add("inputKorisnikDodajSlika");
                    // host.querySelector(".divDodajKorisnikaSlika").appendChild(l);
                    host.querySelector(".divDodajKorisnikaSlika").appendChild(i);
                    
                    i.onclick=(ev)=>{

                        if(flag==1){
                            this.kontejner.querySelector(".PrikazDesno").innerHTML="";
                            flag=(flag+1)%2;
                        }
                        else{
                            flag=(flag+1)%2;
                            let forma = this.kontejner.querySelector(".PrikazDesno");
                            forma.innerHTML="";
                            let d;
                            for(let i=1;i<=4;i++){
                                d=document.createElement("img");
                                d.src="../Avatari/"+i+".png";
                                d.className="izaberiSliku";
                                d.classList.add("slika"+i);
                                forma.appendChild(d);
                                forma.style.backgroundImage = "url('../Slike/PozadinaProzor.jpg')";
                                d.style.cursor="not-allowed;"
                                d.onclick=(ev)=>{
                                    
                                    izabranaSlika=i;
                                    this.kontejner.querySelector(".PrikazDesno").innerHTML="";
                                    forma.style.backgroundImage = null;
                                    let novaSlika=this.kontejner.querySelector(".divDodajKorisnikaSlika");
                                    console.log(novaSlika);
                                    novaSlika.innerHTML="";
                                    let w = document.createElement("img");
                                    w.src="../Avatari/"+i+".png";
                                    w.className="izaberiSliku";
                                    w.classList.add("slika"+i);
                                    host.querySelector(".divDodajKorisnikaSlika").appendChild(w);
                                    // novaSlika.type="img";
                                    // novaSlika.src="../Avatari/"+i+".png";
                                }

                            }
                        }

                    }
                }
                
            })

        let btn = document.createElement("button");
        btn.innerHTML="Dodaj korisnika";
        btn.className="btnDodaj";
        btn.classList.add("btnDodajKorisnikaDugme");
        host.querySelector(".btnDodajKorisnika").appendChild(btn);

        btn.onclick=(ev)=>{
            let validacija="";
            let jmbg1 = host.querySelector(".inputKorisnikDodajJMBG").value;
            if(jmbg1===null || jmbg1===undefined || jmbg1==="" || jmbg1.length!=13){
                validacija+="Nevalidan JMBG \n";
            }

            let username1 = host.querySelector(".inputKorisnikDodajUsername").value;
            if(username1===null || username1===undefined || username1===""){
                validacija+="Nevalidno korisnicko ime\n";
            }
            

            let sifra1 = host.querySelector(".inputKorisnikDodajSifra").value;
            if(sifra1===null || sifra1===undefined || sifra1===""){
                validacija+="Nevalidna sifra \n";
            }
            let ime1 = host.querySelector(".inputKorisnikDodajIme").value;
            if(ime1===null || ime1===undefined || ime1==="" || ime1.length>30){
                validacija+="Nevalidno ime\n";
            }
            let prezime1 = host.querySelector(".inputKorisnikDodajPrezime").value;
            if(prezime1===null || prezime1===undefined || prezime1==="" || prezime1.length>30){
                validacija+="Nevalidno prezime\n";
            }
            let grad1 = host.querySelector(".inputKorisnikDodajGrad").value;
            if(grad1===null || grad1===undefined || grad1==="" || ime1.length430){
                validacija+="Nevalidan grad\n";
            }
            let adresa1 = host.querySelector(".inputKorisnikDodajAdresa").value;
            if(adresa1===null || adresa1===undefined || adresa1===""){
                validacija+="Nevalidna adresa\n";
            }
            let telefon1 = host.querySelector(".inputKorisnikDodajTelefon").value;
            if(telefon1===null || telefon1===undefined || telefon1===""){
                validacija+="Nevalidan telefon\n";
            }
            let email1 = host.querySelector(".inputKorisnikDodajEmail").value;
            if(email1===null || email1===undefined || email1===""){
                validacija+="Nevalidan email\n";
            }
            if(izabranaSlika===null || izabranaSlika===undefined || izabranaSlika===""){
                validacija+="Nevalidna slika\n";
            }
            // let slika1 = host.querySelector(".inputKorisnikDodajSlika").value;
            // if(slika1===null || slika1===undefined || slika1==="" || slika1>50 || slika1<1){
            //     validacija+="Nevalidna slika\n";
            // }

            if(validacija!=""){
                alert(validacija);
            }

            else{

                fetch("https://localhost:5001/Korisnik/DodajKorisnika/"+jmbg1+"/"+username1+"/"+sifra1+"/"+ime1+"/"+prezime1+"/"+grad1+"/"+adresa1+"/"+telefon1+"/"+email1+"/"+izabranaSlika,
                {
                    method:"POST"
                }).then(s=>{
                    if(s.ok){
                        s.json().then(data=>{
                            // console.log(data.jmbg, data.username, data.sifra, data.ime, data.prezime, data.grad, data.adresa, data.telefon, data.email, data.slika);
                            const noviKorisnik = new Korisnik(data.jmbg, data.username, data.ime, data.prezime, data.grad, data.adresa, data.telefon, data.email, data.slika);
                            noviKorisnik.crtajKorisnika(this.kontejner.querySelector(".PrikazDesno"));

                            host.querySelector(".inputKorisnikDodajJMBG").disabled=true;
                            host.querySelector(".inputKorisnikDodajJMBG").style.cursor="not-allowed";
                                                        
                            host.querySelector(".inputKorisnikDodajUsername").disabled=true;
                            host.querySelector(".inputKorisnikDodajUsername").style.cursor="not-allowed";
                                                        
                            host.querySelector(".inputKorisnikDodajSifra").disabled=true;
                            host.querySelector(".inputKorisnikDodajSifra").style.cursor="not-allowed";
                                                        
                            host.querySelector(".inputKorisnikDodajIme").disabled=true;
                            host.querySelector(".inputKorisnikDodajIme").style.cursor="not-allowed";
                                                        
                            host.querySelector(".inputKorisnikDodajPrezime").disabled=true;
                            host.querySelector(".inputKorisnikDodajPrezime").style.cursor="not-allowed";
                                                        
                            host.querySelector(".inputKorisnikDodajGrad").disabled=true;
                            host.querySelector(".inputKorisnikDodajGrad").style.cursor="not-allowed";
                                                        
                            host.querySelector(".inputKorisnikDodajAdresa").disabled=true;
                            host.querySelector(".inputKorisnikDodajAdresa").style.cursor="not-allowed";
                                                        
                            host.querySelector(".inputKorisnikDodajTelefon").disabled=true;
                            host.querySelector(".inputKorisnikDodajTelefon").style.cursor="not-allowed";
                                                        
                            host.querySelector(".inputKorisnikDodajEmail").disabled=true;
                            host.querySelector(".inputKorisnikDodajEmail").style.cursor="not-allowed";

                            host.querySelector(".btnDodajKorisnikaDugme").disabled=true;
                            host.querySelector(".btnDodajKorisnikaDugme").style.cursor="not-allowed";

                        })
                    }
                    else {
                        s.text().then(data=>{
                            alert(data);
                        })

                    }
                })
            }

        }


    }

    izmeniKorisnika(host){

        host.innerHTML="";


        host.classList.add("PrikazLevoDodajPadding");
        host.classList.remove("PrikazLevoObrisiPadding");


        let l;
        let i;


        let h = document.createElement("div");
        h.className="h";
        host.appendChild(h);

        let x = document.createElement("img");
        x.src="../Slike/x.ico";
        x.className="x";
        h.appendChild(x);


        x.onclick=(ev)=>{
            this.brisi();
        }

        l=document.createElement("label");
        l.innerHTML="Izmeni korisnika";
        l.className="lblPrikazLevoNaslov";
        host.appendChild(l);




        l=document.createElement("div");
        l.className="divKorisnikIzmeniUsernameSifra";
        host.appendChild(l);

        l=document.createElement("div");
        l.className="divKorisnikIzmeniUsername";
        host.querySelector(".divKorisnikIzmeniUsernameSifra").appendChild(l);

        l=document.createElement("div");
        l.className="divKorisnikIzmeniSifra";
        host.querySelector(".divKorisnikIzmeniUsernameSifra").appendChild(l);


        

        l=document.createElement("label");
        l.innerHTML="Korisnicko ime";
        host.querySelector(".divKorisnikIzmeniUsername").appendChild(l);

        
        i=document.createElement("input");
        i.className="UsernameKorisnikIzmeni";
        host.querySelector(".divKorisnikIzmeniUsername").appendChild(i);





        l=document.createElement("label");
        l.innerHTML="Lozinka";
        host.querySelector(".divKorisnikIzmeniSifra").appendChild(l);

        
        i=document.createElement("input");
        i.className="SifraKorisnikIzmeni";
        i.type="password";
        host.querySelector(".divKorisnikIzmeniSifra").appendChild(i);




        l=document.createElement("div");
        l.className="divKorisnikIzmeniDugme";
        host.appendChild(l);

        let btn = document.createElement("button");
        btn.innerHTML="Prijavi se";
        btn.className="btnNadji";
        btn.classList.add("btnIzmeniKorisnikaPrijaviSe");
        host.querySelector(".divKorisnikIzmeniDugme").appendChild(btn);






        let d=document.createElement("div");
        d.className="divKorisnikIzmeniDole";
        d.innerHTML="";
        host.appendChild(d);

        


        btn.onclick=(ev)=>{

            let validacija="";

            let username1=host.querySelector(".UsernameKorisnikIzmeni").value;
            let sifra1=host.querySelector(".SifraKorisnikIzmeni").value;

            if(username1===null || username1===undefined || username1===""){
                validacija+="Neispravno korisnicko ime\n";
            }

            if(sifra1===null || sifra1===undefined || sifra1===""){
                validacija+="Neispravna lozinka\n";
            }

            if(validacija!=""){
                alert(validacija);
            }

            else{

                fetch("https://localhost:5001/Korisnik/NadjiKorisnika/"+username1+"/"+sifra1,
                    {
                        method:"GET"
                    }).then(s=>{
                        if(s.ok){

                            // console.log(s.text());
                            s.json().then(data=>{
                                const noviKorisnik = new Korisnik(data.jmbg, data.username, data.ime, data.prezime, data.grad, data.adresa, data.telefon, data.email, data.slika);
                                noviKorisnik.crtajKorisnika(this.kontejner.querySelector(".PrikazDesno"));
                            })
                            host.querySelector(".UsernameKorisnikIzmeni").disabled=true;
                            host.querySelector(".UsernameKorisnikIzmeni").style.cursor="not-allowed";
                            host.querySelector(".SifraKorisnikIzmeni").disabled=true;
                            host.querySelector(".SifraKorisnikIzmeni").style.cursor="not-allowed";
                            host.querySelector(".btnIzmeniKorisnikaPrijaviSe").disabled=true;
                            host.querySelector(".btnIzmeniKorisnikaPrijaviSe").style.cursor="not-allowed";
                            
                            d=host.querySelector(".divKorisnikIzmeniDole");
                            d.innerHTML="";
                            
                
                
                            d=document.createElement("div");
                            d.className="divKorisnikIzmeniGradAdresa";
                            host.querySelector(".divKorisnikIzmeniDole").appendChild(d);
                    
                            d=document.createElement("div");
                            d.className="divKorisnikIzmeniGrad";
                            host.querySelector(".divKorisnikIzmeniGradAdresa").appendChild(d);
                    
                            d=document.createElement("div");
                            d.className="divKorisnikIzmeniAdresa";
                            host.querySelector(".divKorisnikIzmeniGradAdresa").appendChild(d);
                    
                    
                    
                            d=document.createElement("div");
                            d.className="divKorisnikIzmeniTelefonEmail";
                            host.querySelector(".divKorisnikIzmeniDole").appendChild(d);
                    
                            d=document.createElement("div");
                            d.className="divKorisnikIzmeniTelefon";
                            host.querySelector(".divKorisnikIzmeniTelefonEmail").appendChild(d);
                    
                            d=document.createElement("div");
                            d.className="divKorisnikIzmeniEmail";
                            host.querySelector(".divKorisnikIzmeniTelefonEmail").appendChild(d);
                            
                            let nizLabela=["Grad", "Adresa", "Telefon", "E-mail"];
                
                            nizLabela.forEach((p,index)=>
                            {
                                l = document.createElement("label");
                                l.innerHTML=p;
                
                                    
                
                                i = document.createElement("input");
                                i.className="inputKorisnikIzmeni"; 
                
                
                
                                if(index==0){
                                    i.classList.add("inputKorisnikIzmeniGrad");
                                    host.querySelector(".divKorisnikIzmeniGrad").appendChild(l);
                                    host.querySelector(".divKorisnikIzmeniGrad").appendChild(i);
                                }
                
                                else if(index==1){
                                    i.classList.add("inputKorisnikIzmeniAdresa");
                                    host.querySelector(".divKorisnikIzmeniAdresa").appendChild(l);
                                    host.querySelector(".divKorisnikIzmeniAdresa").appendChild(i);
                                }
                
                                else if (index==2){
                                    i.classList.add("inputKorisnikIzmeniTelefon");
                                    host.querySelector(".divKorisnikIzmeniTelefon").appendChild(l);
                                    host.querySelector(".divKorisnikIzmeniTelefon").appendChild(i);
                                }
                
                                else if (index==3){
                                    i.classList.add("inputKorisnikIzmeniEmail");
                                    host.querySelector(".divKorisnikIzmeniEmail").appendChild(l);
                                    host.querySelector(".divKorisnikIzmeniEmail").appendChild(i);
                                }
                                
                            })
                
                            d=document.createElement("div");
                            d.className="btnKorisnikIzmeni";
                            host.querySelector(".divKorisnikIzmeniDole").appendChild(d);
                
                            let btn1 = document.createElement("button");
                            btn1.innerHTML="Izmeni korisnika";
                            btn1.className="btnIzmeni";
                            host.querySelector(".btnKorisnikIzmeni").appendChild(btn1);


                            btn1.onclick=(ev)=>{
                                let grad1 = host.querySelector(".inputKorisnikIzmeniGrad").value;
                                if(grad1===null || grad1===undefined || grad1===""){
                                    grad1="-";
                                }
                                let adresa1 = host.querySelector(".inputKorisnikIzmeniAdresa").value;
                                if(adresa1===null || adresa1===undefined || adresa1===""){
                                    adresa1="-";
                                }
                                let telefon1 = host.querySelector(".inputKorisnikIzmeniTelefon").value;
                                if(telefon1===null || telefon1===undefined || telefon1===""){
                                    telefon1="-";
                                }
                                let email1 = host.querySelector(".inputKorisnikIzmeniEmail").value;
                                if(email1===null || email1===undefined || email1===""){
                                    email1="-";
                                }

                                
                              
                                fetch("https://localhost:5001/Korisnik/IzmeniKorisnika/"+username1+"/"+grad1+"/"+adresa1+"/"+telefon1+"/"+email1,
                                {
                                    method:"PUT",
                               }).then(s=>{ 
                                    if(s.ok){
                                        s.json().then(data=>{
                                            const noviKorisnik = new Korisnik(data.jmbg, data.username, data.ime, data.prezime, data.grad, data.adresa, data.telefon, data.email, data.slika);
                                            let w = this.kontejner.querySelector(".PrikazDesno");
                                            w.innerHTML="";
                                            noviKorisnik.crtajKorisnika(this.kontejner.querySelector(".PrikazDesno"));                                         
                                        })
                                    }
                                    else{
                                        s.text().then(data=>{
                                            alert(data)
                                        })
                                    }
                                })

                            }

                        }
                        else {
                            s.text().then(data=>{
                                alert(data)
                            })
                        }
                    })

                }
            
            

        }
    }

    prikaziPonude(host){
        host.innerHTML="";

        host.classList.add("PrikazLevoDodajPadding");
        host.classList.remove("PrikazLevoObrisiPadding");


        let l;
        let i;


        let h = document.createElement("div");
        h.className="h";
        host.appendChild(h);

        let x = document.createElement("img");
        x.src="../Slike/x.ico";
        x.className="x";
        h.appendChild(x);


        x.onclick=(ev)=>{
            this.brisi();
        }

        l=document.createElement("label");
        l.innerHTML="Oglasi korisnika";
        l.className="lblPrikazLevoNaslov";
        host.appendChild(l);

        l=document.createElement("div");
        l.className="divKorisnikNadjiOglaseJMBG";
        host.appendChild(l);
        

        l=document.createElement("label");
        l.innerHTML="Korisnicko ime";
        host.querySelector(".divKorisnikNadjiOglaseJMBG").appendChild(l);

        
        i=document.createElement("input");
        i.className="inputKorisnikNadjiOglaseJMBG";
        host.querySelector(".divKorisnikNadjiOglaseJMBG").appendChild(i);




        l=document.createElement("div");
        l.className="divKorisnikNadjiOglaseDugme";
        host.appendChild(l);

        let btn = document.createElement("button");
        btn.innerHTML="Nadji oglase";
        btn.className="btnNadji";
        host.querySelector(".divKorisnikNadjiOglaseDugme").appendChild(btn);

        btn.onclick=(ev)=>{
            let username1=host.querySelector(".inputKorisnikNadjiOglaseJMBG").value;

            if(username1===null || username1===undefined || username1===""){
                alert("Neispravno korisnicko ime.");
            }
            else{

                fetch("https://localhost:5001/Korisnik/PrikaziSvojePonude/"+username1,
                {
                    method:"GET"
                }).then(s=>{
                    if(s.ok){
                        s.json().then(data1=>{
                            if(data1.length==0){
                                alert("Ovaj korisnik nije postavio nijedan oglas");
                            }
                            else{
                                data1.forEach((data,index)=>{
                                    const noviOglas = new Oglas(data.usernamekorisnika, data.adresaKorisnika, data.brojSasijeAutomobila, data.cena, data.datum, data.emailKorisnika, data.godisteAutomobila, data.gorivoAutomobila, data.gradKorisnika, data.imeKorisnika, data.jmbGkorisnika, data.karoserijaAutomobila, data.kilometrazaAutomobila, data.kubikazaAutomobila, data.lokacijaPijace, data.markaAutomobila, data.modelAutomobila, data.nazivPijace, data.prezimeKorisnika, data.sifraOglasa, data.snagaMotoraAutomobila, data.telefonKorisnika, data.telefonPijace, data.slikaKorisnika, data.adresaPijace);
                                    noviOglas.crtajOglase(this.kontejner.querySelector(".PrikazDesno"), index);    
                                })
                            }
                            
                        })
                    }
                    else{
                        s.text().then(data=>{
                            alert(data);
                        })
                    }
                })
            }


        }

    }

    obrisiKorisnika(host){

        host.innerHTML="";

        host.classList.add("PrikazLevoDodajPadding");
        host.classList.remove("PrikazLevoObrisiPadding");


        let l;
        let i;



        let h = document.createElement("div");
        h.className="h";
        host.appendChild(h);

        let x = document.createElement("img");
        x.src="../Slike/x.ico";
        x.className="x";
        h.appendChild(x);


        x.onclick=(ev)=>{
            this.brisi();
        }



        l=document.createElement("label");
        l.innerHTML="Obrisi korisnika";
        l.className="lblPrikazLevoNaslov";
        host.appendChild(l);




        l=document.createElement("div");
        l.className="divKorisnikObrisiJMBGSifra";
        host.appendChild(l);

        l=document.createElement("div");
        l.className="divKorisnikObrisiJMBG";
        host.querySelector(".divKorisnikObrisiJMBGSifra").appendChild(l);

        l=document.createElement("div");
        l.className="divKorisnikObrisiSifra";
        host.querySelector(".divKorisnikObrisiJMBGSifra").appendChild(l);


        

        l=document.createElement("label");
        l.innerHTML="Korisnicko ime";
        host.querySelector(".divKorisnikObrisiJMBG").appendChild(l);

        
        i=document.createElement("input");
        i.className="JMBGKorisnikObrisi";
        host.querySelector(".divKorisnikObrisiJMBG").appendChild(i);





        l=document.createElement("label");
        l.innerHTML="Lozinka";
        host.querySelector(".divKorisnikObrisiSifra").appendChild(l);

        
        i=document.createElement("input");
        i.className="SifraKorisnikObrisi";
        i.type="password";
        host.querySelector(".divKorisnikObrisiSifra").appendChild(i);




        l=document.createElement("div");
        l.className="divKorisnikObrisiDugme";
        host.appendChild(l);

        let btn = document.createElement("button");
        btn.innerHTML="Obrisi korisnika";
        btn.className="btnObrisi";
        btn.classList.add("btnKorisnikObrisiDugme");
        host.querySelector(".divKorisnikObrisiDugme").appendChild(btn);


        let d=document.createElement("div");
        d.className="divKorisnikObrisiDole";
        d.innerHTML="";
        host.appendChild(d);

        btn.onclick=(ev)=>{

            let validacija="";
            let username1=host.querySelector(".JMBGKorisnikObrisi").value;
            let sifra1=host.querySelector(".SifraKorisnikObrisi").value;

            if(username1===null || username1===undefined || username1===""){
                validacija+="Nevalidno korisnicko ime\n"
            }

            if(sifra1===null || sifra1===undefined || sifra1===""){
                validacija+="Nevalidna lozinka\n"
            }

            if(validacija!=""){
                alert(validacija);
            }

            else{
                fetch("https://localhost:5001/Korisnik/NadjiKorisnika/"+username1+"/"+sifra1,
                    {
                        method:"GET"
                    }).then(s=>{
                        if(s.ok){
                            s.json().then(data=>{
                                const noviKorisnik = new Korisnik(data.jmbg, data.username, data.ime, data.prezime, data.grad, data.adresa, data.telefon, data.email, data.slika);
                                noviKorisnik.crtajKorisnika(this.kontejner.querySelector(".PrikazDesno"));
                            })
                            host.querySelector(".JMBGKorisnikObrisi").disabled=true;
                            host.querySelector(".JMBGKorisnikObrisi").style.cursor="not-allowed";

                            host.querySelector(".SifraKorisnikObrisi").disabled=true;
                            host.querySelector(".SifraKorisnikObrisi").style.cursor="not-allowed";

                            host.querySelector(".btnKorisnikObrisiDugme").disabled=true;
                            host.querySelector(".btnKorisnikObrisiDugme").style.cursor="not-allowed";

                            d=host.querySelector(".divKorisnikObrisiDole");
                            d.innerHTML="";

                            d=document.createElement("div");
                            d.className="divLabelaObrisi";
                            host.querySelector(".divKorisnikObrisiDole").appendChild(d);

                            l=document.createElement("label");
                            l.innerHTML="Da li ste sigurni?"
                            l.className="lblPrikazLevoNaslov";
                            host.querySelector(".divLabelaObrisi").appendChild(l);





                            d=document.createElement("div");
                            d.className="divObrisiDugmici";
                            host.querySelector(".divKorisnikObrisiDole").appendChild(d);

                            d=document.createElement("div");
                            d.className="divObrisiDugmiciPotvrdi";
                            host.querySelector(".divObrisiDugmici").appendChild(d);

                            d=document.createElement("div");
                            d.className="divObrisiDugmiciPonisti";
                            host.querySelector(".divObrisiDugmici").appendChild(d);




                            let btnPotvrdi=document.createElement("button");
                            btnPotvrdi.className="divObrisiPotvrdi";
                            btnPotvrdi.innerHTML="Potvrdi";
                            host.querySelector(".divObrisiDugmiciPotvrdi").appendChild(btnPotvrdi);

                            let btnPonisti=document.createElement("button");
                            btnPonisti.className="btnObrisiPonisti";
                            btnPonisti.innerHTML="Ponisti";
                            host.querySelector(".divObrisiDugmiciPonisti").appendChild(btnPonisti);


                            btnPotvrdi.onclick=(ev)=>{
                                fetch("https://localhost:5001/Korisnik/ObrisiKorisnika/"+username1,
                                {
                                    method:"DELETE"
                                }).then(s=>{
                                    if(s.ok){
                                        this.kontejner.querySelector(".PrikazDesno").innerHTML="";
                                        this.crtaj(this.kontejner);
                                        alert("Korisnik uspesno obrisan");
                                    }
                                    else{
                                        s.text().then(data=>{
                                            alert(data);
                                        })
                                    }
                                })
                            }
                            
                            btnPonisti.onclick=(ev)=>{
                                this.kontejner.querySelector(".PrikazDesno").innerHTML="";
                                this.obrisiKorisnika(host);                            
                            }



                        }
                        else{
                            s.text().then(data=>{
                                alert(data);
                            })
                        }
                });
            }
            
        }
    }


    vratiSifru(host){


        host.innerHTML="";

        host.classList.add("PrikazLevoDodajPadding");
        host.classList.remove("PrikazLevoObrisiPadding");


        let l;
        let i;


        let h = document.createElement("div");
        h.className="h";
        host.appendChild(h);

        let x = document.createElement("img");
        x.src="../Slike/x.ico";
        x.className="x";
        h.appendChild(x);


        x.onclick=(ev)=>{
            this.brisi();
        }

        l=document.createElement("label");
        l.innerHTML="Zaboravljena lozinka";
        l.className="lblPrikazLevoNaslov";
        host.appendChild(l);


        l=document.createElement("div");
        l.className="divKorisnikZaboravljenaSifraJMBGUsername";
        host.appendChild(l);



        l=document.createElement("div");
        l.className="divKorisnikZaboravljenaSifraJMBG";
        host.querySelector(".divKorisnikZaboravljenaSifraJMBGUsername").appendChild(l);

        i=document.createElement("label");
        i.innerHTML="JMBG"
        host.querySelector(".divKorisnikZaboravljenaSifraJMBG").appendChild(i);

        i=document.createElement("input");
        i.className="inputKorisnikZaboravljenaSifraJMBG";
        host.querySelector(".divKorisnikZaboravljenaSifraJMBG").appendChild(i);




        l=document.createElement("div");
        l.className="divKorisnikZaboravljenaUsername";
        host.querySelector(".divKorisnikZaboravljenaSifraJMBGUsername").appendChild(l);

        i=document.createElement("label");
        i.innerHTML="Korisnicko ime"
        host.querySelector(".divKorisnikZaboravljenaUsername").appendChild(i);

        i=document.createElement("input");
        i.className="inputKorisnikZaboravljenaSifraUsername";
        host.querySelector(".divKorisnikZaboravljenaUsername").appendChild(i);





        l=document.createElement("div");
        l.className="divKorisnikZaboravljenaSifraImePrezime";
        host.appendChild(l);

        l=document.createElement("div");
        l.className="divKorisnikZaboravljenaSifraIme";
        host.querySelector(".divKorisnikZaboravljenaSifraImePrezime").appendChild(l);

        l=document.createElement("div");
        l.className="divKorisnikZaboravljenaSifraPrezime";
        host.querySelector(".divKorisnikZaboravljenaSifraImePrezime").appendChild(l);


        i=document.createElement("label");
        i.innerHTML="Ime"
        host.querySelector(".divKorisnikZaboravljenaSifraIme").appendChild(i);

        i=document.createElement("input");
        i.className="inputKorisnikZaboravljenaSifraIme";
        host.querySelector(".divKorisnikZaboravljenaSifraIme").appendChild(i);


        i=document.createElement("label");
        i.innerHTML="Prezime"
        host.querySelector(".divKorisnikZaboravljenaSifraPrezime").appendChild(i);

        i=document.createElement("input");
        i.className="inputKorisnikZaboravljenaSifraPrezime";
        host.querySelector(".divKorisnikZaboravljenaSifraPrezime").appendChild(i);







        l=document.createElement("div");
        l.className="divKorisnikZaboravljenaSifraGradAdresa";
        host.appendChild(l);

        l=document.createElement("div");
        l.className="divKorisnikZaboravljenaSifraGrad";
        host.querySelector(".divKorisnikZaboravljenaSifraGradAdresa").appendChild(l);

        l=document.createElement("div");
        l.className="divKorisnikZaboravljenaSifraAdresa";
        host.querySelector(".divKorisnikZaboravljenaSifraGradAdresa").appendChild(l);


        i=document.createElement("label");
        i.innerHTML="Grad"
        host.querySelector(".divKorisnikZaboravljenaSifraGrad").appendChild(i);


        i=document.createElement("input");
        i.className="inputKorisnikZaboravljenaSifraGrad";
        host.querySelector(".divKorisnikZaboravljenaSifraGrad").appendChild(i);

        i=document.createElement("label");
        i.innerHTML="Adresa"
        host.querySelector(".divKorisnikZaboravljenaSifraAdresa").appendChild(i);

        i=document.createElement("input");
        i.className="inputKorisnikZaboravljenaSifraAdresa";
        host.querySelector(".divKorisnikZaboravljenaSifraAdresa").appendChild(i);








        l=document.createElement("div");
        l.className="divKorisnikZaboravljenaSifraTelefonEmail";
        host.appendChild(l);

        l=document.createElement("div");
        l.className="divKorisnikZaboravljenaSifraTelefon";
        host.querySelector(".divKorisnikZaboravljenaSifraTelefonEmail").appendChild(l);

        l=document.createElement("div");
        l.className="divKorisnikZaboravljenaSifraEmail";
        host.querySelector(".divKorisnikZaboravljenaSifraTelefonEmail").appendChild(l);


        i=document.createElement("label");
        i.innerHTML="Telefon"
        host.querySelector(".divKorisnikZaboravljenaSifraTelefon").appendChild(i);

        i=document.createElement("input");
        i.className="inputKorisnikZaboravljenaSifraTelefon";
        host.querySelector(".divKorisnikZaboravljenaSifraTelefon").appendChild(i);

        i=document.createElement("label");
        i.innerHTML="Email"
        host.querySelector(".divKorisnikZaboravljenaSifraEmail").appendChild(i);

        i=document.createElement("input");
        i.className="inputKorisnikZaboravljenaSifraEmail";
        host.querySelector(".divKorisnikZaboravljenaSifraEmail").appendChild(i);


        l=document.createElement("div");
        l.className="divKorisnikZaboravljenaSifraDugme";
        host.appendChild(l);

        let btn = document.createElement("button");
        btn.innerHTML="Vrati sifru";
        btn.className="btnNadji";
        host.querySelector(".divKorisnikZaboravljenaSifraDugme").appendChild(btn);


        btn.onclick=(ev)=>{
            let validacija="";
            let jmbg1 = host.querySelector(".inputKorisnikZaboravljenaSifraJMBG").value;
            if(jmbg1===null || jmbg1===undefined || jmbg1==="" || jmbg1.length!=13){
                validacija+="Nevalidan JMBG\n";
            }
            let username1 = host.querySelector(".inputKorisnikZaboravljenaSifraUsername").value;
            if(username1===null || username1===undefined || username1===""){
                validacija+="Nevalidno korisnicko ime\n";
            }
            
            let ime1 = host.querySelector(".inputKorisnikZaboravljenaSifraIme").value;
            if(ime1===null || ime1===undefined || ime1===""){
                validacija+="Nevalidno ime\n";
            }
            let prezime1 = host.querySelector(".inputKorisnikZaboravljenaSifraPrezime").value;
            if(prezime1===null || prezime1===undefined || prezime1===""){
                validacija+="Nevalidno prezime\n";
            }
            let grad1 = host.querySelector(".inputKorisnikZaboravljenaSifraGrad").value;
            if(grad1===null || grad1===undefined || grad1===""){
                validacija+="Nevalidan grad\n";
            }
            let adresa1 = host.querySelector(".inputKorisnikZaboravljenaSifraAdresa").value;
            if(adresa1===null || adresa1===undefined || adresa1===""){
                validacija+="Nevalidna adresa\n";
            }
            let telefon1 = host.querySelector(".inputKorisnikZaboravljenaSifraTelefon").value;
            if(telefon1===null || telefon1===undefined || telefon1===""){
                validacija+="Nevalidan telefon\n";
            }
            let email1 = host.querySelector(".inputKorisnikZaboravljenaSifraEmail").value;
            if(email1===null || email1===undefined || email1===""){
                validacija+="Nevalidan email\n";
            }

            if(validacija!=""){
                alert(validacija);
            }
            else{
                fetch("https://localhost:5001/Korisnik/VratiSifru/"+jmbg1+"/"+username1+"/"+ime1+"/"+prezime1+"/"+grad1+"/"+adresa1+"/"+telefon1+"/"+email1,
                {
                    method:"GET"
                }).then(s=>{
                    if(s.ok){
                        s.json().then(data=>{
                            alert("Sifra datog korisnika je: " + data.sifra);
                            this.crtaj(this.kontejner);
                        })
                    }
                    else{
                        s.text().then(data=>{
                            alert(data);
                        })
                    }
                })
                    
            }
        }

    }
}