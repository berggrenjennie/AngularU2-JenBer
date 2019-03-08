import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  loggedUser:string;

  constructor() {

  }

  // Användaren hämtas om det finns någon inloggad i localStorage
  checkIfLoggedIn(){
    return localStorage.getItem('user');
  }

  // Loginfunktionen hämtar användaren från localStorage sätter user som värde på loggeduser
  public login(user){
    localStorage.setItem('user', user);
    this.loggedUser = user;
  }
  // Funktionen rensar localStorage och sätter loggedUsers värde till undefined
  public logout(){
    localStorage.clear();
    this.loggedUser = undefined;
  }
}
