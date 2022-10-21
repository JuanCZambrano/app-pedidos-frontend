import { Component, OnInit } from '@angular/core';
import { PersonasService } from 'src/app/services/personas.service';
import { PersonaModel } from 'src/app/models/personaModel';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.scss']
})
export class PersonaComponent implements OnInit {

  listadoPersona = new Array<PersonaModel>();

  constructor(private personaService: PersonasService) { }

  ngOnInit(): void {
    this.personaService.obtenerPersonas().subscribe( data => {
      this.listadoPersona = Object.values(data);
      console.log(this.listadoPersona);
    })
  }

}
