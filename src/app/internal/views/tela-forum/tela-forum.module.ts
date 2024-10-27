import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TelaForumRoutingModule } from './tela-forum-routing.module';
import { TelaForumComponent } from './container/tela-forum/tela-forum.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    TelaForumComponent
  ],
  imports: [
    CommonModule,
    TelaForumRoutingModule,
    SharedModule
  ]
})
export class TelaForumModule { }
