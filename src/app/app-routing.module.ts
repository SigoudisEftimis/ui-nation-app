import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{
  path: 'countries',
  loadChildren: () =>
    import('./components/country-table/country-table.module').then((m) => m.CountryTableModule),
},
{
  path: 'countries/:id/languages',
  loadChildren: () =>
    import('./components/country-languages/country-languages.module').then((m) => m.CountryLanguagesModule),
},
{
  path: 'gdp-population-ratio',
  loadChildren: () =>
    import('./components/gdp-population/gdp-population.module').then((m) => m.GdpPopulationModule),
},
{
  path: 'statistics',
  loadChildren: () =>
    import('./components/country-stats/country-stats.module').then((m) => m.CountryStatsModule),
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
