import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.scss']
})
export class LogoComponent implements OnInit {

  mensaje : string = 'Logo cargado';

  constructor() { }

  ngOnInit(): void {
  }

  enviarMensaje(){
    this.mensaje = "Cambio mensaje";
  }

}
