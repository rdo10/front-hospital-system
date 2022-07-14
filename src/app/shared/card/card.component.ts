import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal,NgbModalRef } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Output() restaurarTabla = new EventEmitter<boolean>();
  modal!: NgbModalRef;
  @Input() titulo: string = "";
  @Input() color = ""; 
  @Input() botones: string[] = [];
  @Input() endpoint: string = "";
  @Output() cerroModal = new EventEmitter<void>();

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void { }

 
}




