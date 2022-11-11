import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AssignComponent } from './assign/assign.component';

const routes: Routes = [
  { path: 'realizar-pedido', component: AssignComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PedidosRoutingModule { }
