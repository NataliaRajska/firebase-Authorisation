import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistrationComponent } from './registration.component';
import { TermsComponent } from './terms/terms.component';

const routes: Routes = [
    {
        path: '',
        component: RegistrationComponent,
        // children: [{
        //     path: 'terms',
        //     component: TermsComponent
        // }]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class RegistrationRoutingModule {
}
