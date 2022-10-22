import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  url = "http://localhost:3001/productos";

  constructor(private http : HttpClient) { }

  obtenerProductos(){
    return this.http.get(this.url, {headers: {'Content-Type': 'application/json'}});
  }

}
