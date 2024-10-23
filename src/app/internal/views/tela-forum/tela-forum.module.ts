import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TelaForumRoutingModule } from './tela-forum-routing.module';
import { TelaForumComponent } from './containers/tela-forum/tela-forum.component';

@NgModule({
  declarations: [
    TelaForumComponent
  ],
  imports: [
    CommonModule,
    TelaForumRoutingModule
  ]
})
export class TelaForumModule { }
