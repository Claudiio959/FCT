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
        internal Usuario Retrieve()
        {
            MySqlConnection con = Connect();
            MySqlCommand command = con.CreateCommand();
            command.CommandText= "select * from usuarios";
            try
            {
                con.Open();
                MySqlDataReader res = command.ExecuteReader();

                Usuario u = null;
                if (res.Read())
                {
                    Debug.WriteLine("Recuperando: " + res.GetInt32(0) + " " + res.GetString(1) + " " + res.GetString(2) + " " + res.GetString(3));
                    u = new Usuario(res.GetInt32(0), res.GetString(1), res.GetString(2), res.GetString(3));
                }
                con.Close();
                return u;
            }
            catch(MySqlException e)
            {
                Debug.WriteLine("No firulais");
                return null;
            }
            
        
        }
    }
}