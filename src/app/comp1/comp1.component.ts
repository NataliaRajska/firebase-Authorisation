import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.scss']
})
export class Comp1Component implements OnInit {

  @Input()
  public naszTekst = 'nasz tekst';

  @Output()
  public wynik: EventEmitter<string> = new EventEmitter();

  constructor() {
  }

  ngOnInit(): void {
  }

  public klik(): void {
    this.wynik.emit('kliniete w guzik');
  }

}
