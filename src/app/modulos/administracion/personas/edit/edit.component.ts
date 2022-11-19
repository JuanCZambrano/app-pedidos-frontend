import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PersonaModel } from 'src/app/models/personaModel';
import { PersonasService } from 'src/app/services/personas.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  id : string;
  persona : PersonaModel;
  titulo = 'Formulario de actualización';

  constructor(private router: Router, 
            private route : ActivatedRoute,
            private personaService : PersonasService) { 
    this.persona = new PersonaModel();

  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params["id"];

    this.personaService.obtener(this.id).subscribe( data => {
      this.persona = data;
    });

  }

  actualizar(){
    let persona = new PersonaModel();
    persona.nombre = this.persona.nombre;
    persona.apellido = this.persona.apellido;
    persona.correo = this.persona.correo;
    persona.celular = this.persona.celular.toString();
    persona.password = this.persona.password;
    persona.id = this.persona.id;

    //Validación de datos - Utilizar formularios reactivos
    let error = this.validarDatos(persona);
    if( error  != "" ){
      alert(error);
      return;
    } 

    this.personaService.actualizar(persona).subscribe( data => {
      alert("Se actualizo la persona");
      this.router.navigate(['/persona']);
    }, error => {
      alert("La persona no existe");
    })

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

}
