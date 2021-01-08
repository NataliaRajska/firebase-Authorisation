import firebase from 'firebase';
import UserCredential = firebase.auth.UserCredential;
import {SocialUser} from 'angularx-social-login';

export class LoggedUserModel {

    public email: string;
    public authToken: string;
    public authMethod: AuthMethodEnum;


    constructor(input: UserCredential | SocialUser ){
        // todo factory pattern
       if (input instanceof UserCredential){
              this.email = input.user.email;
            }
       if (input instanceof SocialUser) {
        this.email = input.email;
        this.authToken = input.authToken;
      }
        // todo check which input type it is and fire appropriate method
    }

    // private assignSocialUser(input: SocialUser) {

    // private assignUserCredential(input: UserCredential) {

}

export enum AuthMethodEnum {
    'GOOGLE',
    'FIREBASE'
}

