import { NgModule } from '@angular/core';
import { MapRoutingModule } from './map-routing.module';
import { MapComponent } from './map.component';
import { MapDataService } from './services/map-data.service';
import { CommonModule } from '@angular/common';
import { MapResultTypePipe } from './pipes/map-result-type.pipe';

@NgModule({
  declarations: [
    MapComponent,
    MapResultTypePipe
  ],
    imports: [
        MapRoutingModule,
        CommonModule
    ],
  providers: [
    MapDataService
  ],
})
export class MapModule {
}
