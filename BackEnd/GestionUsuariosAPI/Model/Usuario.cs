﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace GestionUsuariosAPI.Model
{
    public class Usuario
    {
        [Key]
        public int id { get; set; }
        public string nombre { get; set; }
        public string email { get; set; }
        public string clave { get; set; }
    }
}
