import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PersonaModel } from '../models/personaModel';

@Injectable({
  providedIn: 'root'
})
export class FormularioService {

  url = "http://localhost:3001/personas";

  constructor(private http : HttpClient ) { }

  obtenerPersonas(){
    return this.http.get(this.url);
  }

  registrarPersona(persona : PersonaModel){
    return this.http.post(this.url, persona);
  }

}
