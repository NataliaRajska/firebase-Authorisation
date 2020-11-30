import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import {FirebaseService} from '../services/firebase.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  @Output() isLogOut = new EventEmitter<void>();

  constructor(public firebaseService: FirebaseService) { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  logOut() {
    this.firebaseService.logout();
    this.isLogOut.emit();
  }
}
