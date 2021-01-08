import { Pipe, PipeTransform } from '@angular/core';
import { MapPointTypeEnum } from '../models/mapResult.model';

@Pipe({
  name: 'mapResultType'
})
export class MapResultTypePipe implements PipeTransform {

  transform(value: MapPointTypeEnum): string {
    switch (value) {
      case MapPointTypeEnum.ACCOMMODATION:
        return 'accommodation';
      case MapPointTypeEnum.ACTIVITY:
        return 'activity';
      case MapPointTypeEnum.MUSEUM:
        return 'museum';
      case MapPointTypeEnum.RESTAURANT:
        return 'restaurant';
      default:
        return 'unknown';
    }
  }
}
