import { Component, OnInit } from '@angular/core';
import { SystemService } from '../system.service';

@Component({
  selector: 'app-cadastrar-curriculos',
  templateUrl: './cadastrar-curriculos.page.html',
  styleUrls: ['./cadastrar-curriculos.page.scss'],
})
export class CadastrarCurriculosPage implements OnInit {

  nomeCandidato: string;
  vagaPretendida: string;
  gerenteAvaliador: string;
  formacaoEducacional: string;
  experienciaProfissional: string;
  erro: string;
  sucesso: string;
  nivelIngles: number;
  
  niveisIngles = [
    { desc: 'Iniciante', val: 0},
    { desc: 'Médio', val: 1},
    { desc: 'Avançado', val: 2}
  ];
  constructor(private srv: SystemService) { }

  ngOnInit() {

  }

  cadastrar() {
    try {
      this.srv.salvarCurriculo(
        this.nomeCandidato, 
        this.vagaPretendida, 
        this.gerenteAvaliador, 
        this.formacaoEducacional, 
        this.experienciaProfissional,
        this.nivelIngles);
      this.sucesso = "Currículo cadastrado com sucesso!";
    } catch (error) {
      this.erro = error;
    }
  }

}
