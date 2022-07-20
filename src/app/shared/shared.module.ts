import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { DatatableComponent } from './datatable/datatable.component';
import { CardComponent } from './card/card.component';
import { DataTablesModule } from 'angular-datatables';
import { MainModalComponent } from './main-modal/main-modal.component';


@NgModule({
  declarations: [
    DatatableComponent,
    CardComponent,
    MainModalComponent
  ],
  imports: [
    CommonModule,
    DataTablesModule,
    SharedRoutingModule
  ],

  exports: [
    DatatableComponent,
    CardComponent,
    MainModalComponent
  ],
})
export class SharedModule { }
