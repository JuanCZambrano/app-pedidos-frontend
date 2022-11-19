import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SeguridadService {

  url = environment.urlBackend;
  sessionIniciada = new BehaviorSubject<boolean>(false);
  token = environment.tokenName;

  constructor(private http : HttpClient) { 
    this.validarSession();
  }

  login(email : string, password : string){

    let datos = { 
                "correo": email,  
                "password": password 
              };

    return this.http.post(this.url + '/login', datos , {headers: {'Content-Type': 'application/json'}} );
  }

  enviarMail( to : string, subject : string, message : string){

    let datos = {
      "to": to,
      "subject": subject,
      "message": message
    }

    let token = localStorage.getItem(this.token);

    return this.http.post( this.url + '/enviarMail', datos, { headers : { 'Content-type' : 'application/json', 'Authorization' : 'Bearer '+ token } } );

  }

  crearSession( token : string){
    localStorage.setItem(this.token, token);
    this.sessionIniciada.next(true);
  }

  cerrarSession(){
    localStorage.removeItem(this.token);
    this.sessionIniciada.next(false);
  }

  eliminarSession(){
    localStorage.removeItem(this.token);
  }

  obtenerSession(){
    return localStorage.getItem(this.token);
  }

  validarSession(){
    if( this.obtenerSession() ){
      this.sessionIniciada.next(true);
    }
  }

  validarToken(){
    let session = this.obtenerSession();
    if( session ){
      //Conectarnos a backend para el validar el token
      return this.http.post(this.url + '/validarToken', session , {headers: {'Content-Type': 'application/json'}} ).subscribe( data => {
        return data;
      });
      
    }else{
      return false;
    }
  }

  sessionUsuarioObservable(){
    return this.sessionIniciada.asObservable();
  }

  AddLocalData(key: string, value : string){
    localStorage.setItem(key, value);
  }

  AddLocalDataJson(key: string, value : any){
    localStorage.setItem(key, JSON.stringify(value));
  }

  GetLocalData(key: string){
    return localStorage.getItem(key);
  }

  GetLocalDataJson(key: string){
    let obj = localStorage.getItem(key);
    if (obj)
      return JSON.parse( obj );
    return null;    
  }

  DeleteLocalData(key: string){
    localStorage.removeItem(key)
  }

}