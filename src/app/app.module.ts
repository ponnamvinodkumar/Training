import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { CommonModule } from '@angular/common'; // Import CommonModule for *ngIf

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
     // Declare the LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, // Add FormsModule here
    CommonModule,
    RouterModule  // Add CommonModule here if needed
  ],
  providers: [],
  bootstrap: []
})
export class AppModule {}
