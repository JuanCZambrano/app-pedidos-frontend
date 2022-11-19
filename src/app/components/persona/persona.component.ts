import { Component, OnInit } from '@angular/core';
import { PersonasService } from 'src/app/services/personas.service';
import { PersonaModel } from 'src/app/models/personaModel';
import { EventService } from 'src/app/services/event.service';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.scss']
})
export class PersonaComponent implements OnInit {

  persona : PersonaModel;
  listadoPersonas = new Array<PersonaModel>();
  titulo = 'Formulario de registro';
  listadoGenero = [ { "value" : "F", "text" : "Femenino" },
                    { "value" : "M", "text" : "Masculino" },
                    { "value" : "X", "text" : "No definido" } ];
  
  activarMenus = false;

  constructor(private personaService : PersonasService,
    private eventService : EventService) { 
    this.persona = new PersonaModel();
  }

  ngOnInit(): void {

    this.personaService.obtenerTodo().subscribe( data => {
      this.listadoPersonas = data;
    });

  }

  registrar(){
    let persona = new PersonaModel();
    persona.nombre = this.persona.nombre;
    persona.apellido = this.persona.apellido;
    persona.correo = this.persona.correo;
    persona.celular = this.persona.celular.toString();
    persona.password = this.persona.password;

    //Validación de datos - Utilizar formularios reactivos
    let error = this.validarDatos(persona);
    if( error  != "" ){
      alert(error);
      return;
    } 
    
    this.personaService.obtenerByEmail(persona.correo).subscribe( data => {
      if( data == null){
        this.personaService.registrar(persona).subscribe( response =>{

          this.listadoPersonas.push(response);
          this.limpiar();
          alert("Se inserto la persona");
          
        });
      }else{
        alert("Email ya existe para otro usuario");
      }
    });
    
  }

  eliminar( id : string){
    if( confirm("¿ Desea eliminar la persona ?") ){
      
      this.personaService.eliminar(id).subscribe( result => {
        alert("Se elimino la persona");
        this.personaService.obtenerTodo().subscribe( data => {
          this.listadoPersonas = data;
        });
      }, error => {
        alert("La persona no existe");
      })

    }
  }

  limpiar(){
    this.persona = new PersonaModel();
  }

  validarDatos(persona : PersonaModel) : string{
    if(persona.nombre == undefined || persona.nombre.length <= 5){
      return "Debe diligenciar un nombre";
    }
    if(persona.apellido == undefined || persona.apellido.length <= 2){
      return "Debe diligenciar un apellido";
    }
    if(persona.correo == undefined || persona.correo.length <= 10 || !persona.correo.includes("@") ){
      return "Debe diligenciar un correo valido";      
    }
    if(persona.celular == undefined || persona.celular.length <= 10){
      return "Debe diligenciar un celular";
    }
    if(persona.password == undefined || persona.password.length <= 8){
      return "Debe diligenciar un password valido";
    }
    return "";
  }

  modificarMenu(){
    if (this.activarMenus){
      this.activarMenus = false;
    }else{
      this.activarMenus = true;
    }

    this.eventService.controlSessionEvent.emit(this.activarMenus)
  }

}
