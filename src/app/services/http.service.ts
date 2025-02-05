import { inject, Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  httpClient=inject(HttpClient);

  constructor() { }
  addTask(task:string){
    //add task to server
    return this.httpClient.post('http://localhost:3000/tasks',{
    title:task
  })
  }
  getAllTasks(){
    //get all tasks from server
    return this.httpClient.get('http://localhost:3000/tasks')
  }
}
