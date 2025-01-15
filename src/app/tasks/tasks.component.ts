import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-tasks',
  imports: [RouterModule,CommonModule],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
 
    isSidebarMinimized = true;
  
    toggleSidebar() {
      this.isSidebarMinimized = !this.isSidebarMinimized;
    }
  }
  
