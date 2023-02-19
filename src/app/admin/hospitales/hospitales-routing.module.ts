import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { data } from 'jquery';
import { FormComponent } from './form/form.component';
import { HospitalesComponent } from './hospitales.component';

const routes: Routes = [
  {path: '', component: HospitalesComponent},
  {path: 'nuevo', component: FormComponent},
  {
    path: 'editar/:id',
    component: FormComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HospitalesRoutingModule { }
