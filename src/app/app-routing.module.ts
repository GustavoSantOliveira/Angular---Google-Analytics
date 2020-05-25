import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AvaliacaoComponent } from './avaliacao/avaliacao.component';


const routes: Routes = [
  {
    path: 'avaliacao',
    component: AvaliacaoComponent,
    data: { title: 'Avaliação' }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
