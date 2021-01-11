import { NgModule } from '@angular/core';
import { LoginComponent } from './login.component';
import { LoginRoutingModule } from './login-routing.module';
import {AppModule} from "../app.module";
import {CommonModule} from "@angular/common";


@NgModule({
    declarations: [
        LoginComponent
    ],
  imports: [
    LoginRoutingModule,
    AppModule,
    CommonModule
  ],
    providers: [],
})
export class LoginModule {
}
