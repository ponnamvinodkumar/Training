import { Injectable } from '@angular/core';


export interface TaskEntry{
  project: string;
  task: string;
  hours: number;
}

@Injectable({
  providedIn: 'root'
})
export class TaskServiceService {
  private tasks: { projectName: string; taskName: string; hours: number}[]=[];

  constructor(){}

  addTask(task: { projectName: string; taskName:string; hours: number}){
    this.tasks.push(task);
  }

  getTasks() {
    return this.tasks;
  }
}
