import { NgModule } from '@angular/core';
import { LoginComponent } from './login.component';
import {RegistrationRoutingModule} from "../registration/registration-routing.module";
import {LoginRoutingModule} from "./login-routing.module";


@NgModule({
    declarations: [
        LoginComponent
    ],
    imports: [
        LoginRoutingModule
    ],
    providers: [],
})
export class LoginModule {
}
