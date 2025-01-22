import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';

import { LoginComponent } from './login/login.component';
import { TasksComponent } from './tasks/tasks.component';

import { TimeEntriesComponent } from './time-entries/time-entries.component';

import { TimesheetComponent } from './timesheets/timesheet.component';

export const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
    title: 'Login',
  },
  {
    path: 'Tasks',
    component: TasksComponent,
    title: 'Tasks',
  },
  {
    path:'Dashboard',
    component:DashboardComponent,
    title:'Dashboard',
  },  
  {
    path:'TimeEntries',
    component:TimeEntriesComponent,
    title:'TimeEntries',
  },
<<<<<<< HEAD
=======

>>>>>>> bdafb03cc45ebc42860a2a728519a0ce05ce3178
  {
    path: 'Timesheet',
    component: TimesheetComponent,
    title: 'Timesheet',
  }
];

