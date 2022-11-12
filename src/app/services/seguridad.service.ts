import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SeguridadService {

  url = "http://localhost:3001/login";
  sessionIniciada = new BehaviorSubject<boolean>(false);
  session = "token";

  constructor(private http : HttpClient) { 
    this.validarSession();
  }

  login(email : string, password : string){

    let datos = { 
                "correo": email,  
                "password": password 
              };

    return this.http.post(this.url, datos , {headers: {'Content-Type': 'application/json'}} );
  }

  cerrarSession(){
    localStorage.removeItem(this.session);
    this.sessionIniciada.next(false);
  }

  almacenar(llave: string, valor : string){
    localStorage.setItem(llave, valor);
  }

  almacenarJson(llave: string, valor : any){
    localStorage.setItem(llave, JSON.stringify(valor));
  }

  obtener(llave: string){
    return localStorage.getItem(llave);
  }

  obtenerJson(llave: string){
    let obj = localStorage.getItem(llave);
    if (obj)
      return JSON.parse( obj );
    return null;    
  }

  validarSession(){
    if( this.obtener(this.session) ){
      this.sessionIniciada.next(true);
    }
  }

  sessionUsuarioObservable(){
    return this.sessionIniciada.asObservable();
  }

}