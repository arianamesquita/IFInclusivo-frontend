import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContainerComponent } from './container/container.component';

const routes: Routes = [
  {path: '',
    component: ContainerComponent,
    children: [
      {path: '', redirectTo: 'home', pathMatch: 'full'},
      {path: 'home', loadChildren: () => import('../tela-inicial/tela-inicial.module').then(m => m.TelaInicialModule)}
    ]
  },
  { path: '', redirectTo: '/home', pathMatch:'full' },
  { path: '**', redirectTo: '/home' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TelaContainerRoutingModule { }
