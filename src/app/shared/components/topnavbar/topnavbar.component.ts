import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { ServiceGeralService } from 'src/app/service/service-geral.service';

@Component({
  selector: 'app-topnavbar',
  templateUrl: './topnavbar.component.html',
  styleUrls: ['./topnavbar.component.scss']
})
export class TopnavbarComponent implements OnInit {

  routerLink: string = '';

  buttons = [ 
    { nome: 'Fórum' },
    { nome: 'Libras' },
    { nome: 'Tópicos' }
  ];

  constructor(
    private readonly router: Router,
    private readonly service: ServiceGeralService
  ) {  }

  ngOnInit(): void {
    this.routerLink = this.router.url;
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.routerLink = event.url;
      }
    });
  }

  isRouteSelected(route: string): boolean {
    let currentRoute = this.router.url.substring(1);
    currentRoute = this.removeAcentos(currentRoute).toLowerCase();  
    route = this.removeAcentos(route).toLowerCase();
    if(currentRoute === 'convertelibras'){
      currentRoute = 'libras';
    }
    return currentRoute === route;
  }
  

  navigateTo(nome: string) {
    if (nome === 'Libras') {
      nome = 'convertelibras';
    }
    const rota = this.removeAcentos(nome).toLowerCase();
    this.router.navigate([`/${rota}`])
      .catch(err => console.error('Rota inválida:', err));
  }

  removeAcentos(str: string) {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g, "");
  }
  
  emitOpenCadastro(){
    this.service.emitOpenModal();
  }

  emitOpenLogin(){
    this.service.emitOpenLogin();
  }
}
