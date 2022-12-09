import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HospitalesComponent } from './hospitales.component';

const routes: Routes = [
  {path: '', component: HospitalesComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HospitalesRoutingModule { }