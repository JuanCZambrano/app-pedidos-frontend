import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { PersonaComponent } from './components/persona/persona.component';
import { PedidoComponent } from './components/pedido/pedido.component';
import { ProductoComponent } from './components/producto/producto.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TestComponent } from './components/test/test.component';
import { NavBarComponent } from './plantilla/nav-bar/nav-bar.component';
import { FooterComponent } from './plantilla/footer/footer.component';
import { HeaderComponent } from './plantilla/header/header.component';
import { IndexComponent } from './plantilla/index/index.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PersonaComponent,
    PedidoComponent,
    ProductoComponent,
    PageNotFoundComponent,
    TestComponent,
    NavBarComponent,
    FooterComponent,
    HeaderComponent,
    IndexComponent    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
