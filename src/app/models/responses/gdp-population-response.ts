
import { GdpPopulation } from "../gdp-population";
import { Pageable, Sort } from "../shared/pageable";

export interface GdpPopulationResponse{
  content: GdpPopulation[];
  pageable: Pageable;
  last: boolean;
  totalPages: number;
  totalElements: number;
  size: number;
  number: number;
  sort: Sort;
  first: boolean;
  numberOfElements: number;
  empty: boolean;
}
