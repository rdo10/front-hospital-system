import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { DatatableComponent } from './datatable/datatable.component';
import { CardComponent } from './card/card.component';
import { DataTablesModule } from 'angular-datatables';


@NgModule({
  declarations: [
    DatatableComponent,
    CardComponent
  ],
  imports: [
    CommonModule,
    DataTablesModule,
    SharedRoutingModule
  ],

  exports: [
    DatatableComponent,
    CardComponent
  ],
})
export class SharedModule { }
