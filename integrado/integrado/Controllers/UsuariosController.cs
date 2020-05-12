using integrado.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace integrado.Controllers
{
    public class UsuariosController : ApiController
    {
        // GET: api/Usuarios
        public IEnumerable<UsuarioDTO> Get()
        {
            var repo = new UsuariosRepository();
           List<UsuarioDTO> usuarios = repo.RetrieveDTO();
            return usuarios;
        }

        //GET: api/Usuarios?nombre=nombre
        public IEnumerable<Usuario> GetUsuarios(string nombre)
        {
            var repo = new UsuariosRepository();
            List<Usuario> usuarios = repo.RetrievebyNombre(nombre);
            return usuarios;
        }

        // GET: api/Usuarios/5
        public Usuario Get(int id)
        {
            /*var repo = new UsuariosRepository();
            Usuario u = repo.Retrieve();*/
            return null;
        }

        // POST: api/Usuarios
        public void Post([FromBody]Usuario usuario)
        {
            var repo = new UsuariosRepository();
            repo.Save(usuario);
        }

        // PUT: api/Usuarios/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/Usuarios/5
        public void Delete(int id)
        {
        }
    }
}
