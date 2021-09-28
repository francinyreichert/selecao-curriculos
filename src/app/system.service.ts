import { Injectable } from '@angular/core';

export const RH = 1;
export const GERENTE = 2;
export const DISPONIVEL = "Disponível";
export const INDISPONÍVEL = "Indisponível";

@Injectable({
  providedIn: 'root'
})
export class SystemService {

  logado: any;
  usuarios: any[];
  evento: any[];
  curriculos: any[];

  constructor() { 
    this.usuarios = [
      {
        id: 1, 
        nome: 'Ana Clara', 
        username: 'ana.clara', 
        senha: '123456',
        perfil: RH
      },
      { 
        id: 2, 
        nome: 'Patricia Moreira', 
        username: 'patricia.moreira', 
        senha: '123456',
        perfil: GERENTE
      }
    ];

    this.curriculos = [
      {
        nomeCandidato: 'Arthur Smith',
        vagaPretendida: 'Desenvolvedor',
        gerenteAvaliador: 'Hugh Jackson',
        formacaoEducacional: 'Ciência da Computação',
        experienciaProfissional: 'Desenvolvedor na Unisinos',
        nivelIngles: 1,
        status: false
      }
    ]
    this.logado = null;
    this.evento = null;
  }

  login(username: string, senha: string) {
    for (let index = 0; index < this.usuarios.length; index++) {
      const usr = this.usuarios[index];
      if ((usr.username === username) && (usr.senha === senha)) {
        this.logado = usr;
        return;
      }
    }
    throw new Error("Usuário ou senha inválida.");
  }

  salvarCurriculo(nomeCandidato, vagaPretendida, gerenteAvaliador, formacaoEducacional, experienciaProfissional, nivelIngles)  {
    if (!nomeCandidato || nomeCandidato === '') {
      throw new Error ('Nome do candidato deve ser preenchido');
    }

    if (!vagaPretendida || vagaPretendida === '') {
      throw new Error ('Vaga pretendida deve ser preenchida');
    }
    
    this.curriculos.push( {
      nomeCandidato: nomeCandidato,
      vagaPretendida: vagaPretendida,
      gerenteAvaliador: gerenteAvaliador,
      formacaoEducacional: formacaoEducacional,
      experienciaProfissional: experienciaProfissional,
      nivelIngles: nivelIngles,
      status: DISPONIVEL
    });
  }

}
