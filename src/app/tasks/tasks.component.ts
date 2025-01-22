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
     hours!: number;
     tasks: { projectName: string; taskName: string; hours: number }[] = [];
   
     constructor(private taskService: TaskServiceService) {}

     addTask(){
      if(this.projectName && this.taskName && this.hours !=null){
        this.taskService.addTask({
          projectName:this.projectName,
          taskName: this.taskName,
          hours: this.hours
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
      this.hours= NaN;
     }
}