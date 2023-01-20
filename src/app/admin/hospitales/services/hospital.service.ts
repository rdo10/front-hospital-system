import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Hospital } from 'src/app/models/hospital';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HospitalService {

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get(`${environment.url}hospitales`);
  }

  getHospital(id) {
    return this.http.get<Hospital>(`${environment.url}hospital/${id}`);
  }

  save(data:Hospital) {
    let json = JSON.stringify(data);
    let params = "json="+json;
    let headers = new HttpHeaders().set('Content-Type' , 'application/x-www-form-urlencoded');
    return this.http.post<Hospital>(`${environment.url}hospitales`, params , {headers:headers});
  }

  delete(id:number){
    let headers = new HttpHeaders().set('Content-Type' , 'application/x-www-form-urlencoded');
    return this.http.delete(`${environment.url}hospital/${id}`, {headers:headers});
  }
}
