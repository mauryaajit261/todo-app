import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { inject } from '@angular/core'; //inject http service
import { HttpService } from '../../../services/http.service'; //import http service
import { TaskListComponent } from '../../task-list/task-list.component';
import { DatePipe } from '@angular/common';
import { EventEmitter } from '@angular/core';
import { Output } from '@angular/core';

@Component({
  selector: 'app-all-task',
  imports: [FormsModule,TaskListComponent,DatePipe], //import task list component
  templateUrl: './all-task.component.html',
  styleUrl: './all-task.component.scss'
})
export class AllTaskComponent {
  newTask="";
  taskList:any[]=[];
  httpService= inject(HttpService); //inject http service
  datenow=new Date();
  list: any =[];
  ngOnInit(){
    this.getAllTasks();
  }
  addTask(){
    console.log("addTask",this.newTask); //add task to the list
    this.httpService.addTask(this.newTask).subscribe(()=>{
      this.newTask="";
      this.getAllTasks();
    })
    }
    getAllTasks(){
      this.httpService.getAllTasks().subscribe((result:any)=>{
        this.taskList=result;
      })
    }
    oncomplete(task:any){
      console.log("complete",task);
    }
    onimportant(task:any){
      console.log("important",task);
    }

    test(){
      console.log(this.newTask)
      this.list.push(this.newTask)
      this.newTask=""
      console.log(this.list)
    }
  
  }

//import { EventEmitter } from '@angular/core';
