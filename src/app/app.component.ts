import { Component, OnDestroy } from '@angular/core';
import { FirebaseService } from './services/firebase.service';
import { OnInit } from '@angular/core';
import { take } from 'rxjs/operators';
import { GoogleLoginProvider, SocialAuthService, SocialUser } from 'angularx-social-login';
import { Subscription } from 'rxjs';
import { AuthMethodEnum, LoggedUserModel } from './models/loggedUser.model';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {

    // todo public/private
    title = 'firebase-project';

    public authStateSubscription: Subscription;

    public userData: LoggedUserModel;

    constructor(public firebaseService: FirebaseService,
                private authService: SocialAuthService) {
    }

    public signInWithGoogle(): void {
        this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
    }

    // todo unused code
    public ngOnInit(): void {
        this.authStateSubscription = this.authService.authState
            .subscribe((result) => {
                this.userData = new LoggedUserModel(
                    {
                        email: result.email,
                        authToken: result.authToken,
                        authMethod: AuthMethodEnum.GOOGLE
                    });

                // todo
                // this.userData = new LoggedUserModel(result)
            });
    }

    public ngOnDestroy(): void {
        if (this.authStateSubscription) {
            this.authStateSubscription.unsubscribe();
        }
    }

    public onSignUp(email: string, password: string): void {
        // this.signUpSubscription = this.firebaseService.singUp(email, password).subscribe();
        this.firebaseService.singUp(email, password)
            .pipe(
                take(1)
            )
            .subscribe();
    }


    public onSignIn(email: string, password: string): void {
        this.firebaseService.signIn(email, password)
            .pipe(
                take(1)
            )
            .subscribe((result) => {
                this.userData = new LoggedUserModel(
                    {
                        email: result.user.email,
                        authToken: result.user.refreshToken,
                        authMethod: AuthMethodEnum.FIREBASE
                    });

                // todo
                // // this.userData = new LoggedUserModel(result)
            });
    }

    // todo private/public
    handleLogOut(): void {
        this.firebaseService.logOut();
    }
}
