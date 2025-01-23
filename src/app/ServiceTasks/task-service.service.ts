import { Injectable } from '@angular/core';


export interface TaskEntry{
  project: string;
  task: string;
  duration: number;
}

@Injectable({
  providedIn: 'root'
})
export class TaskServiceService {
  private tasks: { projectName: string; taskName: string; duration: number}[]=[];

  constructor(){}

  addTask(task: { projectName: string; taskName:string; duration: number}){
    this.tasks.push(task);
  }

  getTasks() {
    return this.tasks;
  }
}
