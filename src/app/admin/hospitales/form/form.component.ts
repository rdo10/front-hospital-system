import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Hospital } from 'src/app/models/hospital';
import { HospitalService } from '../services/hospital.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  form: FormGroup;

  constructor(public fb: FormBuilder, public hospitalServices: HospitalService) { }

  ngOnInit(): void {
    this.crearFormulario();
  }

  crearFormulario() {
    this.form = this.fb.group({
      nombre: ['', [Validators.required,]],
      ciudad: ['', [Validators.required]],
      direccion: ['', [Validators.required]],
      telefono: ['', [Validators.required]],
      nit: ['', Validators.required]
    })
  }


  guardar() {
    console.log('guardaa');
    const hospital: Hospital = {
      nombre: this.form.get('nombre').value,
      ciudad: this.form.get('ciudad').value,
      direccion: this.form.get('direccion').value,
      telefono: this.form.get('telefono').value,
      nit: this.form.get('nit').value
    }
    this.hospitalServices.save(hospital).subscribe(res => {})
  }


}
