import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { PedidoComponent } from './components/pedido/pedido.component';
import { PersonaComponent } from './components/persona/persona.component';
import { ProductoComponent } from './components/producto/producto.component';
import { TestComponent } from './components/test/test.component';
import { IndexComponent } from './plantilla/index/index.component';

const routes: Routes = [
  { path: 'inicio', component: IndexComponent },
  { path: '', pathMatch: 'full', redirectTo: '/inicio' },
  { path: 'persona', component: PersonaComponent },
  { path: 'pedido', component: PedidoComponent },
  { path: 'producto', component: ProductoComponent },
  { path: 'test', component: TestComponent },
  { path: 'seguridad', loadChildren : () => import("./modulos/seguridad/seguridad.module").then( x => x.SeguridadModule ) },
  { path: 'administracion', loadChildren : () => import("./modulos/administracion/administracion.module").then( x => x.AdministracionModule ) },
  { path: 'pedidos', loadChildren : () => import("./modulos/pedidos/pedidos.module").then( x => x.PedidosModule ) },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
