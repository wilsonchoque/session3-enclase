import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BotonComponent } from './boton/boton.component';



@NgModule({
  declarations: [
    BotonComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    BotonComponent
  ]

})
export class FooterModule { }
