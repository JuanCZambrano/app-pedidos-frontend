import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SeguridadService } from 'src/app/services/seguridad.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  subscripcionSession = new Subscription();
  sessionIniciada = false;
  
  constructor(private seguridadService : SeguridadService) { 
    this.subscripcionSession = this.seguridadService.sessionUsuarioObservable().subscribe( data => {
      this.sessionIniciada = data;
    })
  }

  ngOnInit(): void {

  }

}
