using integrado.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;


namespace integrado.Controllers
{
    public class ElementoController : ApiController
    {
        public IEnumerable<ElementoDTO> Get()
        {
            var repo = new ElementoRepository();
            List<ElementoDTO> elementos = repo.RetrieveDTO();
            return elementos;
        }

        //GET: api/Elementos?nombre=nombre
        public IEnumerable<Elemento> GetElementos(string nombre)
        {
            var repo = new ElementoRepository();
            List<Elemento> elementos = repo.RetrievebyNombre(nombre);
            return elementos;
        }

        // GET: api/Elementos/5
        public Elemento Get(int id)
        {
            /*var repo = new UsuariosRepository();
            Usuario u = repo.Retrieve();*/
            return null;
        }

        // POST: api/Elementos
        public void Post([FromBody]Elemento elemento)
        {
            var repo = new ElementoRepository();
            repo.Save(elemento);
        }

        // PUT: api/Elementos/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/Elementos/5
        public void Delete(int id)
        {
        }
    }
}