// remove uneccessary import
import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {from, Observable} from 'rxjs';
import firebase from 'firebase';
import UserCredential = firebase.auth.UserCredential;
import { tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class FirebaseService {

  public isLoggedIn = false;

  // remove commented code
  constructor(public firebaseAuth: AngularFireAuth) { }


    public signIn(email: string, password: string): Observable<UserCredential> {
       return from(this.firebaseAuth.signInWithEmailAndPassword(email, password))
           .pipe(
               tap(output => this.isLoggedIn = !!(output && output.user && output.user.email))
           );
    }


  public singUp( email: string, password: string): Observable<UserCredential> {
    return from(this.firebaseAuth.createUserWithEmailAndPassword(email, password))
      .pipe(
          tap(output => this.isLoggedIn = !!(output && output.user && output.user.email)));
  }

// add private/public
  public logOut(): void {
        // set isloggedin flag as false
    from(this.firebaseAuth.signOut()).subscribe();
    this.isLoggedIn = false;
  }
}

