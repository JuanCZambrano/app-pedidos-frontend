import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MenuModel } from 'src/app/models/menuModel';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() menu1 : string;
  @Input() menu2 : string;
  @Output() mensajeEmit = new EventEmitter<string>();
  @Input() listadoMenus : MenuModel[];

  constructor() { }

  ngOnInit(): void {
  }

  enviarMensajePadre(){
    this.mensajeEmit.emit("Mensaje enviado desde el hijo")
  }

}
