import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SeguridadService } from 'src/app/services/seguridad.service';

@Component({
  selector: 'app-cerrar-session',
  templateUrl: './cerrar-session.component.html',
  styleUrls: ['./cerrar-session.component.scss']
})
export class CerrarSessionComponent implements OnInit {

  constructor(private seguridadService : SeguridadService,
    private router : Router ) { }

  ngOnInit(): void {
    this.seguridadService.cerrarSession();
    this.router.navigate(['']);
  }

}
