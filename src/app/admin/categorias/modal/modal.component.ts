import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  formulario: FormGroup | null;
  submitted = false;
  titulo = ''

  constructor(
    private modal: NgbModal
  ) { }

  ngOnInit(): void {
    this.crearFormulario();
  }



  crearFormulario() {
    this.formulario = new FormGroup({
      codigo: new FormControl(''),
      nombre: new FormControl(''),
      descripcion: new FormControl(''),
    });
  }


  cerrar() {
    this.modal.dismissAll();
  }
}
