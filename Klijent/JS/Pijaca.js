export class Pijaca{

    constructor(naziv, lokacija, adresa, telefon){
        this.naziv=naziv;
        this.lokacija=lokacija;
        this.adresa=adresa;
        this.telefon=telefon;
    }

    crtajPijacu(host){

        let divProvera = document.createElement("divZaProveruPijace");
        divProvera=host.querySelector(".divNovaPijaca");

        if(divProvera==null){

            let d = document.createElement("div");
            d.className="divNovaPijaca";
            host.appendChild(d);


            d.innerHTML="";


            d=document.createElement("div");
            d.className="divNovaPijacaNaziv";
            host.querySelector(".divNovaPijaca").appendChild(d);

            let l = document.createElement("label");
            l.innerHTML="Naziv";
            host.querySelector(".divNovaPijacaNaziv").appendChild(l);

            l=document.createElement("label");
            l.innerHTML=this.naziv;
            host.querySelector(".divNovaPijacaNaziv").appendChild(l);







            d=document.createElement("div");
            d.className="divNovaPijacaLokacija";
            host.querySelector(".divNovaPijaca").appendChild(d);

            l = document.createElement("label");
            l.innerHTML="Grad";
            host.querySelector(".divNovaPijacaLokacija").appendChild(l);

            l=document.createElement("label");
            l.innerHTML=this.lokacija;
            host.querySelector(".divNovaPijacaLokacija").appendChild(l);



            d=document.createElement("div");
            d.className="divNovaPijacaAdresa";
            host.querySelector(".divNovaPijaca").appendChild(d);

            l = document.createElement("label");
            l.innerHTML="Adresa";
            host.querySelector(".divNovaPijacaAdresa").appendChild(l);

            l=document.createElement("label");
            l.innerHTML=this.adresa;
            host.querySelector(".divNovaPijacaAdresa").appendChild(l);








            d=document.createElement("div");
            d.className="divNovaPijacaTelefon";
            host.querySelector(".divNovaPijaca").appendChild(d);

            l = document.createElement("label");
            l.innerHTML="Telefon";
            host.querySelector(".divNovaPijacaTelefon").appendChild(l);

            l=document.createElement("label");
            l.innerHTML=this.telefon;
            host.querySelector(".divNovaPijacaTelefon").appendChild(l);


        }
    }


    crtajPijace(host, index){
        if(index==0){
            host.innerHTML="";
        }

        let d = document.createElement("div");
        d.className="divNovaPijaca"+index;
        host.appendChild(d);


        d.innerHTML="";


        d=document.createElement("div");
        d.className="divNovaPijacaNaziv"+index;
        host.querySelector(".divNovaPijaca"+index).appendChild(d);

        let l = document.createElement("label");
        l.innerHTML="Naziv";
        host.querySelector(".divNovaPijacaNaziv"+index).appendChild(l);

        l=document.createElement("label");
        l.innerHTML=this.naziv;
        host.querySelector(".divNovaPijacaNaziv"+index).appendChild(l);







        d=document.createElement("div");
        d.className="divNovaPijacaLokacija"+index;
        host.querySelector(".divNovaPijaca"+index).appendChild(d);

        l = document.createElement("label");
        l.innerHTML="Grad";
        host.querySelector(".divNovaPijacaLokacija"+index).appendChild(l);

        l=document.createElement("label");
        l.innerHTML=this.lokacija;
        host.querySelector(".divNovaPijacaLokacija"+index).appendChild(l);



        d=document.createElement("div");
        d.className="divNovaPijacaAdresa"+index;
        host.querySelector(".divNovaPijaca"+index).appendChild(d);

        l = document.createElement("label");
        l.innerHTML="Adresa";
        host.querySelector(".divNovaPijacaAdresa"+index).appendChild(l);

        l=document.createElement("label");
        l.innerHTML=this.adresa;
        host.querySelector(".divNovaPijacaAdresa"+index).appendChild(l);








        d=document.createElement("div");
        d.className="divNovaPijacaTelefon"+index;
        host.querySelector(".divNovaPijaca"+index).appendChild(d);

        l = document.createElement("label");
        l.innerHTML="Telefon";
        host.querySelector(".divNovaPijacaTelefon"+index).appendChild(l);

        l=document.createElement("label");
        l.innerHTML=this.telefon;
        host.querySelector(".divNovaPijacaTelefon"+index).appendChild(l);
    }
}