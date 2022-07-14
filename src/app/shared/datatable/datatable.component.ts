import { HttpClient } from '@angular/common/http';
import { Component, OnInit, OnDestroy, Input, ViewChild, Output, EventEmitter } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';
import { ModalObject } from '../../models/modalObject';


@Component({
  selector: 'datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.css']
})
export class DatatableComponent implements OnInit, OnDestroy {

  dtOptions: DataTables.Settings = {};
  @Input() columns: any;
  @Input() enpoint: string = '';
  @Input() modal: any = '';
  @Input() id: number;
  @ViewChild(DataTableDirective, {static: false})
  dtElement: DataTableDirective;
  @Input() modales!: Array<any>;
  @Output() accionRerender = new EventEmitter<void>();
  @Output() accionEliminar = new EventEmitter<any>();
  @Output() accionEditar = new EventEmitter<any>();
  // We use this trigger because fetching the list of persons can be quite long,
  // thus we ensure the data is fetched before rendering
  dtTrigger: Subject<any> = new Subject<any>();

  constructor(private http: HttpClient, public modalService: NgbModal) { }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
      language: {
        url: 'https://cdn.datatables.net/plug-ins/1.10.15/i18n/Spanish.json'
      },

      ajax: (datatable: any, callback, settings) => {
        datatable.draw;
        datatable.start;
        datatable.length;
        datatable.search;
        datatable.order;
        datatable.columns;
        let pageCurrent = Math.ceil(settings._iDisplayStart / settings._iDisplayLength); // pagina actual
        pageCurrent;
        this.http.get(this.enpoint).subscribe((resp: any) => {
          this.columns = resp;
        });
        callback({
          data: this.columns
        });
      },
      rowCallback: (row, data: any) => {
        $(row).find(".btn-medicos").on(
          "click",
          (event) => {
            this.accionEditar.emit({

              id: this.id = data.id,
              accion: 'editar',
              data: data

            });
            this.accionBoton(this.id, this.modales, 'editar')

          }
        );
        $(row).find(".btn-delete").on(
          "click",
          (event) => {
            this.accionEliminar.emit({

              id: data.id,
              accion: 'eliminar'

            });
           this.accionRerender.emit();
          }
        );
      },

      columns: this.columns
    };
    this.http.get(this.enpoint)
      .subscribe(data => {
        this.columns = data
        // Calling the DT trigger to manually render the table
        this.dtTrigger.next();
      });
  }


 


  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }



  accionBoton(id: number, modal: Array<ModalObject>, tipo: string) {

    const abrirModal = modal?.filter((element) => element.tipo == tipo);
    if (abrirModal && abrirModal.length) {
      const modal = abrirModal[0];
      this.abrirModal(modal, id);
    }
  }




  abrirModal(modal: ModalObject, idModal: number) {
    this.modal = this.modalService.open(modal.modal, {
      size: modal.size,
      backdrop: "static",
      keyboard: false,
    });

  }

}
