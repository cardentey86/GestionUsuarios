using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using GestionUsuariosAPI.Model;
using GestionUsuariosAPI.Models;

namespace GestionUsuariosAPI.Controllers
{
    [Produces("application/json")]
    [Route("api/VerificaUsuarios")]
    public class VerificaUsuariosController : Controller
    {
        private readonly DBContext _context;

        public VerificaUsuariosController(DBContext context)
        {
            _context = context;
        }

        // GET: api/VerificaUsuarios/Email/Clave
        [HttpGet("{email}/{clave}")]
        public async Task<VerificaUsuario> GetVerificaUsuario(string email, string clave)
        {
            string stExec = String.Format("Exec Verificalogin '{0}', '{1}'", email, clave);
            return await _context.VerificaUsuario.FromSql(stExec).FirstOrDefaultAsync();
        }        
    }
}