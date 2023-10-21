import { CountryStats } from "../country-stats";
import { Pageable, Sort } from "../shared/pageable";

export interface CountryStatsResponse{
  content: CountryStats[];
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
