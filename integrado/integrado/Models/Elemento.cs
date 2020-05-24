using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace integrado.Models
{
    public class Elemento
    {
        public Elemento(int elementoid,string elementonombre, string elementodescripcion)
        {
            Elementoid = elementoid;
            Elementonombre = elementonombre;
            Elementodescripcion = elementodescripcion;
        }

        public int Elementoid { get; set; }
        public string Elementonombre { get; set; }
        public string Elementodescripcion { get; set; }

    }

    public class ElementoDTO
    {
        public ElementoDTO(string elementonombre, string elementodescripcion)
        {
            Elementonombre = elementonombre;
            Elementodescripcion = elementodescripcion;
        }
        public string Elementonombre { get; set; }
        public string Elementodescripcion { get; set; }
    }
}