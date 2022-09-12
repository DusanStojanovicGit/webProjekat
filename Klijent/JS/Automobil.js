import { Korisnik } from "./Korisnik.js";
import { Pijaca } from "./Pijaca.js"

export class Automobil{
    
    constructor(brojSasije, marka, model, godiste, kilometraza, karoserija, gorivo, kubikaza, snagaMotora, usernameVlasnika, Pijaca){

        this.brojSasije=brojSasije;
        this.marka=marka;
        this.model=model;
        this.godiste=godiste;
        this.kilometraza=kilometraza;
        this.karoserija=karoserija;
        this.gorivo=gorivo;
        this.kubikaza=kubikaza;
        this.snagaMotora=snagaMotora;
        this.usernameVlasnika=usernameVlasnika;
        this.Pijaca=Pijaca;

    }

    crtajAutomobil(host){


        let divProvera = document.createElement("div");
        divProvera=host.querySelector(".divNoviAutomobil");z
        if(divProvera==null){

            

            let d = document.createElement("div");
            d.className="divNoviAutomobil";
            host.appendChild(d);


            d.innerHTML="";





            d=document.createElement("div");
            d.className="divNoviAutomobilBrojSasije";
            host.querySelector(".divNoviAutomobil").appendChild(d);

            let l = document.createElement("label")
            l.innerHTML="Broj sasije";
            host.querySelector(".divNoviAutomobilBrojSasije").appendChild(l);


            l = document.createElement("label");
            l.innerHTML=this.brojSasije;
            host.querySelector(".divNoviAutomobilBrojSasije").appendChild(l);



            





            d = document.createElement("div");
            d.className="divNoviAutomobilMarkaModel";
            host.querySelector(".divNoviAutomobil").appendChild(d);

            d=document.createElement("div");
            d.className="divNoviAutomobilMarka";
            host.querySelector(".divNoviAutomobilMarkaModel").appendChild(d);

            d=document.createElement("div");
            d.className="divNoviAutomobilModel";
            host.querySelector(".divNoviAutomobilMarkaModel").appendChild(d);



            
            l = document.createElement("label");
            l.innerHTML="Marka";
            host.querySelector(".divNoviAutomobilMarka").appendChild(l);

            l=document.createElement("label");
            l.innerHTML=this.marka;
            host.querySelector(".divNoviAutomobilMarka").appendChild(l);



            l = document.createElement("label");
            l.innerHTML="Model";
            host.querySelector(".divNoviAutomobilModel").appendChild(l);

            l=document.createElement("label");
            l.innerHTML=this.model;
            host.querySelector(".divNoviAutomobilModel").appendChild(l);












            d = document.createElement("div");
            d.className="divNoviAutomobilGodisteKilometraza";
            host.querySelector(".divNoviAutomobil").appendChild(d);

            d=document.createElement("div");
            d.className="divNoviAutomobilGodiste";
            host.querySelector(".divNoviAutomobilGodisteKilometraza").appendChild(d);

            d=document.createElement("div");
            d.className="divNoviAutomobilKilometraza";
            host.querySelector(".divNoviAutomobilGodisteKilometraza").appendChild(d);



            
            l = document.createElement("label");
            l.innerHTML="Godiste";
            host.querySelector(".divNoviAutomobilGodiste").appendChild(l);

            l=document.createElement("label");
            l.innerHTML=this.godiste;
            host.querySelector(".divNoviAutomobilGodiste").appendChild(l);



            l = document.createElement("label");
            l.innerHTML="Kilometraza";
            host.querySelector(".divNoviAutomobilKilometraza").appendChild(l);

            l=document.createElement("label");
            l.innerHTML=this.kilometraza+" km";
            host.querySelector(".divNoviAutomobilKilometraza").appendChild(l);












            d = document.createElement("div");
            d.className="divNoviAutomobilKaroserijaGorivo";
            host.querySelector(".divNoviAutomobil").appendChild(d);

            d=document.createElement("div");
            d.className="divNoviAutomobilKaroserija";
            host.querySelector(".divNoviAutomobilKaroserijaGorivo").appendChild(d);

            d=document.createElement("div");
            d.className="divNoviAutomobilGorivo";
            host.querySelector(".divNoviAutomobilKaroserijaGorivo").appendChild(d);



            
            l = document.createElement("label");
            l.innerHTML="Karoserija";
            host.querySelector(".divNoviAutomobilKaroserija").appendChild(l);

            l=document.createElement("label");
            l.innerHTML=this.karoserija;
            host.querySelector(".divNoviAutomobilKaroserija").appendChild(l);



            l = document.createElement("label");
            l.innerHTML="Gorivo";
            host.querySelector(".divNoviAutomobilGorivo").appendChild(l);

            l=document.createElement("label");
            l.innerHTML=this.gorivo;
            host.querySelector(".divNoviAutomobilGorivo").appendChild(l);










            d = document.createElement("div");
            d.className="divNoviAutomobilKubikazaSnaga";
            host.querySelector(".divNoviAutomobil").appendChild(d);

            d=document.createElement("div");
            d.className="divNoviAutomobilKubikaza";
            host.querySelector(".divNoviAutomobilKubikazaSnaga").appendChild(d);

            d=document.createElement("div");
            d.className="divNoviAutomobilSnaga";
            host.querySelector(".divNoviAutomobilKubikazaSnaga").appendChild(d);



            
            l = document.createElement("label");
            l.innerHTML="Kubikaza";
            host.querySelector(".divNoviAutomobilKubikaza").appendChild(l);

            l=document.createElement("label");
            l.innerHTML=this.kubikaza+" cm"+"3".sup();
            host.querySelector(".divNoviAutomobilKubikaza").appendChild(l);



            l = document.createElement("label");
            l.innerHTML="Snaga";
            host.querySelector(".divNoviAutomobilSnaga").appendChild(l);

            l=document.createElement("label");
            l.innerHTML=this.snagaMotora+" ks";
            host.querySelector(".divNoviAutomobilSnaga").appendChild(l);









            d = document.createElement("div");
            d.className="divNoviAutomobilJMBGVlasnikaPijaca";
            host.querySelector(".divNoviAutomobil").appendChild(d);

            d=document.createElement("div");
            d.className="divNoviAutomobilJMBGVlasnika";
            host.querySelector(".divNoviAutomobilJMBGVlasnikaPijaca").appendChild(d);

            d=document.createElement("div");
            d.className="divNoviAutomobilPijaca";
            host.querySelector(".divNoviAutomobilJMBGVlasnikaPijaca").appendChild(d);



            
            l = document.createElement("label");
            l.innerHTML="Korisnicko ime";
            host.querySelector(".divNoviAutomobilJMBGVlasnika").appendChild(l);

            let lblVlasnik=document.createElement("label");
            lblVlasnik.innerHTML=this.usernameVlasnika;
            lblVlasnik.className="lblVlasnikPijaca";
            host.querySelector(".divNoviAutomobilJMBGVlasnika").appendChild(lblVlasnik);



            l = document.createElement("label");
            l.innerHTML="Pijaca";
            host.querySelector(".divNoviAutomobilPijaca").appendChild(l);

            let lblPijaca=document.createElement("label");
            lblPijaca.innerHTML=this.Pijaca;
            lblPijaca.className="lblVlasnikPijaca";
            host.querySelector(".divNoviAutomobilPijaca").appendChild(lblPijaca);


            lblVlasnik.onclick=(ev)=>{

                let username1 = lblVlasnik.innerHTML;
                fetch("https://localhost:5001/Korisnik/NadjiKorisnikaBezSifre/"+username1,
                {
                    method:"GET"
                }).then(s=>{
                    if(s.ok){
                        // console.log(s.text());
                        s.json().then(data=>{
                            const noviKorisnik = new Korisnik(data.jmbg, data.username, data.ime, data.prezime, data.grad, data.adresa, data.telefon, data.email, data.slika);
                            noviKorisnik.crtajKorisnika(host);
                        })
                    }
                    else{
                        s.text().then(data=>{
                            alert(data);
                        })
                    }
                });
            }

            lblPijaca.onclick=(ev)=>{
                let nazivPijace = lblPijaca.innerHTML;
                fetch("https://localhost:5001/Pijaca/PreuzmiPijacu/"+nazivPijace,
                {
                    method:"GET"
                }).then(s=>{
                    if(s.ok){
                        s.json().then(data=>{
                            const novaPijaca = new Pijaca(data.naziv, data.lokacija, data.adresa, data.telefon);
                            novaPijaca.crtajPijacu(host);
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