import {Component, OnDestroy} from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public zmianna ='aaaaaa';

  public zlapWynik(wartosc: string): void {
    console.log('wynik to ', wartosc);
  }
}



