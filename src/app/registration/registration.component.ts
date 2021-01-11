import { Component, OnInit } from '@angular/core';
import {take} from "rxjs/operators";
import {FirebaseService} from "../services/firebase.service";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  constructor(public firebaseService: FirebaseService) { }

  ngOnInit(): void {
  }


  public onSignUp(email: string, password: string): void {
    this.firebaseService.singUp(email, password)
      .pipe(
        take(1)
      )
      .subscribe();
  }
}
