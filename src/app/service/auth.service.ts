import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  register(username: string, password: string): boolean {
    const existingUser = localStorage.getItem(username);
    if(existingUser) {
      return false;    //user exist
    }

    localStorage.setItem(username, password);   //save new user locally
    return true;
  }

  login(username: string, password: string): boolean {
    const storedPassword = localStorage.getItem(username);
    return storedPassword === password;
  }

  isLoggedIn(): boolean {
    return localStorage.getItem('currentUser') !== null;
  }

  setCurrentUser(username: string): void {
    localStorage.setItem('currentUser', username);
  }
  
  logout(): void {
    localStorage.removeItem('currentUser');
  }
}
