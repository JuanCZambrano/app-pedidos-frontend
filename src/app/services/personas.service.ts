import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PersonaModel } from '../models/personaModel';
import { SeguridadService } from 'src/app/services/seguridad.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PersonasService {

  url: string = environment.urlBackend + '/personas';  
  token : string | null = '';

  constructor(private http: HttpClient,
              private seguridadService : SeguridadService ) { 
                this.token = seguridadService.obtenerSession();                
              }

  obtenerPersonas(){
    return this.http.get(this.url, {headers: {'Content-Type': 'application/json', 'Authorization':'Bearer ' + this.token}});
  }

  registrarPersona(persona : PersonaModel){
    return this.http.post(this.url, persona, {headers: {'Content-Type': 'application/json', 'Authorization':'Bearer ' + this.token}});
  }
  
}
