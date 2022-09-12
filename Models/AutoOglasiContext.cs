using Microsoft.EntityFrameworkCore;

namespace Models{

    public class AutoOglasiContext : DbContext{

        public DbSet<Automobil> Automobili { get; set; }

        public DbSet<Korisnik> Korisnici { get; set; }

        public DbSet<Oglas> Oglasi { get; set; }   

        public DbSet<Pijaca> Pijace { get; set; }

        public AutoOglasiContext (DbContextOptions options) : base(options){

        }

        }


        
    }
