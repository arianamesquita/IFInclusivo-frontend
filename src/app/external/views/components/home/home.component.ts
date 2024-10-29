import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  
  buttons = [
    {icon: 'love', name: 'NAPNE', info: 'Orientação e Sensibilização', style: 'line1'},
    {icon: 'home_topicos', name: 'TÓPICOS', info: 'Apoio Pedagógico', style: 'line2'},
    {icon: 'home_forum', name: 'FÓRUM', info: 'Apoio Inclusivo', style: 'line3'},
    {icon: 'home_libras', name: 'CONVERTE LIBRAS', info: 'Ambiente Inclusivo', style: 'line4'},
  ]


  constructor(private readonly router: Router) { }

  navigateTo(nome: string) {
    const rota = this.removeAcentos(nome).toLowerCase();
    this.router.navigate([`/${rota}`])
      .catch(err => console.error('Rota inválida:', err));
  }

  removeAcentos(str: string) {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g, "");
  }

}
