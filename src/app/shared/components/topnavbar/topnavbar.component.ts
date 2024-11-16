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

  constructor(
    private readonly router: Router,
    private readonly service: ServiceGeralService
  ) {  }

  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.routerLink = event.url; // Atualiza a rota atual
      }
    });
  }

  navigateTo(){
    this.router.navigate(['/home']);
  }

  emitOpenCadastro(){
    this.service.emitOpenModal();
  }

  emitOpenLogin(){
    this.service.emitOpenLogin();
  }
}
