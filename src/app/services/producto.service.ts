import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  url = environment.urlBackend + '/productos';

  constructor(private http : HttpClient) { }

  obtenerProductos(){
    return this.http.get(this.url, {headers: {'Content-Type': 'application/json'}});
  }

}
