import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-user-list-item',
  templateUrl: './user-list-item.component.html',
  styleUrls: ['./user-list-item.component.css']
})
export class UserListItemComponent implements OnInit {
  //Tar emot inputen user som en sträng från user-list//
  @Input()user: string;
  //Tar emot och sätter värde på inputen textColor från user-list//
  @Input()textColor:boolean;

  constructor() { }

  ngOnInit() {
  }

}
