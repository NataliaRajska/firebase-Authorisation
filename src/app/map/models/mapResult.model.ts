import { IMapResultDto, IMapResultGeometryDto } from './mapResult.dto';

export class MapResultModel {
  public id: number;
  public name: string;
  public type: MapPointTypeEnum;
  public geometry: MapGeometryModel;

  constructor(input: IMapResultDto) {
      this.id = input.id;
      this.name = input.name;
      this.type = input.type;
      this.geometry = new MapGeometryModel(input.geometry);
  }
}

export class MapGeometryModel {
  public type: string;
  public coordinates: number[];

  constructor(input: IMapResultGeometryDto) {
    this.type = input.type;
    this.coordinates = input.coordinates || [];
  }
}

export enum MapPointTypeEnum {
  ACTIVITY = 1,
  MUSEUM = 2,
  ACCOMMODATION = 3,
  RESTAURANT = 4
}
