import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PersonaModel } from 'src/app/models/personaModel';
import { PersonasService } from 'src/app/services/personas.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  titulo = 'Formulario de registro';
  formulario : FormGroup;
  listadoPersonas = new Array<PersonaModel>();

  constructor(private fb : FormBuilder, 
              private personaService : PersonasService) { 

    this.formulario = fb.group({
      nombre : ['', [ Validators.required, Validators.minLength(3), Validators.maxLength(50) ] ],
      apellido : ['', [ Validators.required, Validators.minLength(3), Validators.maxLength(50) ] ],
      email : ['', [ Validators.required, Validators.minLength(10), Validators.maxLength(100), Validators.email ] ],
      celular : ['', [ Validators.required, Validators.minLength(7), Validators.maxLength(12) ] ],
      password : ['', [ Validators.required, Validators.minLength(8), Validators.maxLength(50) ] ],
    });

  }

  ngOnInit(): void {

    this.personaService.obtenerTodo().subscribe( data => {
      this.listadoPersonas = data;
    })
  }

  registrar(){
    
    let persona = new PersonaModel();

    persona.nombre = this.formulario.controls["nombre"].value;
    persona.apellido = this.formulario.controls["apellido"].value;
    persona.correo = this.formulario.controls["email"].value;
    persona.celular = this.formulario.controls["celular"].value.toString();
    persona.password = this.formulario.controls["password"].value;

    this.personaService.registrar(persona).subscribe( result => {
      alert("Se inserto la persona");
      this.listadoPersonas.push(result);
      this.limpiarFormulario();
    }, error => {
      alert("No se logro insertar la persona");
    })

  }

  limpiarFormulario(){
    this.formulario.reset();
  }

  eliminar(id : string){
    
    if( confirm("¿Desea eliminar la persona?") ){
      
      this.personaService.eliminar(id).subscribe( result =>{
        alert("Se elimino la persona");
        /*
        //Primera forma: Leer los datos de base de datos
        this.personaService.obtenerTodo().subscribe( data => {
          this.listadoPersonas = data;
        });
        */
        //Segunda forma : Eliminar del listado la persona        
        this.listadoPersonas = this.listadoPersonas.filter( x => !x.id.includes(id) );

      }, error => {
        alert("No se logro eliminar la persona");
      })

    }else{
      alert("No se va a eliminar el usuario")
    }

  }

}
