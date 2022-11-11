import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministracionRoutingModule } from './administracion-routing.module';
import { CreateComponent } from './personas/create/create.component';
import { EditComponent } from './personas/edit/edit.component';
import { DeleteComponent } from './personas/delete/delete.component';
import { FindComponent } from './personas/find/find.component';
import { CreateProductComponent } from './productos/create-product/create-product.component';
import { EditProductComponent } from './productos/edit-product/edit-product.component';
import { DeleteProductComponent } from './productos/delete-product/delete-product.component';
import { FindProductComponent } from './productos/find-product/find-product.component';


@NgModule({
  declarations: [
    CreateComponent,
    EditComponent,
    DeleteComponent,
    FindComponent,
    CreateProductComponent,
    EditProductComponent,
    DeleteProductComponent,
    FindProductComponent
  ],
  imports: [
    CommonModule,
    AdministracionRoutingModule
  ]
})
export class AdministracionModule { }
