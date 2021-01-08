import firebase from 'firebase';
import UserCredential = firebase.auth.UserCredential;
import {SocialUser} from 'angularx-social-login';

export class LoggedUserModel {

    public email: string;
    public authToken: string;
    public authMethod: AuthMethodEnum;


    constructor(input: UserCredential | SocialUser ){
        // todo factory pattern
      if (input instanceof SocialUser) {
        this.email = input.email;
        this.authToken = input.authToken;
      } else {
        if (input && input.user){
          this.email = (input as UserCredential).user.email;
        }
      }
    }

    // private assignSocialUser(input: SocialUser) {

    // private assignUserCredential(input: UserCredential) {

}

export enum AuthMethodEnum {
    'GOOGLE',
    'FIREBASE'
}

