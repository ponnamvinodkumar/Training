import { Component,OnInit } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, FormGroup, ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-timesheets',
  imports: [RouterModule,CommonModule,ReactiveFormsModule, FormsModule],
  templateUrl: './timesheet.component.html',
  styleUrl: './timesheet.component.css'
})
export class TimesheetComponent {

  constructor(private router: Router){}

    isSidebarMinimized = true;
  
    toggleSidebar() {
      this.isSidebarMinimized = !this.isSidebarMinimized;
    }


  //CapturingTimesheet 
  TimesheetEntries:{project:string; task:string; date:string; hours:string; isbillable:boolean}[]=[];
  NewTimeEntry={project: '', task: '', date: '', hours: '', isbillable: false};

  addTimeEntry(){
    console.log('Before adding:', this.TimesheetEntries);
    this.TimesheetEntries.push({...this.NewTimeEntry});
    console.log('After adding:', this.TimesheetEntries);
    this.NewTimeEntry = {project: '', task: '', date: '', hours: '', isbillable: false};
    // this.router.navigate(['/Dashboard']);
  }
  
  }
  