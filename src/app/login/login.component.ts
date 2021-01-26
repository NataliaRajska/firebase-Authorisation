import {Component, OnDestroy, OnInit} from '@angular/core';
import {GoogleLoginProvider, SocialAuthService, SocialUser} from 'angularx-social-login';
import {FirebaseService} from '../services/firebase.service';
import {LoggedUserModel} from '../models/loggedUser.model';
import {Subscription} from 'rxjs';
import {take} from 'rxjs/operators';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})


export class LoginComponent implements OnInit, OnDestroy {
  public title = 'firebase-project';
  public userData: LoggedUserModel;
  public authStateSubscription: Subscription;

  constructor(public firebaseService: FirebaseService,
              private authService: SocialAuthService,
              private router: Router) {
  }

  public goToRoute(): void {
    this.router.navigate(['registration']);
  }

  public ngOnInit(): void {
    this.authStateSubscription = this.authService.authState
      .subscribe((result: SocialUser) => {
        console.log(result);
        this.userData = new LoggedUserModel(result);
      });
  }

  public ngOnDestroy(): void {
    console.log('destroy');
    if (this.authStateSubscription) {
      this.authStateSubscription.unsubscribe();
    }
  }


  public signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }

  public onSignIn(email: string, password: string): void {
    this.firebaseService.signIn(email, password)
      .pipe(
        take(1)
      )
      .subscribe((result) => {
        this.userData = new LoggedUserModel(result);
      });
  }

  public handleLogOut(): void {
    this.firebaseService.logOut();
  }
}
