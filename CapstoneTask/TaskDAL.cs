using CapstoneTask.Models;
using Dapper;
using MySqlConnector;
using System;
using System.Collections.Generic;
using System.Linq;


namespace CapstoneTask
{
    public class TaskDAL
    {
        public List<Task> GetAllTasks()
        {
            using (var connect = new MySqlConnection(Secret.Connection))
            {
                string sql = "select * from tasks";
                connect.Open();
                List<Task> output = connect.Query<Task>(sql).ToList();
                connect.Close();
                return output;
            }
        }

        public Task GetTask(int id)
        {
            using (var connect = new MySqlConnection(Secret.Connection))
            {
                string sql = $"select * from tasks where id = {id}";
                    connect.Open();
                    Task c = connect.Query<Task>(sql).ToList().First();
                    connect.Close();
                    return c;

            }
        }

        public void InsertTask(Task t)
        {
            string sql = $"insert into tasks values(0, '{t.Name}', '{t.Description}', '{t.DateDue.ToString("yyyy-MM-dd hh:mm:ss")}', {t.Completed})";

            using (var connect = new MySqlConnection(Secret.Connection))
            {

                connect.Open();
                connect.Query<Task>(sql);
                connect.Close();

            }
        }

        public void DeleteTask(int id)
        {
            string sql = $"delete from tasks where id={id}";
            using (var connect = new MySqlConnection(Secret.Connection))
            {

                connect.Open();
                connect.Query<Task>(sql);
                connect.Close();

            }
        }


    }
}
