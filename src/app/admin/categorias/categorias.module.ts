import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriasRoutingModule } from './categorias-routing.module';
import { CategoriasComponent } from './categorias.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [CategoriasComponent],
  imports: [
    CommonModule,
    RouterModule,
    CategoriasRoutingModule
  ],
})
export class categoriasModule { }
