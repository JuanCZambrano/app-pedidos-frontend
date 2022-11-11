import { Component, OnInit } from '@angular/core';
import { PersonaModel } from 'src/app/models/personaModel';
import { FormularioService } from 'src/app/services/formulario.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit {

  titulo = "Registro de personas";
  nombre : string;
  apellido : string;
  correo : string
  celular : string
  password : string

  listadoPersonas = new Array<PersonaModel>();

  constructor(private formularioService : FormularioService) { 
    
  }

  ngOnInit(): void {
    
    this.formularioService.obtenerPersonas().subscribe( response => {
      this.listadoPersonas = Object.values(response)
    });

  }

  registrar(){

    let persona = new PersonaModel();
    persona.nombre = this.nombre;
    persona.apellido = this.apellido;
    persona.correo = this.correo;
    persona.celular = this.celular;
    persona.password = this.password;

    this.formularioService.registrarPersona(persona).subscribe( response =>{

      this.listadoPersonas.push(persona);

    });

  }

}
