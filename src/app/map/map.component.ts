import { Component, OnInit } from '@angular/core';
import { MapDataService } from './services/map-data.service';
import { take } from 'rxjs/operators';
import { MapResultModel } from './models/mapResult.model';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  public mapResults: MapResultModel[] = [];

  constructor(private mapDataService: MapDataService) {
  }

  ngOnInit(): void {
    this.mapDataService.getMapResult()
      .pipe(
        take(1)
      )
      .subscribe(results => this.mapResults = results);
  }

}
