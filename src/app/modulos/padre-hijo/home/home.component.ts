import { Component, OnInit } from '@angular/core';
import { MenuModel } from 'src/app/models/menuModel';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  mensajeMenu1 = 'Otro Menu 1';
  mensajeMenu2 = 'Otro Menu 2';
  mensajeRecibido = '';

  listadoMenus = Array<MenuModel>();

  constructor() { }

  ngOnInit(): void {
    this.listadoMenus.push( { "nombre" : "Menu dinamico 1", "path" : "/menuFake1" });
    this.listadoMenus.push( { "nombre" : "Menu dinamico 2", "path" : "/menuFake2" });
    this.listadoMenus.push( { "nombre" : "Menu dinamico 3", "path" : "/menuFake3" });
  }

  enviarMensaje($event : any){
    this.mensajeMenu1 = $event.target.value;
  }

  recibirMensaje($event : any){
    this.mensajeRecibido = $event
  }

}
