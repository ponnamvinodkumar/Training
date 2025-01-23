import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule, RouterModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
  animations:[
    trigger('fadeIn',[
      transition (':enter',[
        style({ opacity: 0}),
        animate('300ms ease-in', style({opacity:1}))
      ])
    ])
  ]
})
export class DashboardComponent {

  isSidebarMinimized = true;

  toggleSidebar(){
    this.isSidebarMinimized =!this.isSidebarMinimized;
  }
}
