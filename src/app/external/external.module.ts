import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExternalRoutingModule } from './external-routing.module';
import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from './views/components/home/home.component';
import { ForumComponent } from './views/components/forum/forum.component';
import { NapneComponent } from './views/components/napne/napne.component';
import { TopicosComponent } from './views/components/topicos/topicos.component';
import { ConvertelibrasComponent } from './views/components/convertelibras/convertelibras.component';

@NgModule({
  declarations: [ 
    HomeComponent, ForumComponent, NapneComponent, TopicosComponent, ConvertelibrasComponent
  ],
  imports: [
    CommonModule,
    ExternalRoutingModule,
    SharedModule
  ]
})
export class ExternalModule { }
