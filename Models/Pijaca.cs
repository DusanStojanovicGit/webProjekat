using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace Models{


    [Table("Pijaca")]
    public class Pijaca{

        [Key]
        public int ID { get; set; }

        [Required]
        public string naziv { get; set; }

        [Required]
        public string lokacija { get; set; }

        [Required]
        public string adresa { get; set; }

        [Required]
        public string telefon { get; set; }

        [JsonIgnore]
        public List<Oglas> sviOglasi { get; set; }

        [JsonIgnore]
        public List<Automobil> sviAutomobili { get; set; }
        
    }
}