import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';

import { LoginComponent } from './login/login.component';
import { TasksComponent } from './tasks/tasks.component';


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
  }
];

