import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TelaForumRoutingModule } from './tela-forum-routing.module';
import { ContainersComponent } from './containers/containers.component';


@NgModule({
  declarations: [
    ContainersComponent
  ],
  imports: [
    CommonModule,
    TelaForumRoutingModule
  ]
})
export class TelaForumModule { }
