import { Component,OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, FormGroup, ReactiveFormsModule } from '@angular/forms';


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


  //Task Capturing
  TaskEntries:{project:string; hours:string; task:string}[]=[];
  NewEntry={project: '', hours:'', task:''};

  addEntry(){
    console.log('Before adding:', this.TaskEntries);
    this.TaskEntries.push({...this.NewEntry});
    console.log('After adding:', this.TaskEntries);
    this.NewEntry = {project:'', hours:'', task:''};
  }
  
  }
  
