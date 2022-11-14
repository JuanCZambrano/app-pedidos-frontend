import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
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
  subscripcionSession = new Subscription();
  mensajeHijo : string;

  menus : string = "";

  constructor( private seguridadService : SeguridadService,
              private eventService: EventService ) { }

  ngOnInit(): void {
    
    this.subscripcionSession = this.seguridadService.sessionUsuarioObservable().subscribe( data => {
      this.sessionIniciada = data;
    })

    this.eventService.MenusEvent.subscribe( data => {
      console.log(data);
      this.menus = data;
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
    alert(mensaje)
  }

}
