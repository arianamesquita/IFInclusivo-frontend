import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceGeralService } from 'src/app/service/service-geral.service';

@Component({
  selector: 'app-topnavbar',
  templateUrl: './topnavbar.component.html',
  styleUrls: ['./topnavbar.component.scss']
})
export class TopnavbarComponent {

  constructor(
    private readonly router: Router,
    private readonly service: ServiceGeralService
  ) { }


  navigateTo(){
    this.router.navigate(['/home']);
  }

  emitOpenCadastro(){
    this.service.emitOpenModal();
  }
}
