import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TelaInicialRoutingModule } from './tela-inicial-routing.module';
import { ContainersComponent } from './containers/containers.component';


@NgModule({
  declarations: [
    ContainersComponent
  ],
  imports: [
    CommonModule,
    TelaInicialRoutingModule
  ]
})
export class TelaInicialModule { }
