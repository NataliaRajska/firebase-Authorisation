export class LoggedUserModel {

    public email: string;
    public authToken: string;
    public authMethod: AuthMethodEnum;


    // todo
    // constructor(input: UserCredential || SocialUser )
    constructor(input: any) {
        //todo usunąć
        this.email = input && input.email;
        this.authToken = input && input.authToken;
        this.authMethod = input && input.authMethod;

        // todo check which input type it is and fire appropriate method
    }


    //todo
    // private assignSocialUser(input: SocialUser) {

    //todo
    // private assignUserCredential(input: UserCredential) {

}

export enum AuthMethodEnum {
    'GOOGLE',
    'FIREBASE'
}

