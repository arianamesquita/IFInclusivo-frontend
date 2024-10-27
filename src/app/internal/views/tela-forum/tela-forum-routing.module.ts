import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TelaForumComponent } from './container/tela-forum/tela-forum.component';

const routes: Routes = [
  { path: '', component: TelaForumComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TelaForumRoutingModule { }
