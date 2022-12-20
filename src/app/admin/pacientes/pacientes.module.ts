import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PacientesRoutingModule } from './pacientes-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule } from '@angular/router';
import { PacientesComponent } from './pacientes.component';


@NgModule({
  declarations: [PacientesComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    PacientesRoutingModule
  ]
})
export class PacientesModule { }
