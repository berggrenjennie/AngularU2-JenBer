import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-single-user',
  templateUrl: './single-user.component.html',
  styleUrls: ['./single-user.component.css']
})
export class SingleUserComponent implements OnInit {
  user:string;

// skriver ut vilken användare som man klickat på
  constructor(private route: ActivatedRoute) {
  this.route.params.subscribe(params=> {
    this.user = params.user;
  })
}

  ngOnInit() {
  }

}
