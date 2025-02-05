import { Component,OnInit } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, FormGroup, ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { TaskServiceService } from '../ServiceTasks/task-service.service';


@Component({
  selector: 'app-tasks',
  imports: [RouterModule,CommonModule,ReactiveFormsModule, FormsModule],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
 
  isSidebarMinimized = true;
  
  toggleSidebar() {
       this.isSidebarMinimized = !this.isSidebarMinimized;
     }
  
      //AddTask
      projectName = '';
      taskName = '';
      duration!: number;
      tasks: { projectName: string; taskName: string; duration: number }[] = [];
    
      constructor(private taskService: TaskServiceService) {}
  
      addTask(){
       if(this.projectName && this.taskName && this.duration !=null){
         this.taskService.addTask({
           projectName:this.projectName,
           taskName: this.taskName,
           duration: this.duration
         });
         this.tasks = this.taskService.getTasks();
         this.restForm();
       }
       else {
         alert('All Fields are required.');
       }
      }
  
      restForm(){this.projectName='';
       this.taskName='';
       this.duration= NaN;
      }
 }