import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './form/form.component';
import { HospitalesComponent } from './hospitales.component';

const routes: Routes = [
  {path: '', component: HospitalesComponent},
  {path: 'nuevo', component: FormComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HospitalesRoutingModule { }
