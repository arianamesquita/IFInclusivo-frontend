import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExternalRoutingModule } from './external-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [ 
   ],
  imports: [
    CommonModule,
    ExternalRoutingModule,
    SharedModule
  ]
})
export class ExternalModule { }
