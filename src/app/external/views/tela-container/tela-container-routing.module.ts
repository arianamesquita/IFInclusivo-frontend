import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContainerComponent } from './container/container.component';
import { HomeComponent } from '../components/home/home.component';
import { ForumComponent } from '../components/forum/forum.component';
import { NapneComponent } from '../components/napne/napne.component';
import { TopicosComponent } from '../components/topicos/topicos.component';
import { ConvertelibrasComponent } from '../components/convertelibras/convertelibras.component';

const routes: Routes = [
  {path: '',
    component: ContainerComponent,
    children: [
      {path: '', redirectTo: 'home', pathMatch: 'full'},
      {path: 'home', component: HomeComponent},
      {path: 'forum', component: ForumComponent},
      {path: 'napne', component: NapneComponent},
      {path: 'topicos', component: TopicosComponent},
      {path: 'convertelibras', component: ConvertelibrasComponent}
    ]
  },
  { path: '**', redirectTo: '/home' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TelaContainerRoutingModule { }
