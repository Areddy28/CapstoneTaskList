import { Component, OnInit } from '@angular/core';
import { Convert, Task } from '../Task';
import { TaskService } from '../task.service';


@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css'],
  providers: [TaskService]
})
export class TaskListComponent implements OnInit {

  currentTask?: Task;
  constructor(private TaskDAL : TaskService) { }

  ngOnInit() {
    //subscribe attaches an observable and waits for it to finish calling the api
    //when the service is done running, subscribe will react by running the method
    //we pass in it
    this.TaskDAL.GetTaskList().subscribe(
      (response: any) => {
        console.log(response);
        let json = Convert.TaskToJson(response); 
        this.currentTask = Convert.toTask(json); 
        console.log(this.currentTask); 
      }
    );
  }

}
