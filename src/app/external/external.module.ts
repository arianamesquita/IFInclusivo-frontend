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

@NgModule({
  declarations: [ 
    HomeComponent, 
    ForumComponent, 
    NapneComponent, 
    TopicosComponent, 
    ConvertelibrasComponent, 
    ModalCadastroComponent, 
    ModalLoginComponent, 
    ResultadoComponent
  ],
  imports: [
    CommonModule,
    ExternalRoutingModule,
    SharedModule,
    FormsModule
  ]
})
export class ExternalModule { }
