import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../../shared/shared.module';
import { TelaInicialRoutingModule } from './tela-inicial-routing.module';
import { HomeComponent } from './container/home/home.component';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    TelaInicialRoutingModule,
    SharedModule
  ],
  exports: [
    HomeComponent
  ]
})
export class TelaInicialModule { }
