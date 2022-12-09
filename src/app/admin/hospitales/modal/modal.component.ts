import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  titulo = ''
  id:number = 0;
  columns: Array<object>
  public enpoint = environment.url + 'todos'
  constructor(
    private modal: NgbModal
  ) { }

  ngOnInit(): void {
   this.columns =  this.cargarTabla();
  }


  cargarTabla() {

    this.columns = [

      {
        title: 'Nombre',
        data: 'title',
      },
      {
        title: 'Ciudad',
        data: 'title'
      },
      {
        title: 'Telefono',
        data: 'title',
      },
      {
        title: 'Correo',
        data: 'title',
      },
    ];

    return this.columns;
  }

  cerrar() {
    this.modal.dismissAll();
  }
}
