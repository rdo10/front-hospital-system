import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriasRoutingModule } from './categorias-routing.module';
import { HospitalesComponent } from './categorias.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [HospitalesComponent],
  imports: [
    CommonModule,
    RouterModule,
    CategoriasRoutingModule
  ],
})
export class categoriasModule { }
