import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Task } from '../Task';
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

  CreateTask() {
    let name: string = (<HTMLInputElement>document.getElementById("Name")).value; 
    console.log(name); 
    let description: string = (<HTMLInputElement>document.getElementById("Description")).value;  
    console.log(description); 
    let dateDue: Date =  (<HTMLInputElement>document.getElementById("DateDue")).valueAsDate;  
    console.log(dateDue); 
    let completed: boolean = Boolean.call(<HTMLInputElement>document.getElementById("Completed")).value;  
    console.log(completed);  
    
     let newTask: Task = {
       id: 0, name: name, description: description, dateDue: dateDue,
       completed: true
     };
     this.taskService.CreateTask(newTask).subscribe(
      (response: any ) => { location.reload() }
    ); 
}
  
}
