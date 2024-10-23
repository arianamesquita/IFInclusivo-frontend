import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', loadChildren: () => import ('./views/tela-inicial/tela-inicial.module').then(m => m.TelaInicialModule)},
  {path: 'forum', loadChildren: () => import('../internal/internal.module').then(m => m.InternalModule)}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExternalRoutingModule { }
