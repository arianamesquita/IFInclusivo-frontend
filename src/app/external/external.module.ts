import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExternalRoutingModule } from './external-routing.module';
import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from './views/components/home/home.component';
import { ForumComponent } from './views/components/forum/forum.component';
import { NapneComponent } from './views/components/napne/napne.component';
import { TopicosComponent } from './views/components/topicos/topicos.component';
import { ConvertelibrasComponent } from './views/components/convertelibras/convertelibras.component';
import { FormsModule } from '@angular/forms';
import { ModalCadastroComponent } from './views/components/modais/modal-cadastro/modal-cadastro.component';
import { ModalLoginComponent } from './views/components/modais/modal-login/modal-login.component';
import { ResultadoComponent } from './views/components/convertelibras/resultado/resultado.component';
import { MidiaComponent } from './views/components/convertelibras/midia/midia.component';

import { SafeUrlPipe } from './views/components/convertelibras/midia/safe-url.pipe';
import { TopicoslibrasComponent } from './views/components/convertelibras/topicoslibras/topicoslibras.component';
@NgModule({
  declarations: [ 
    HomeComponent, 
    ForumComponent, 
    NapneComponent, 
    TopicosComponent, 
    ConvertelibrasComponent, 
    ModalCadastroComponent, 
    ModalLoginComponent, 
    ResultadoComponent, 
    MidiaComponent,
    SafeUrlPipe,
    TopicoslibrasComponent,
  ],
  imports: [
    CommonModule,
    ExternalRoutingModule,
    SharedModule,
    FormsModule
  ],
  exports: [
    ResultadoComponent, // Exporta o ResultadoComponent
    MidiaComponent,
    TopicoslibrasComponent
  ],
})
export class ExternalModule { }
