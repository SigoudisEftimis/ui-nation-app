import { Country } from "../country";
import { Pageable, Sort } from "../shared/pageable";


export interface CountryResponse {
  content: Country[];
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
