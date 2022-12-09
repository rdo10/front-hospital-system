import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MedicosComponent } from './medicos.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule } from '@angular/router';
import { MedicosRoutingModule } from './medicos-routing.module';



@NgModule({
  declarations: [MedicosComponent],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    MedicosRoutingModule
  ],
})
export class MedicosModule { }
