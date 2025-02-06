import { Component, output } from '@angular/core';
import { Input } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Output } from '@angular/core';


@Component({
  selector: 'app-child',
  template: ` <button (click)="sendData()">Click Me</button>`
})
export class ChildComponent {
  @Output() dataEmitter = new EventEmitter<string>();

  sendData() {
    const data = 'Hello from Child!';
    this.dataEmitter.emit(data);
  }
}

@Component({
  selector: 'app-task-list',
  imports: [],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.scss'
})

export class TaskListComponent {
@Input() taskList:any[]=[];

}