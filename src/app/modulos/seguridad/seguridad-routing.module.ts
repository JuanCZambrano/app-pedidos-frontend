import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from 'src/app/components/page-not-found/page-not-found.component';
import { CambiarPasswordComponent } from './cambiar-password/cambiar-password.component';
import { CerrarSessionComponent } from './cerrar-session/cerrar-session.component';
import { LoginComponent } from './login/login.component';
import { RecuperarPasswordComponent } from './recuperar-password/recuperar-password.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'cambiar-password', component: CambiarPasswordComponent },
  { path: 'recuperar-password', component: RecuperarPasswordComponent },  
  { path: 'cerrar-session', component: CerrarSessionComponent }  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SeguridadRoutingModule { }
