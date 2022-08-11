import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { MainModalComponent } from 'src/app/shared/main-modal/main-modal.component';
import { environment } from 'src/environments/environment';
import { ModalComponent } from './modal/modal.component';
import { CategoriasService } from './services/categorias.service';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent implements OnInit {

  public botones = [`<button class="btn btn-info btn-editar" type="button"><i class="fa fa-edit"></i></button>
  <button class="btn btn-danger btn-delete type="button"><i class="fa fa-trash"></i></button> `]

  columns: Array<object>
  public modal!: NgbModalRef;
  public enpoint = environment.url + 'todos'
  public modales = [];

  constructor(private categoriaServices: CategoriasService,
    private modalService: NgbModal) { }

  ngOnInit(): void {
    this.columns = this.cargarTabla();
  }


  cargarTabla() {

    this.columns = [

      {
        title: 'Codigo',
        data: 'title',
      },
      {
        title: 'Nombre',
        data: 'title'
      },
      {
        title: 'Descripción',
        data: 'title',
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


  abrirModal() {
    this.modal = this.modalService.open(ModalComponent, {
      size: 'md',
      backdrop: 'static',
      keyboard: false,
    });
    this.modal.componentInstance.titulo = 'Crear Categoria'
  }


}
