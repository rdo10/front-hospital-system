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
  id:number;
  columns: Array<object>
  public enpoint = environment.url + 'medicos-hospitales/';
  constructor(
    private modal: NgbModal
  ) { }

  ngOnInit(): void {  
   this.columns =  this.cargarTabla();
   this.enpoint = this.enpoint+this.id;
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
        title: 'Telefono',
        data: 'telefono',
      },
      {
        title: 'Correo',
        data: 'correo',
      },
    ];

    return this.columns;
  }

  cerrar() {
    this.modal.dismissAll();
  }
}
