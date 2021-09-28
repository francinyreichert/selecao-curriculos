import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'cadastrar-curriculos',
    loadChildren: () => import('./cadastrar-curriculos/cadastrar-curriculos.module').then( m => m.CadastrarCurriculosPageModule)
  },
  {
    path: 'lista-de-curriculos',
    loadChildren: () => import('./lista-de-curriculos/lista-de-curriculos.module').then( m => m.ListaDeCurriculosPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
