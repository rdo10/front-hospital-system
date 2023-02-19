import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { environment } from 'src/environments/environment';
import { ModalComponent } from './modal/modal.component';
import { HospitalService } from './services/hospital.service';
import { FormComponent } from './form/form.component';
import { Router } from '@angular/router';
import Swal from 'sweetalert2'
import { HelpersService } from 'src/app/services/helpers.service';

@Component({
  selector: 'app-categorias',
  templateUrl: './hospitales.component.html',
  styleUrls: ['./hospitales.component.css']
})
export class HospitalesComponent implements OnInit {

  public btnMedicos = [`<button class="btn btn-info btn-ver" type="button"><i class="fa fa-users"></i></button> `];
  public btnEditar = [`<button class="btn btn-warning btn-editar" type="button"><i class="fa fa-edit"></i></button> `];
  public btnEliminar = [`<button class="btn btn-danger btn-eliminar" type="button"><i class="fa fa-times"></i></button> `];
  public columns: Array<object>
  public modal!: NgbModalRef;
  public enpoint = environment.url + 'hospitales'
  public modales = [];
  public medicoId: number = 0;
  public id: number;
  public status: string = '';
  public hospital: string = '';

  constructor(private hospitalServices: HospitalService,
    private modalService: NgbModal,
    public helperServices: HelpersService,
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
    this.id = event.id;
    this.route.navigateByUrl(`hospitales/editar/${this.id}`);
  }

  eliminar(event) {
    this.id = event.id;
    Swal.fire({
      title: 'Estas seguro de esta acción?',
      text: "Se eliminará este registro!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminar esto!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.status = 'success';
        this.hospitalServices.delete(this.id).subscribe((res: any) => {
          if (res.status == 'success')
            Swal.fire(
              'Eliminado!',
              'el registro ha sido eliminado con exito.',
              'success'
            )
        })
      } else {
        this.status = 'error';
      }
    })
  }
}
