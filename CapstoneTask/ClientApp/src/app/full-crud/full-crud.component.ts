import { Component, OnInit } from '@angular/core';
import { Task } from '../Task';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-full-crud',
  templateUrl: './full-crud.component.html',
  styleUrls: ['./full-crud.component.css'],
  providers: [TaskService]
})
export class FullCrudComponent implements OnInit {

  tasks?:Task[] = [];
  constructor(private taskService : TaskService ) { 
    this.taskService.GetTaskList().subscribe(

      //The response represents the result of the HTTP call
      (response:any) => {this.tasks = response }
    )
  }

  ngOnInit() {
  }

  DeleteEntry(id: number, index: number) {
    this.taskService.DeleteTask(id).subscribe(
      (response: any) => {
        console.log(id + " was deleted successfully from our database"); 
        //Splice goes to an index in an array, and removes the number of elements set in the second parameter 
        //Then it will return the smaller array so we set it to the original array variable
        //array variable, so that we can see the deletion on our front-end
        this.tasks.splice(index, 4); 
      }
    ); 
  }


}
