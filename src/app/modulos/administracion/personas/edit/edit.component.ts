import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
  titulo = 'Formulario de actualización';
  formulario : FormGroup;

  constructor(private router: Router, 
            private activatedRoute : ActivatedRoute,
            private personaService : PersonasService,
            private fb : FormBuilder) { 

    this.formulario = fb.group({
      nombre : ['', [ Validators.required, Validators.minLength(3), Validators.maxLength(50) ] ],
      apellido : ['', [ Validators.required, Validators.minLength(3), Validators.maxLength(50) ] ],
      email : ['', [ Validators.required, Validators.minLength(10), Validators.maxLength(100), Validators.email ] ],
      celular : ['', [ Validators.required, Validators.minLength(7), Validators.maxLength(12) ] ],
      password : ['', [ Validators.required, Validators.minLength(8), Validators.maxLength(200) ] ],
    });

  }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params["id"];  
    
    this.personaService.obtener(this.id).subscribe( data => {
      this.formulario.controls["nombre"].setValue(data.nombre);
      this.formulario.controls["apellido"].setValue(data.apellido);
      this.formulario.controls["email"].setValue(data.correo);
      this.formulario.controls["celular"].setValue(data.celular);
      this.formulario.controls["password"].setValue(data.password);      
    });

  }

  actualizar(){
    
    let persona = new PersonaModel();

    persona.id = this.id;
    persona.nombre = this.formulario.controls["nombre"].value;
    persona.apellido = this.formulario.controls["apellido"].value;
    persona.correo = this.formulario.controls["email"].value;
    persona.celular = this.formulario.controls["celular"].value.toString();
    persona.password = this.formulario.controls["password"].value;

    this.personaService.actualizar(persona).subscribe( data => {
      alert("Se actualizo la persona");
      this.router.navigate(['/administracion/persona-create']);
    }, error => {
      alert("La persona no existe");
    })

  }

}
