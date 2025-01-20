import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms'; // Import FormsModule

@NgModule({
  declarations: [
  ],
  imports: [
    BrowserModule,
    FormsModule,AppComponent // Add FormsModule here
  ],
  providers: [],

})
export class AppModule {}
