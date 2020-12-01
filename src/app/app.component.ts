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
    isSignedIn = false;

    constructor(public firebaseService: FirebaseService) {
    }

    ngOnInit(): void {
        if (localStorage.getItem('user') !== null) {
            this.isSignedIn = true;
        }
        this.isSignedIn = false;
    }

    async onSignUp(email: string, password: string) {
        await this.firebaseService.singUp(email, password);
        if (this.firebaseService.isLoggedIn) {
            this.isSignedIn = true;
        }
    }

    async onSignIn(email: string, password: string) {
        await this.firebaseService.singIn(email, password);
        if (this.firebaseService.isLoggedIn) {
            this.isSignedIn = true;
        }
    }

    handleLogOut() {
    this.isSignedIn = false;
        }

}
