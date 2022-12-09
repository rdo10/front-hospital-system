import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { ModalComponent } from './modal/modal.component';
import { ReactiveFormsModule} from '@angular/forms';
import { HospitalesRoutingModule } from './hospitales-routing.module';
import { HospitalesComponent } from './hospitales.component';



@NgModule({
  declarations: [HospitalesComponent,ModalComponent],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    ReactiveFormsModule,
    HospitalesRoutingModule
  ],
})
export class HospitalesModule { }
