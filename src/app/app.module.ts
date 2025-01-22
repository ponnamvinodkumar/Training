import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { CommonModule } from '@angular/common'; // Import CommonModule for *ngIf

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
  ],
  imports: [
    BrowserModule,
    FormsModule, // Add FormsModule here
    CommonModule  // Add CommonModule here if needed
  ],
  providers: [],
  bootstrap: []
})
export class AppModule {}
