import { NgModule } from '@angular/core';
import { RegistrationComponent } from './registration.component';
import { RegistrationRoutingModule } from './registration-routing.module';
import {CommonModule} from '@angular/common';

@NgModule({
    declarations: [
        RegistrationComponent,
    ],
    imports: [
        RegistrationRoutingModule,
        CommonModule
    ],
    providers: [],
})
export class RegistrationModule {
}
