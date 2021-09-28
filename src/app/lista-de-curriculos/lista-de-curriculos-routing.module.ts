import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListaDeCurriculosPage } from './lista-de-curriculos.page';

const routes: Routes = [
  {
    path: '',
    component: ListaDeCurriculosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListaDeCurriculosPageRoutingModule {}
