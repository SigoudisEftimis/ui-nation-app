import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { GdpPopulationComponent } from "./gdp-population.component";

const routes: Routes = [
  {
    path: '',
    component:GdpPopulationComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GdpPopulationRoutingModule {}
