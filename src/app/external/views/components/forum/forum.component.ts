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

  perguntas = [
    {
      usuario: "Usuário X",
      periodo: "Período 6",
      data: "11/12/2020",
      pergunta: "Question? Question? Question?",
      descricao: "The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.",
      respostas: [
        {
          usuario: "Usuário Y",
          periodo: "Período YY",
          data: "12/12/2020",
          resposta: "Resposta 1 para a pergunta."
        },
        {
          usuario: "Usuário Z",
          periodo: "Período ZZ",
          data: "13/12/2020",
          resposta: "Resposta 2 para a pergunta."
        }
      ]
    }
  ];

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
