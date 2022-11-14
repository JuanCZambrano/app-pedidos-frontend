import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SeguridadService } from 'src/app/services/seguridad.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  @Input() nombreMenu: string;
  
  sessionIniciada = false;
  subscripcionSession = new Subscription();

  constructor( private seguridadService : SeguridadService ) { }

  ngOnInit(): void {
    
    this.subscripcionSession = this.seguridadService.sessionUsuarioObservable().subscribe( data => {
      this.sessionIniciada = data;
    })

  }

}
