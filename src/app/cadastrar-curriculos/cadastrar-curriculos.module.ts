import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CadastrarCurriculosPageRoutingModule } from './cadastrar-curriculos-routing.module';

import { CadastrarCurriculosPage } from './cadastrar-curriculos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CadastrarCurriculosPageRoutingModule
  ],
  declarations: [CadastrarCurriculosPage]
})
export class CadastrarCurriculosPageModule {}
