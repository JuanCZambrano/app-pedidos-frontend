import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SeguridadRoutingModule } from './seguridad-routing.module';
import { LoginComponent } from './login/login.component';
import { CambiarPasswordComponent } from './cambiar-password/cambiar-password.component';
import { RecuperarPasswordComponent } from './recuperar-password/recuperar-password.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CerrarSessionComponent } from './cerrar-session/cerrar-session.component';


@NgModule({
  declarations: [
    LoginComponent,
    CambiarPasswordComponent,
    RecuperarPasswordComponent,
    CerrarSessionComponent
  ],
  imports: [
    CommonModule,
    SeguridadRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SeguridadModule { }
