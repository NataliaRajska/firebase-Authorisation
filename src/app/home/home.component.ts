import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import {FirebaseService} from '../services/firebase.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  @Output() isLogOut = new EventEmitter<void>();

  constructor(public firebaseService: FirebaseService) { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  logOut() {
    this.firebaseService.logOut();
    this.isLogOut.emit();
  }
}
