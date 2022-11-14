import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
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

  constructor( private seguridadService : SeguridadService ) { }

  ngOnInit(): void {
    
    this.subscripcionSession = this.seguridadService.sessionUsuarioObservable().subscribe( data => {
      this.sessionIniciada = data;
    })

  }

  //Capturar mensaje del hijo
  ngAfterViewInit() {
    this.mensajeHijo = this.logo.mensaje;
  }

  revisarHijo(){
    this.mensajeHijo = this.logo.mensaje;
  }

}
