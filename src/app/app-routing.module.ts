import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MovimentacaoNewComponent} from './components/movimentao-new/movimentao-new.component';
import {MovimentaoListComponent} from './components/movimentao-list/movimentao-list.component';

const routes: Routes = [
{path: 'movimentacoes-new', component: MovimentacaoNewComponent},
{path: 'movimentacoes', component: MovimentaoListComponent},
{path: '', redirectTo: 'movimentacoes', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
