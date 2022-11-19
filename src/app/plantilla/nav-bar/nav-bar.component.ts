import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { MenuModel } from 'src/app/models/menuModel';
import { EventService } from 'src/app/services/event.service';
import { SeguridadService } from 'src/app/services/seguridad.service';
import { LogoComponent } from '../logo/logo.component';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit, AfterViewInit  {

  @Input() nombreMenu: string;
  @ViewChild(LogoComponent) logo : any;
  
  sessionIniciada = false;
  mensajeHijo : string;

  menus : string = "";
  listadoMenus = new Array<MenuModel>();

  constructor( private seguridadService : SeguridadService,
              private eventService: EventService ) { }

  ngOnInit(): void {
    
    /*
    this.seguridadService.sessionUsuarioObservable().subscribe( data => {
      this.sessionIniciada = data;
    })*/

    this.eventService.controlSessionEvent.subscribe( data => {
      this.sessionIniciada = data;
      console.log(this.sessionIniciada)
    });
        
    this.eventService.ListadoMenusEvent.subscribe( menus => {
      this.listadoMenus = menus;
    });

  }

  //Capturar mensaje del hijo
  ngAfterViewInit() {
    this.mensajeHijo = this.logo.mensaje;
  }

  revisarHijo(){
    this.mensajeHijo = this.logo.mensaje;
  }

  obtenerMensaje(mensaje : any){
    console.log(mensaje)
  }

}
