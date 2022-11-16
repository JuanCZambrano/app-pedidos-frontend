import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PadreHijoRoutingModule } from './padre-hijo-routing.module';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';



@NgModule({
  declarations: [
    HeaderComponent,
    BodyComponent,
    FooterComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    PadreHijoRoutingModule
  ]
})
export class PadreHijoModule { }
