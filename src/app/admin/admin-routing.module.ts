import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path: 'hospitales',
    loadChildren: ()=> import("./hospitales/hospitales.module").then(m => m.HospitalesModule)
  },
  {
    path: 'medicos',
    loadChildren: ()=> import("./medicos/medicos.module").then(m => m.MedicosModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
