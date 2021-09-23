import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EquipoService {

  url= '/api';
  constructor(private http: HttpClient) { }

  // Get equipos
  getEquipos() {
    return this.http.get(this.url);
  }

  // Get un Equipo
  getUnEquipo(id:string) {
    return this.http.get(this.url + '/' + id);
  }

  // Agregar Equipo
  addEquipo(equipo:Equipo) {
    return this.http.post(this.url, equipo);
  }

  // Eliminar Equipo
  deleteEquipo(id:string) {
    return this.http.delete(this.url + '/' + id);
  }

  // Modificar Equipo
  editEquipo(id:string, equipo:Equipo) {
    return this.http.put(this.url + '/' + id, equipo);
  }

}

export interface Equipo {
  id_equipo?:string;
  nombre?:string;
  logo?:string;
}