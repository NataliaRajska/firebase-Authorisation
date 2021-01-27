import { Component, OnInit } from '@angular/core';
import {take} from 'rxjs/operators';
import {AuthService} from '../services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  public userEmail: string;
  public userPassword: string;
  public userConfirmPassword: string;

  constructor(public authService: AuthService,
              private router: Router) { }

  ngOnInit(): void {
  }


  public onSignUp(): void {
    /*this.authService.singUpWithFirebase(email, password)
      .pipe(
        take(1)
      )
      .subscribe();*/
  }

  public goToRoute(): void {
    this.router.navigate(['registration']);
  }
}
