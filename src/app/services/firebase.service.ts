//todo remove uneccessary import
import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {from, Observable, of} from 'rxjs';
import firebase from 'firebase';
import UserCredential = firebase.auth.UserCredential;
import {catchError, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class FirebaseService {

  public isLoggedIn = false;

  //todo remove commented code
  constructor(public firebaseAuth: AngularFireAuth) { }
    /*async singIn( email: string, password: string) {
      await this.firebaseAuth.signInWithEmailAndPassword(email, password)
        .then(res => {
        this.isLoggedIn = true;
        localStorage.setItem('user', JSON.stringify(res.user));
      });
  }*/

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

// todo add private/public
  logOut(): void {
        // todo set isloggedin flag as false
    from(this.firebaseAuth.signOut()).subscribe();
    // localStorage.removeItem('user');
  }
}

