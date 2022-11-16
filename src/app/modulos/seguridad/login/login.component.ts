import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MenuModel } from 'src/app/models/menuModel';
import { EventService } from 'src/app/services/event.service';
import { SeguridadService } from 'src/app/services/seguridad.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public formulario: FormGroup;

  constructor(private fb : FormBuilder, 
    private seguridadService : SeguridadService,
    private router : Router,
    private eventService : EventService ) { 

    this.formulario = fb.group({
      email: ['', [Validators.required, Validators.email, Validators.minLength(8), Validators.maxLength(100) ] ],
      password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(50)] ]
    });

  }

  ngOnInit(): void {
    //Indicar valor por defecto
    //this.formulario.controls["email"].setValue("admin@gmail.com");
  }

  login(){
    
    let email = this.formulario.controls["email"].value;
    let password = this.formulario.controls["password"].value;

    this.seguridadService.login(email, password).subscribe( data => {
      let datos = Object.values(data);
      
      //Almacenar el token
      this.seguridadService.crearSession(datos[1]);

      setTimeout( () => {
        this.router.navigate(['/pedidos/realizar-pedido'])
        this.generarMenus( 'admin' );        
      }, 3000)

    }, error => {
      switch(error.status){
        case 401:
            alert("Usuario o password no son validos");
            break;
        case 402:
            alert("No tiene permiso");
            break;
        default:
            alert("Error no conocido");
      }
    });    

  }

  generarMenus( rol : string){
    let menus = new Array<MenuModel>();

    //Menus se cargan de acuerdo a lo obtenido en base de datos y el rol

    switch(rol){
      case 'admin':
        menus.push( { "nombre" : "Gestión personas", "path" : "/administracion/personas" } );
        menus.push( { "nombre" : "Gestión productos", "path" : "/administracion/productos" } );
        menus.push( { "nombre" : "Gestión pedidos", "path" : "/pedidos/realizar-pedido" } );
        menus.push( { "nombre" : "Cerrar sesión", "path" : "/seguridad/cerrar-session" } );
        break;
      default :
        break;
    }

    this.eventService.ListadoMenusEvent.emit(menus);

  }

}