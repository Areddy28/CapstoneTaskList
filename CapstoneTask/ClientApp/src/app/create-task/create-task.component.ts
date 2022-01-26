import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css'],
  providers: [TaskService]
})
export class CreateTaskComponent implements OnInit {

  constructor(private taskService : TaskService ) { }

  ngOnInit() {
  }

//   CreateTask() {
//     let name: string = (<HTMLInputElement>document.getElementById("Title")).value; 
//     console.log(name); 
//     let description: string = (<HTMLInputElement>document.getElementById("Year")).value;  
//     console.log(description); 
//     let dateDue: Date = (<HTMLInputElement>document.getElementById("RunTime")).value;  
//     console.log(dateDue); 
//     let completed: string = (<HTMLInputElement>document.getElementById("Genre")).value;  
//     console.log(completed);  
    
//     let newTask: Task

}
