import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-logo-alt',
  templateUrl: './logo-alt.component.html',
  styleUrls: ['./logo-alt.component.scss']
})
export class LogoAltComponent implements OnInit {

  mensaje : string = 'Logo alt';
  @Output() mensajeEmit = new EventEmitter<string>();

  constructor() { 
    
  }

  ngOnInit(): void {
    this.mensajeEmit.emit(this.mensaje);
  }

  enviarMensaje(){
    this.mensaje = "Cambio mensaje logo alt";
    this.mensajeEmit.emit(this.mensaje);
  }

}
