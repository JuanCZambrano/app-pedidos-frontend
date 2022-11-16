import { Component, OnInit } from '@angular/core';
import { PersonasService } from 'src/app/services/personas.service';
import { PersonaModel } from 'src/app/models/personaModel';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.scss']
})
export class PersonaComponent implements OnInit {

  persona : PersonaModel;
  listadoPersonas = new Array<PersonaModel>();
  titulo = 'Formulario de registro';

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

    //Validación de datos - Utilizar formularios reactivos
    
    this.listadoPersonas.push(persona);

    this.personaService.registrarPersona(persona).subscribe( response =>{

      this.listadoPersonas.push(persona);

    });

  }

}
