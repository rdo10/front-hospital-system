import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-medicos',
  templateUrl: './medicos.component.html',
  styleUrls: ['./medicos.component.css']
})
export class MedicosComponent implements OnInit {
  public botones = [`<button class="btn btn-success btn-editar" type="button"><i class="fa fa-users"></i></button> `]

  columns: Array<object>
  public enpoint = environment.url + 'medicos'
  constructor() { }

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
        title: 'Telefono',
        data: 'telefono',
      },
      {
        title: 'Correo',
        data: 'correo',
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

  editar(event){}

}
