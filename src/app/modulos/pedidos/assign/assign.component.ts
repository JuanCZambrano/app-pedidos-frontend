import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { SeguridadService } from 'src/app/services/seguridad.service';

@Component({
  selector: 'app-assign',
  templateUrl: './assign.component.html',
  styleUrls: ['./assign.component.scss']
})
export class AssignComponent implements OnInit {

  sessionIniciada = false;
  subscripcionSession = new Subscription();

  constructor( private seguridadService : SeguridadService,
              private router : Router ) { }

  ngOnInit(): void {
    
    this.subscripcionSession = this.seguridadService.sessionUsuarioObservable().subscribe( data => {
      this.sessionIniciada = data;

      if(!this.sessionIniciada){
        this.router.navigate(['/seguridad/login'])
      }

    })

  }

}
