import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PersonasService {

  url: string = "http://localhost:3001/personas";

  constructor(public http: HttpClient) { }

  obtenerPersonas(){
    return this.http.get(this.url, {headers: {'Content-Type': 'application/json'}});
  }
  
}
