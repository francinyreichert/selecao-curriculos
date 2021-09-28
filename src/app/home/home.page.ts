import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RH, GERENTE, SystemService } from '../system.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  username: string;
  senha: string;
  mensagem: string;

  constructor(private srv: SystemService, private router: Router) {}

  login() {
    try {
      this.srv.login(this.username, this.senha);
      if (this.srv.logado.perfil === RH) {
        this.router.navigate(['/cadastrar-curriculos']);
      }
      if (this.srv.logado.perfil === GERENTE) {
        this.router.navigate(['/lista-de-curriculos']);
      }
    } catch (error) {
      this.mensagem = error;
    }
    
  }
}
