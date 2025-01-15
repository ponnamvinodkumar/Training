import { Routes } from '@angular/router';
export const routes: Routes = [];

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
];

