import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TelaInicialRoutingModule } from './tela-inicial-routing.module';
import { TelaInicialComponent } from './containers/tela-inicial/tela-inicial.component';

@NgModule({
  declarations: [
    TelaInicialComponent
  ],
  imports: [
    CommonModule,
    TelaInicialRoutingModule
  ],
  exports: [
    TelaInicialComponent
  ]
})
export class TelaInicialModule { }
