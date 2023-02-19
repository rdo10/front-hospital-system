import { Injectable } from '@angular/core';
import Swal, { SweetAlertIcon, SweetAlertPosition } from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class HelpersService {

  constructor() { }


  mensajeAlerta(status: any, message:string) {
    Swal.fire({
      title: message,
      toast: true,
      icon: status,
      position: 'bottom-end',
      showConfirmButton: false,
      timer: 6000,
    });
  }
}