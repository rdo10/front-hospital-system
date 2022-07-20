import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgbActiveModal, NgbModal } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-main-modal',
  templateUrl: './main-modal.component.html',
  styleUrls: ['./main-modal.component.css']
})
export class MainModalComponent implements OnInit {
  @Input() public titulo: string = "";
  @Input() public datosAdicionales: any;
  @Input() public tamanoCorteTitulo = 40;
  constructor(private modal: NgbModal) { }

  ngOnInit(): void {
  }

  cerrarModal() {
    this.modal.dismissAll();
  }

}








