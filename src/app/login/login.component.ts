import { Component } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  
})
export class LoginComponent {

  username: string = '';
  password: string = '';
  confirmPassword: string = '';
  errorMessage: string = '';
  isRegistering: boolean = false;  //flag, reg or login

  constructor(private authService: AuthService, private router: Router) { }

  register(): void {
    if(this.password !== this.confirmPassword) {
      this.errorMessage = 'Passwords do not match';
      return;
    }

    const success = this.authService.register(this.username, this.password);

    if(success) {
      alert('Registration successful');
      this.switchToLogin();
    }else{
      this.errorMessage = 'User already exists';
    }
  }

  login(): void {
    const success = this.authService.login(this.username, this.password);
    if(success) {
      this.authService.setCurrentUser(this.username);
      this.router.navigate(['/Dashboard']); 
    }else{
      this.errorMessage = 'Invalid credentials';
    }
  }

  switchToRegister(): void{
    this.isRegistering = true;
    this.errorMessage = '';   //reseting error message
  }

  switchToLogin(): void {
    this.isRegistering = false;
    this.errorMessage = '';
  }
}
