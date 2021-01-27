import {Component, OnDestroy, OnInit} from '@angular/core';
import {GoogleLoginProvider, SocialAuthService, SocialUser} from 'angularx-social-login';
import {AuthService} from '../services/auth.service';
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

  public authStateSubscription: Subscription;

  constructor(public authService: AuthService,
              private router: Router) {
  }

  public goToRoute(): void {
    this.router.navigate(['registration']);
  }

  public ngOnInit(): void {
    this.authStateSubscription = this.authService.socialAuthState()
      .subscribe((result: SocialUser) => {
        this.authService.userData = new LoggedUserModel(result);
      });
  }

  public ngOnDestroy(): void {
    if (this.authStateSubscription) {
      this.authStateSubscription.unsubscribe();
    }
  }


  public signInWithGoogle(): void {
    this.authService.signInWithGoogle();
  }

  public signInWithFirebase(email: string, password: string): void {
    this.authService.signInWithFirebase(email, password)
      .pipe(
        take(1)
      )
      .subscribe((result) => {
        this.authService.userData = new LoggedUserModel(result);
      });
  }

  public handleLogOut(): void {
    this.authService.logOutWithFirebase();
  }
}
