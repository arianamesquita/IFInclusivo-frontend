import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TelaContainerRoutingModule } from './tela-container-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { ContainerComponent } from './container/container.component';
import { TelaInicialModule } from '../tela-inicial/tela-inicial.module';

@NgModule({
  declarations: [
    ContainerComponent
  ],
  imports: [
    CommonModule,
    TelaContainerRoutingModule,
    SharedModule,
    TelaInicialModule
  ]
})
export class TelaContainerModule { }

