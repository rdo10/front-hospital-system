import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { environment } from 'src/environments/environment';
import { ModalComponent } from './modal/modal.component';
import { HospitalService } from './services/hospital.service';
import { FormComponent } from './form/form.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-categorias',
  templateUrl: './hospitales.component.html',
  styleUrls: ['./hospitales.component.css']
})
export class HospitalesComponent implements OnInit {

  public btnMedicos = [`<button class="btn btn-info btn-ver" type="button"><i class="fa fa-users"></i></button> `];
  public btnEditar = [`<button class="btn btn-warning btn-editar" type="button"><i class="fa fa-edit"></i></button> `];
  public btnEliminar = [`<button class="btn btn-danger btn-eliminar" type="button"><i class="fa fa-times"></i></button> `];


  columns: Array<object>
  public modal!: NgbModalRef;
  public enpoint = environment.url + 'hospitales'
  public modales = [];
  medicoId: number = 0;
  id:number = 0;
  hospital: string = '';

  constructor(private hospitalServices: HospitalService,
    private modalService: NgbModal,
    private route: Router
    ) { }

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
          return this.btnMedicos + ' ' + this.btnEditar + ' ' + this.btnEliminar;
        }
      }
    ];

    return this.columns;
  }
  modalMedicos(event) {
    this.medicoId = event.id;
    this.hospital = event.data.nombre;
    this.abrirModal();
  }

  abrirModal() {
    this.modal = this.modalService.open(ModalComponent, {
      size: 'xl',
      backdrop: 'static',
      keyboard: false,
    });
    this.modal.componentInstance.id = this.medicoId;
    this.modal.componentInstance.titulo = `Medicos del ${this.hospital} `
  }

  editar(event) {
    this.route.navigateByUrl('/hospitales/nuevo');
    this.getHospital();
  }

  getHospital(){
    this.hospitalServices.getHospital(this.id).subscribe((res)=>{})
  }

  eliminar(event){
    this.id = event.id;
     this.hospitalServices.delete(this.id).subscribe(res=>{
      console.log(res);
      
     })
  }

}
