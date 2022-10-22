import { Component, OnInit } from '@angular/core';
import { PersonaModel } from 'src/app/models/personaModel';
import { PersonasService } from 'src/app/services/personas.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  persona : PersonaModel;
  listadoPersonas = new Array<PersonaModel>();

  constructor(private personaService : PersonasService) { 
    this.persona = new PersonaModel();
  }

  ngOnInit(): void {

    this.personaService.obtenerPersonas().subscribe( data => {
      this.listadoPersonas = Object.values(data);
    });

  }

  registrar(){
    let persona = new PersonaModel();
    persona.nombre = this.persona.nombre;
    persona.apellido = this.persona.apellido;
    persona.correo = this.persona.correo;
    persona.celular = this.persona.celular;
    persona.password = this.persona.password;

    this.listadoPersonas.push(persona);
  }

}
