import { NgModule } from '@angular/core';
import { RegistrationComponent } from './registration.component';
import { RegistrationRoutingModule } from './registration-routing.module';
import { TermsComponent } from './terms/terms.component';
import {CommonModule} from "@angular/common";

@NgModule({
    declarations: [
        RegistrationComponent,
        TermsComponent
    ],
    imports: [
        RegistrationRoutingModule,
        CommonModule
    ],
    providers: [],
})
export class RegistrationModule {
}
