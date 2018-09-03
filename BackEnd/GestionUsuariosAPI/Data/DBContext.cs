using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using GestionUsuariosAPI.Model;

namespace GestionUsuariosAPI.Models
{
    public class DBContext : DbContext
    {
        public DBContext (DbContextOptions<DBContext> options)
            : base(options)
        {
        }

        public DbSet<GestionUsuariosAPI.Model.Usuario> Usuario { get; set; }

        public DbSet<GestionUsuariosAPI.Model.VerificaUsuario> VerificaUsuario { get; set; }
    }
}
