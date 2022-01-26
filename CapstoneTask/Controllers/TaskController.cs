using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using CapstoneTask.Models;

namespace CapstoneTask.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class TaskController
    {
        TaskDAL db = new TaskDAL();

        [HttpGet]
        public List<Task> GetTasks()
        {
            return db.GetAllTasks();
        }

        [HttpGet("get/{id}")]
        public Task GetTask(int id)
        {
            return db.GetTask(id);
        }

        [HttpPost("makeNew")]
        public void PostMovie(Task m)
        {
            db.InsertTask(m);
        }
    }
}
