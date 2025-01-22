import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export interface TaskEntry{
  project: string;
  task: string;
  hours: number;
}

@Injectable({
  providedIn: 'root'
})
export class TaskServiceService {
  addData(newItem: string) {
    throw new Error('Method not implemented.');
  }

  private TaskItem: string [] = [];

  constructor() { }
  addItem(item:string):void{
    this.TaskItem.push(item);
  }

  getData(): string []{
    return this.TaskItem;
  }
 

}
