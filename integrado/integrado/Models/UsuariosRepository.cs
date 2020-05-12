using MySql.Data.MySqlClient;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Web;

namespace integrado.Models
{
    public class UsuariosRepository
    {
        private MySqlConnection Connect()
        {
            string connString = "Server=localhost;Port=3306;Database=integrado;Uid=root;password=;Sslmode=none";
            MySqlConnection con = new MySqlConnection(connString);
            return con;
        }
        internal List<Usuario> Retrieve()
        {
            MySqlConnection con = Connect();
            MySqlCommand command = con.CreateCommand();
            command.CommandText= "select * from usuarios";
            try
            {
                con.Open();
                MySqlDataReader res = command.ExecuteReader();

                Usuario u = null;
                List<Usuario> usuarios = new List<Usuario>();
                while (res.Read())
                {
                    Debug.WriteLine("Recuperando: " + res.GetInt32(0) + " " + res.GetString(1) + " " + res.GetString(2) + " " + res.GetString(3));
                    u = new Usuario(res.GetInt32(0), res.GetString(1), res.GetString(2), res.GetString(3));
                    usuarios.Add(u);
                }
                con.Close();
                return usuarios;    
            }
            catch(MySqlException e)
            {
                Debug.WriteLine("No firulais");
                return null;
            }
            
        
        }
        internal List<UsuarioDTO> RetrieveDTO()
        {
            MySqlConnection con = Connect();
            MySqlCommand command = con.CreateCommand();
            command.CommandText = "select * from usuarios";
            try
            {
                con.Open();
                MySqlDataReader res = command.ExecuteReader();

                UsuarioDTO u = null;
                List<UsuarioDTO> usuarios = new List<UsuarioDTO>();
                while (res.Read())
                {
                    Debug.WriteLine("Recuperando: " + res.GetInt32(0) + " " + res.GetString(1) + " " + res.GetString(2) + " " + res.GetString(3));
                    u = new UsuarioDTO( res.GetString(1), res.GetString(3));
                    usuarios.Add(u);
                }
                con.Close();
                return usuarios;
            }
            catch (MySqlException e)
            {
                Debug.WriteLine("No firulais");
                return null;
            }

        }
        internal List<Usuario> RetrievebyNombre(string nombre)
        {
            MySqlConnection con = Connect();
            MySqlCommand command = con.CreateCommand();
            command.CommandText = "Select * from usuarios where nombre = @A";
            command.Parameters.AddWithValue("@A", nombre);
            Debug.WriteLine("comando" + command.CommandText);
            try
            {
                con.Open();
                MySqlDataReader res = command.ExecuteReader();

                Usuario u = null;
                List<Usuario> usuarios = new List<Usuario>();
                while (res.Read())
                {
                    Debug.WriteLine("Recuperando: " + res.GetInt32(0) + " " + res.GetString(1) + " " + res.GetString(2) + " " + res.GetString(3));
                    u = new Usuario(res.GetInt32(0), res.GetString(1), res.GetString(2), res.GetString(3));
                    usuarios.Add(u);
                }
                con.Close();
                return usuarios;
            }
            catch (MySqlException e)
            {
                Debug.WriteLine("No firulais");
                return null;
            }
        }
        internal void Save(Usuario u)
        {
            MySqlConnection con = Connect();
            MySqlCommand command = con.CreateCommand();
            command.CommandText = "insert into usuarios (userName,contrasenya,nombre) values ('" + u.Usuariouser + "','" + u.Usuariocontrasenya + "','" + u.Usuarionombre + "');";
            Debug.WriteLine("comando" + command.CommandText);
            try
            {
                con.Open();
                command.ExecuteNonQuery();
                con.Close();
            }
            catch (MySqlException e)
            {
                Debug.WriteLine("No firulais");
            }
        }
    }
}