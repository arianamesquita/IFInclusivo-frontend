import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InternalRoutingModule } from './internal-routing.module';
import { TelaForumComponent } from './views/tela-forum/tela-forum.component';
import { ContainersComponent } from './views/containers/containers.component';


@NgModule({
  declarations: [
    TelaForumComponent,
    ContainersComponent
  ],
  imports: [
    CommonModule,
    InternalRoutingModule
  ]
})
export class InternalModule { }
