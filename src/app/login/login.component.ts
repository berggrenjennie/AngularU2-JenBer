import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username:string ="";
  userStatus : string;


  constructor(private authService: AuthService) {

    }

  ngOnInit() {
    this.checkUser();
  }
    // Validering av inloggningsfältet, fler än nio bokstäver eller siffror och regex
    // som kollar att strängen innehåller minst en siffra.
    login():void {
        if (this.username.length > 9 && this.username.match(/[]?\d/)) {
          this.authService.login(this.username);
        } else {
          alert("The username should consist of at least ten digits and letters");
        }
    }
    // logout-funktion som visas om det finns ett namn i localstorage och man klickar på login
    logout():void {
      this.authService.logout()
      this.checkUser();
    }
    // om det finns en användare i localstorage
    checkUser(){
      this.userStatus = this.authService.checkIfLoggedIn();
    }

}
