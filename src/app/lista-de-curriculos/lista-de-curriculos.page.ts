import { Component, OnInit } from '@angular/core';
import { SystemService } from '../system.service';

@Component({
  selector: 'app-lista-de-curriculos',
  templateUrl: './lista-de-curriculos.page.html',
  styleUrls: ['./lista-de-curriculos.page.scss'],
})
export class ListaDeCurriculosPage implements OnInit {

  curriculos: any[];
  curriculosDisponiveis: any[];
  status: string;

  resultados = [
    { desc: 'Não selecionado', val: 0},
    { desc: 'Selecionado', val: 1}
  ];

  constructor(private srv: SystemService) { }

  ngOnInit() {
    this.curriculos = this.srv.curriculos;
    this.curriculosDisponiveis = this.getCurriculosDisponiveis();
  }

  getCurriculosDisponiveis(): any[] {
    return this.curriculos.filter((curriculo) => curriculo.status === 'Disponível');
  }

  atualizarStatus() {
    this.srv.atualizarCurriculo(this.status);
  }

}
