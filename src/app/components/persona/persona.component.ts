import { Component, OnInit } from '@angular/core';
import { PersonasService } from 'src/app/services/personas.service';
import { PersonaModel } from 'src/app/models/PersonaModel';

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
      //this.listadoPersona.push(data);
      console.log(data);
    })
  }

}
