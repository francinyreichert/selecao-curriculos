import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListaDeCurriculosPageRoutingModule } from './lista-de-curriculos-routing.module';

import { ListaDeCurriculosPage } from './lista-de-curriculos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListaDeCurriculosPageRoutingModule
  ],
  declarations: [ListaDeCurriculosPage]
})
export class ListaDeCurriculosPageModule {}
