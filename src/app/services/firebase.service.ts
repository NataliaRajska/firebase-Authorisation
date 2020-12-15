import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import { from, Observable } from 'rxjs';
import firebase from 'firebase';
import UserCredential = firebase.auth.UserCredential;
import { filter, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class FirebaseService {

  public isLoggedIn = false;

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
               filter(output => !!(output && output.user && output.user.email)),
               tap(output => {
                   this.isLoggedIn = true;
               })
           );
    }





  async singUp( email: string, password: string) {
    await this.firebaseAuth.createUserWithEmailAndPassword(email, password)
      .then(res => {
        this.isLoggedIn = true;
        localStorage.setItem('user', JSON.stringify(res.user));
      });
  }
  logOut(){
    this.firebaseAuth.signOut();
    localStorage.removeItem('user');
  }
}

