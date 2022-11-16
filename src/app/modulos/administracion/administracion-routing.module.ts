import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './personas/create/create.component';
import { DeleteComponent } from './personas/delete/delete.component';
import { EditComponent } from './personas/edit/edit.component';
import { FindComponent } from './personas/find/find.component';
import { CreateProductComponent } from './productos/create-product/create-product.component';
import { DeleteProductComponent } from './productos/delete-product/delete-product.component';
import { EditProductComponent } from './productos/edit-product/edit-product.component';
import { FindProductComponent } from './productos/find-product/find-product.component';

const routes: Routes = [
  { path: 'persona-create', component: CreateComponent },
  { path: 'persona-delete/:id', component: DeleteComponent },
  { path: 'persona-edit/:id', component: EditComponent },
  { path: 'persona-find', component: FindComponent },
  { path: 'producto-create', component: CreateProductComponent },
  { path: 'producto-delete', component: DeleteProductComponent },
  { path: 'producto-edit', component: EditProductComponent },
  { path: 'producto-find', component: FindProductComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministracionRoutingModule { }
