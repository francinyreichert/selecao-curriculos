import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CadastrarCurriculosPage } from './cadastrar-curriculos.page';

const routes: Routes = [
  {
    path: '',
    component: CadastrarCurriculosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CadastrarCurriculosPageRoutingModule {}
