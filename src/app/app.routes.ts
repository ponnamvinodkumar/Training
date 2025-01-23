import { Routes ,RouterModule} from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { TasksComponent } from './tasks/tasks.component';
import { TimeEntriesComponent } from './time-entries/time-entries.component';
import { TimesheetComponent } from './timesheets/timesheet.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
  { path: '', redirectTo: '/Dashboard', pathMatch: 'full' },
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
  {
    path: 'Timesheet',
    component: TimesheetComponent,
    title: 'Timesheet',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: false, scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }