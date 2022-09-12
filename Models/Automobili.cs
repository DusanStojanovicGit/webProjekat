using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Models
{

    [Table("Automobil")]
    public class Automobil{

        [Key]
        public int ID { get; set; }

        [Required]
        public string brojSasije { get; set; }

        [Required]
        public string marka { get; set; }

        [Required]
        public string model { get; set; }

        [Required]
        [Range(1950, 2022)]
        public int godiste { get; set; }

        [Required]
        [Range(0,1000000)]
        public int kilometraza { get; set; }

        [Required]
        public string karoserija { get; set; }

        [Required]
        public string gorivo { get; set; }
        
        [Required]
        public int kubikaza { get; set; }

        [Required]
        public int snagaMotora { get; set; }
        
        [Required]
        public string slika { get; set; }

        public Korisnik vlasnikAutomobila { get; set; }

        public Pijaca pijacaLokacija { get; set; }

    

    

    }
}