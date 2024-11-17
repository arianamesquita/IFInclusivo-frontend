import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ExternalService } from '../../service/external.service';

@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.scss']
})
export class ForumComponent {

  categorias = [
    { nome: "Banco de Dados" },
    { nome: "Programação" },
    { nome: "Estrutura de Dados" },
    { nome: "Web" },
    { nome: "Redes" }
  ]
  form: FormGroup;
  mostrarRespostas = false;

  constructor(
    private readonly builder: FormBuilder,
    private readonly service: ExternalService ){
    this.form = this.builder.group({
      pesquisa: [null,]
    })
  }

  toggleRespostas(){
    this.mostrarRespostas = !this.mostrarRespostas;
  }

  getDataForum(){
    this.service.getAllForum();
  }
}
