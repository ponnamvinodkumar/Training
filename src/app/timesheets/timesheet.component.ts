import { Component,OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, FormGroup, ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-timesheets',
  imports: [RouterModule,CommonModule,ReactiveFormsModule, FormsModule],
  templateUrl: './timesheet.component.html',
  styleUrl: './timesheet.component.css'
})
export class TimesheetComponent {
 
    isSidebarMinimized = true;
  
    toggleSidebar() {
      this.isSidebarMinimized = !this.isSidebarMinimized;
    }


  //Timesheet Capturing
  TaskEntries:{project:string; task:string; date:string; hours:string; billable:boolean}[]=[];
  NewEntry={project: '', task: '', date: '', hours: '', billable: false};

  addEntry(){
    console.log('Before adding:', this.TaskEntries);
    this.TaskEntries.push({...this.NewEntry});
    console.log('After adding:', this.TaskEntries);
    this.NewEntry = {project: '', task: '', date: '', hours: '', billable: false};
  }
  
  }
  