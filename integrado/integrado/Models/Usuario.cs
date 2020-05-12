using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace integrado.Models
{
    public class Usuario
    {
        public Usuario(int usuarioid, string usuariouser, string usuariocontrasenya, string usuarionombre)
        {
            Usuarioid = usuarioid;
            Usuariouser = usuariouser;
            Usuariocontrasenya = usuariocontrasenya;
            Usuarionombre = usuarionombre;
        }

        public int Usuarioid { get; set; }
        public string Usuariouser { get; set; }
        public string Usuariocontrasenya { get; set; }

        public string Usuarionombre { get; set; }
    }
    public class UsuarioDTO
        {
        public UsuarioDTO(string usuariouser,string usuarionombre)
        {
            Usuariouser = usuariouser;
            Usuarionombre = usuarionombre;
        }
        public string Usuariouser { get; set; }
        public string Usuarionombre { get; set; }
    }
}