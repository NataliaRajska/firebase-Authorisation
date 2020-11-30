import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from "@angular/fire";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp( {
    apiKey: 'AIzaSyC0hoicvjhmcmk_swt69z4eYs7JhmOyuKM',
    authDomain: 'travel-app-ba3a2.firebaseapp.com',
    databaseURL: 'https://travel-app-ba3a2.firebaseio.com',
    projectId: 'travel-app-ba3a2',
    storageBucket: 'travel-app-ba3a2.appspot.com',
    messagingSenderId: '725560342179',
    appId: '1:725560342179:web:9d2ca913c359c5b90d7116',
    measurementId: 'G-12EXKLWETH'
  })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
