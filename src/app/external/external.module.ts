import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExternalRoutingModule } from './external-routing.module';
import { TelaInicioComponent } from './views/tela-inicio/tela-inicio.component';


@NgModule({
  declarations: [
    TelaInicioComponent
  ],
  imports: [
    CommonModule,
    ExternalRoutingModule
  ]
})
export class ExternalModule { }
