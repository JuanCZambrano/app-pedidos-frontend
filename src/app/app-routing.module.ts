import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormularioComponent } from './components/formulario/formulario.component';
import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { PedidoComponent } from './components/pedido/pedido.component';
import { PersonaComponent } from './components/persona/persona.component';
import { ProductoComponent } from './components/producto/producto.component';
import { TestComponent } from './components/test/test.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'persona', component: PersonaComponent },
  { path: 'pedido', component: PedidoComponent },
  { path: 'producto', component: ProductoComponent },
  { path: 'test', component: TestComponent },
  { path: 'formulario', component: FormularioComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
