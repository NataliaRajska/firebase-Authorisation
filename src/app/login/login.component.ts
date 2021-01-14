import {Component, OnDestroy, OnInit} from '@angular/core';
import {GoogleLoginProvider, SocialAuthService, SocialUser} from 'angularx-social-login';
import {FirebaseService} from '../services/firebase.service';
import {LoggedUserModel} from '../models/loggedUser.model';
import {Subscription} from 'rxjs';
import {take} from 'rxjs/operators';
import {Router} from '@angular/router';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})


export class LoginComponent implements OnInit, OnDestroy {
  public title = 'firebase-project';
  public userData: LoggedUserModel;
  public authStateSubscription: Subscription;
  loginData = new FormGroup({
    'login': new FormControl(''),
    'password': new FormControl('')
  });

  constructor(public firebaseService: FirebaseService,
              private authService: SocialAuthService,
              private router: Router) {
  }

  public goToRoute(): void {
    this.router.navigate(['registration']);
  }

  // todo unused code
  public ngOnInit(): void {
    this.authStateSubscription = this.authService.authState
      .subscribe((result: SocialUser) => {
        console.log(result);
        this.userData = new LoggedUserModel(result);
        console.log(this.userData);
      });
  }

  public ngOnDestroy(): void {
    if (this.authStateSubscription) {
      this.authStateSubscription.unsubscribe();
    }
  }


  public signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }

  public onSignIn(): void {
    this.firebaseService.signIn(this.loginData.get('login').value, this.loginData.get('password').value)
      .pipe(
        take(1)
      )
      .subscribe((result) => {
        this.userData = new LoggedUserModel(result);
        console.log(this.userData);
      });
  }

  // private/public
  public handleLogOut(): void {
    this.firebaseService.logOut();
  }
}
