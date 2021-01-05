import { NgModule } from '@angular/core';
import { RegistrationComponent } from './registration.component';
import { RegistrationRoutingModule } from './registration-routing.module';
import { TermsComponent } from './terms/terms.component';

@NgModule({
    declarations: [
        RegistrationComponent,
        TermsComponent
    ],
    imports: [
        RegistrationRoutingModule
    ],
    providers: [],
})
export class RegistrationModule {
}
