import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { environment } from 'src/environments/environment';
import { ModalComponent } from './modal/modal.component';
import { HospitalService } from './services/hospital.service';

@Component({
  selector: 'app-categorias',
  templateUrl: './hospitales.component.html',
  styleUrls: ['./hospitales.component.css']
})
export class HospitalesComponent implements OnInit {

  public botones = [`<button class="btn btn-info btn-editar" type="button"><i class="fa fa-users"></i></button> `]

  columns: Array<object>
  public modal!: NgbModalRef;
  public enpoint = environment.url + 'hospitales'
  public modales = [];
  medicoId:number = 0;

  constructor(private hospitalServices: HospitalService,
    private modalService: NgbModal) { }

  ngOnInit(): void {
    this.columns = this.cargarTabla();
  }


  cargarTabla() {

    this.columns = [

      {
        title: 'Nombre',
        data: 'nombre',
      },
      {
        title: 'Ciudad',
        data: 'ciudad'
      },
      {
        title: 'Dirección',
        data: 'direccion',
      },
      {
        title: 'Nit',
        data: 'nit',
      },
      {
        title: 'Acciones',
        className: 'text-center',
        render: () => {
          return this.botones
        }
      }
    ];

    return this.columns;
  }
 editar(event){
  this.medicoId = event.id;
  this.abrirModal();  
 }

  abrirModal() {
    this.modal = this.modalService.open(ModalComponent, {
      size: 'xl',
      backdrop: 'static',
      keyboard: false,
    });
    this.modal.componentInstance.id = this.medicoId; 
    this.modal.componentInstance.titulo =  `Medicos del hospital ${this.medicoId} `
  }

}
