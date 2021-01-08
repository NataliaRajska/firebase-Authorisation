export interface IMapResultDto {
  id: number;
  name: string;
  type: number;
  geometry: IMapResultGeometryDto;
}

export interface IMapResultGeometryDto {
  type: string;
  coordinates: number[];
}
