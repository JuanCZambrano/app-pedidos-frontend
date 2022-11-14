import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SeguridadService {

  url = "http://localhost:3001/";
  sessionIniciada = new BehaviorSubject<boolean>(false);
  token = "token";

  constructor(private http : HttpClient) { 
    this.validarSession();
  }

  login(email : string, password : string){

    let datos = { 
                "correo": email,  
                "password": password 
              };

    return this.http.post(this.url + 'login', datos , {headers: {'Content-Type': 'application/json'}} );
  }

  enviarMail(){

    let datos = {
      "to": "string",
      "subject": "string",
      "message": "string"
    }

    let token = localStorage.getItem(this.token);

    return this.http.post( this.url + 'enviarMail', datos, { headers : { 'Content-type' : 'application/json', 'Authorization' : 'Bearer '+ token } } );

  }

  crearSession( token : string){
    localStorage.setItem(this.token, token);
    this.sessionIniciada.next(true);
  }

  cerrarSession(){
    localStorage.removeItem(this.token);
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
    if( this.obtener(this.token) ){
      this.sessionIniciada.next(true);
    }
  }

  sessionUsuarioObservable(){
    return this.sessionIniciada.asObservable();
  }

}