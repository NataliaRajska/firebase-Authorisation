import {Component, OnDestroy} from '@angular/core';
import {FirebaseService} from './services/firebase.service';
import {OnInit} from '@angular/core';
import {take} from 'rxjs/operators';
import {GoogleLoginProvider, SocialAuthService, SocialUser} from 'angularx-social-login';
import {Subscription} from 'rxjs';
import {AuthMethodEnum, LoggedUserModel} from './models/loggedUser.model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(
    private router: Router) {
  }

  public goToRoute(): void {
    this.router.navigate(['registration']);
  }
}



