using MySql.Data.MySqlClient;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Web;

namespace integrado.Models
{
    public class ElementoRepository
    {
        private MySqlConnection Connect()
        {
            string connString = "Server=localhost;Port=3306;Database=integrado;Uid=root;password=;Sslmode=none";
            MySqlConnection con = new MySqlConnection(connString);
            return con;
        }
        internal List<Elemento> Retrieve()
        {
            MySqlConnection con = Connect();
            MySqlCommand command = con.CreateCommand();
            command.CommandText = "select * from elementos";
            try
            {
                con.Open();
                MySqlDataReader res = command.ExecuteReader();

                Elemento e = null;
                List<Elemento> elementos = new List<Elemento>();
                while (res.Read())
                {
                    Debug.WriteLine("Recuperando: " + res.GetInt32(0) + " " + res.GetString(1) + " " + res.GetString(2));
                    e = new Elemento(res.GetInt32(0), res.GetString(1), res.GetString(2));
                    elementos.Add(e);
                }
                con.Close();
                return elementos;
            }
            catch (MySqlException e)
            {
                Debug.WriteLine("No firulais");
                return null;
            }


        }
        internal List<ElementoDTO> RetrieveDTO()
        {
            MySqlConnection con = Connect();
            MySqlCommand command = con.CreateCommand();
            command.CommandText = "select * from elementos";
            try
            {
                con.Open();
                MySqlDataReader res = command.ExecuteReader();

                ElementoDTO e = null;
                List<ElementoDTO> elementos = new List<ElementoDTO>();
                while (res.Read())
                {
                    Debug.WriteLine("Recuperando: " + res.GetInt32(0) + " " + res.GetString(1) + " " + res.GetString(2));
                    e = new ElementoDTO(res.GetString(1), res.GetString(2));
                    elementos.Add(e);
                }
                con.Close();
                return elementos;
            }
            catch (MySqlException e)
            {
                Debug.WriteLine("No firulais");
                return null;
            }

        }
        internal List<Elemento> RetrievebyNombre(string nombre)
        {
            MySqlConnection con = Connect();
            MySqlCommand command = con.CreateCommand();
            command.CommandText = "Select * from elementos where nombre = @A";
            command.Parameters.AddWithValue("@A", nombre);
            Debug.WriteLine("comando" + command.CommandText);
            try
            {
                con.Open();
                MySqlDataReader res = command.ExecuteReader();

                Elemento e = null;
                List<Elemento> elementos = new List<Elemento>();
                while (res.Read())
                {
                    Debug.WriteLine("Recuperando: " + res.GetInt32(0) + " " + res.GetString(1) + " " + res.GetString(2));
                    e = new Elemento(res.GetInt32(0), res.GetString(1), res.GetString(2));
                    elementos.Add(e);
                }
                con.Close();
                return elementos;
            }
            catch (MySqlException e)
            {
                Debug.WriteLine("No firulais");
                return null;
            }
        }
        internal void Save(Elemento e)
        {
            MySqlConnection con = Connect();
            MySqlCommand command = con.CreateCommand();
            command.CommandText = "insert into elementos (nombre,descripcion) values ('" + e.Elementonombre + "','" + e.Elementodescripcion+ "');";
            Debug.WriteLine("comando" + command.CommandText);
            try
            {
                con.Open();
                command.ExecuteNonQuery();
                con.Close();
            }
            catch (MySqlException a)
            {
                Debug.WriteLine("No firulais");
            }
        }
    }
}