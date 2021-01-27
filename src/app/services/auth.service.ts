import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { from, Observable } from 'rxjs';
import firebase from 'firebase';
import UserCredential = firebase.auth.UserCredential;
import { tap } from 'rxjs/operators';
import { LoggedUserModel } from '../models/loggedUser.model';
import { GoogleLoginProvider, SocialAuthService, SocialUser } from 'angularx-social-login';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  public isLoggedIn = false;
  public userData: LoggedUserModel;

  constructor(public firebaseAuth: AngularFireAuth,
              public socialAuthService: SocialAuthService) {
  }


  public signInWithFirebase(email: string, password: string): Observable<UserCredential> {
    return from(this.firebaseAuth.signInWithEmailAndPassword(email, password))
      .pipe(
        tap(output => this.isLoggedIn = !!(output && output.user && output.user.email))
      );
  }

  public signInWithGoogle(): void {
    this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }

  public socialAuthState(): Observable<SocialUser> {
    return this.socialAuthService.authState
      .pipe(
        tap(output => this.isLoggedIn = !!(output && output.authToken))
      );
  }

  public singUpWithFirebase(email: string, password: string): Observable<UserCredential> {
    return from(this.firebaseAuth.createUserWithEmailAndPassword(email, password))
      .pipe(
        tap(output => this.isLoggedIn = !!(output && output.user && output.user.email)));
  }

  public logOutWithFirebase(): void {
    from(this.firebaseAuth.signOut()).subscribe();
    this.isLoggedIn = false;
  }
}

