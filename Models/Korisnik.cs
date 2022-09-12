using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace Models{

    [Table("Korisnik")]
    public class Korisnik{

        [Key]
        public int ID { get; set; }

        [Required]
        [MaxLength(13)]
        [MinLength(13)]
        
        public string JMBG { get; set; }

        [Required]
        public string username { get; set; }

        [Required]
        public string sifra { get; set; }

        [Required]
        [MaxLength(30)]
        
        public string ime { get; set; }

        [Required]
        [MaxLength(30)]
        public string prezime { get; set; }

        [Required]
        [MaxLength(40)]
        public string grad { get; set; }

        [Required]
        
        public string adresa { get; set; }

        [Required]
        public string telefon { get; set; }

        [Required]
        public string email { get; set; }


        [JsonIgnore]
        public List<Oglas> svojiOglasi { get; set; }

        [Required]
        public string slika { get; set; }

        [JsonIgnore]
        public List<Automobil> svojiAutomobili { get; set; }

    }

}