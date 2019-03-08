import { Component, OnInit } from '@angular/core';
import { AuthService} from '../auth.service';
import { ActivatedRoute, Route } from '@angular/router';

@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.css']
})
export class DashBoardComponent implements OnInit {
  // Definerar datatyp och värde av userList, userNamn och userStatus
  userList : string[]=['Jennie', 'Eva'];
  userNamn : string;
  userStatus : string;
  // Userstatus sätts till värdet som finns i authService(localstorage)
  constructor(private authService:AuthService) {
  this.userStatus = this.authService.checkIfLoggedIn();
  }

  ngOnInit() {
  }
    //UserNamn hämtas från inputfält och läggs till i arrayen userList
  addUserName(event):void{
    this.userNamn = event;
    this.userList.push(this.userNamn);
  }
  //funktionen tar bort sista namnet i userList när man klickar på knappen Remove
  removeUserName(event):void {
  this.userList.pop();
  }
}
