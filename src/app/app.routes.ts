import { Routes } from '@angular/router';


import { LoginComponent } from './login/login.component';
import { TasksComponent } from './tasks/tasks.component';
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
    path: 'Timesheet',
    component: TimesheetComponent,
    title: 'Timesheet',
  },
];

