import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from './Task';


@Injectable({
  providedIn: 'root'
})
export class TaskService {
  url:string ="Task"; 
  constructor(private http:HttpClient, @Inject('BASE_URL') baseUrl: string) {
    this.url = baseUrl + this.url; 
   }

  GetTaskList() : Observable<any> {
    return this.http.get(this.url); 
  }

  GetTask(id :number) : Observable<object> {
    return this.http.get(this.url + "/get/" + id); 
  }
  
}
