import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventService } from 'src/app/services/event.service';
import { SeguridadService } from 'src/app/services/seguridad.service';

@Component({
  selector: 'app-cerrar-session',
  templateUrl: './cerrar-session.component.html',
  styleUrls: ['./cerrar-session.component.scss']
})
export class CerrarSessionComponent implements OnInit {

  constructor(private seguridadService : SeguridadService,
    private router : Router,
    private eventService : EventService ) { }

  ngOnInit(): void {
    //this.seguridadService.cerrarSession();
    this.eventService.controlSessionEvent.emit(false);
    this.seguridadService.eliminarSession();
    this.router.navigate(['']);
  }

}
