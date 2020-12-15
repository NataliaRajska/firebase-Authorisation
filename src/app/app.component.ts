import {Component} from '@angular/core';
import {FirebaseService} from './services/firebase.service';
import {OnInit} from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

    title = 'firebase-project';

    constructor(public firebaseService: FirebaseService) {
    }

    public ngOnInit(): void {
      /*  if (localStorage.getItem('user') !== null) {
            this.isSignedIn = true;
        }
        this.isSignedIn = false;*/
    }

    async onSignUp(email: string, password: string) {
        await this.firebaseService.singUp(email, password);
    }

    /*async onSignIn(email: string, password: string) {
        await this.firebaseService.singIn(email, password);
        if (this.firebaseService.isLoggedIn) {
            this.isSignedIn = true;
        }
    }*/

    public onSignIn(email: string, password: string): void {
        this.firebaseService.signIn(email, password)
            .subscribe();
    }

    handleLogOut() {
    this.isSignedIn = false;
        }

}
