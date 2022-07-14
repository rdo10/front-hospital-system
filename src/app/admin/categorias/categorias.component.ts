import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent implements OnInit {
  columns: any = [];
  public enpoint = 'https://jsonplaceholder.typicode.com/todos';
  constructor() { }

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
        title: 'Descripcion',
        data: 'title',
      },
      {
        title: 'Acciones',
        className: 'text-center',
        render: () => {
          return `<button class="btn btn-info btn-medicos" title="ver medicos por hospital" type="button"><i class="fa fa-edit"></i></button>
          <button class="btn btn-danger btn-delete " title="ver medicos por hospital" type="button"><i class="fa fa-trash"></i></button> `;
        }
      }
    ];

    return this.columns;
  }

}
