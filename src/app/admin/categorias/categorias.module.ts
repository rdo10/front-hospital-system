import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriasRoutingModule } from './categorias-routing.module';
import { CategoriasComponent } from './categorias.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [CategoriasComponent],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    CategoriasRoutingModule
  ],
})
export class categoriasModule { }
