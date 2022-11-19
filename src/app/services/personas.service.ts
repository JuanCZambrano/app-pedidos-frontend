import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PersonaModel } from '../models/personaModel';
import { SeguridadService } from 'src/app/services/seguridad.service';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

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

  obtener(id : string) : Observable<PersonaModel> {
    return this.http.get<PersonaModel>(this.url + '/' + id, {headers: {'Content-Type': 'application/json', 'Authorization':'Bearer ' + this.token}});
  }

  obtenerByEmail(email : string) : Observable<PersonaModel> {
    return this.http.get<PersonaModel>(this.url + 'ByEmail/' + email, {headers: {'Content-Type': 'application/json', 'Authorization':'Bearer ' + this.token}});
  }

  obtenerTodo() : Observable<PersonaModel[]> {
    return this.http.get<PersonaModel[]>(this.url, {headers: {'Content-Type': 'application/json', 'Authorization':'Bearer ' + this.token}});
  }

  registrar(persona : PersonaModel) : Observable<PersonaModel>{
    return this.http.post<PersonaModel>(this.url, persona, {headers: {'Content-Type': 'application/json', 'Authorization':'Bearer ' + this.token}});
  }

  actualizar(persona : PersonaModel){
    return this.http.put(this.url + '/' + persona.id, persona, {headers: {'Content-Type': 'application/json', 'Authorization':'Bearer ' + this.token}});
  }

  eliminar(id : string){
    return this.http.delete(this.url + '/' + id, {headers: {'Content-Type': 'application/json', 'Authorization':'Bearer ' + this.token}});
  }
  
}
