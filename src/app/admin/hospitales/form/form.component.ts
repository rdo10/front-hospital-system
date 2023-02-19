import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Hospital, HospitalDto } from 'src/app/models/hospital';
import { HelpersService } from 'src/app/services/helpers.service';
import { HospitalService } from '../services/hospital.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  public form: FormGroup;
  public status: string = '';
  public titulo: string = '';
  public id:number;
  constructor(public fb: FormBuilder, public hospitalServices: HospitalService, public helpersevices: HelpersService, private route: Router,private activeRoute: ActivatedRoute) {
    this.id = this.activeRoute.snapshot.params.id;
    if(this.id){
      this.titulo = 'Editar Hospital';
      this.getHospital();
     }else{
      this.titulo = 'Crear Hospital';
     } 
  }

  ngOnInit(): void {
    this.crearFormulario();
  }

  crearFormulario() {
    this.form = this.fb.group({
      nombre: ['', [Validators.required]],
      ciudad: ['', [Validators.required]],
      direccion: ['', [Validators.required]],
      telefono: ['', [Validators.required]],
      nit: ['', [Validators.required]]
    })
  }


  getHospital() {
    this.hospitalServices.getHospital(this.id).subscribe((res) => { 
      this.cargarData(res);
    })
  }


  cargarData(data:any){
    const datos =   data.forEach(element => {
    this.form.get('nombre').setValue(element.nombre);
    this.form.get('ciudad').setValue(element.ciudad);
    this.form.get('direccion').setValue(element.direccion);
    this.form.get('telefono').setValue(element.telefono);
    this.form.get('nit').setValue(element.nit);
    });

    return datos;
  }


  guardar() {
    if (this.id) {
      let hospitalUpdate: HospitalDto = {
        nombre: this.form.get('nombre').value,
        ciudad: this.form.get('ciudad').value,
        direccion: this.form.get('direccion').value,
        telefono: this.form.get('telefono').value,
        nit: this.form.get('nit').value
      }
      this.hospitalServices.update(this.id,hospitalUpdate).subscribe((res: any) => {
        if (res.status == 'success') {
          this.status = 'success';
          this.route.navigateByUrl('/hospitales');
          this.helpersevices.mensajeAlerta(this.status,'Registro Actualizado con exito');
        }
      }, error => { 
        this.status = 'error';
      })
     }else{
      let hospitalCreate: Hospital = {
      nombre: this.form.get('nombre').value,
      ciudad: this.form.get('ciudad').value,
      direccion: this.form.get('direccion').value,
      telefono: this.form.get('telefono').value,
      nit: this.form.get('nit').value
    }
    this.hospitalServices.save(hospitalCreate).subscribe((res: any) => {
      if (res.status == 'success') {
        this.status = 'success';
        this.route.navigateByUrl('/hospitales');
        this.helpersevices.mensajeAlerta(this.status,'Registro Guardado con exito');
      }
    }, error => {
      this.status = 'error';
      this.helpersevices.mensajeAlerta(this.status,error.message);
    })
  }
}
}
