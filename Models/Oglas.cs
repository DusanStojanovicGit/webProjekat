using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Models{


    [Table("Oglas")]
    public class Oglas{


        [Key]
        public int ID { get; set; }

        [Required]
        public string sifraOglasa { get; set; }

        [Required]
        public int cena { get; set; }
        
        [Required]
        public string datumPostavljanja { get; set; }

        [Required]
        public virtual Automobil automobil { get; set; }

        [Required]
        public Pijaca pijaca { get; set; }

        [Required]
        public Korisnik vlasnikOglasa { get; set; }

        [ForeignKey("automobilFK")]
        public int automobilFK { get; set; }

    }
}