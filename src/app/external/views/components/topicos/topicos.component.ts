import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ExternalService } from '../../service/external.service';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-topicos',
  templateUrl: './topicos.component.html',
  styleUrls: ['./topicos.component.scss']
})
export class TopicosComponent {
  private readonly unsubscribeAll: Subject<any[]> = new Subject();
  form: FormGroup;
  start: boolean;
  second: boolean;
  third: boolean;
  topicos: any[] = [];
  mostrarRespostas = false;

  categorias = [
    {nome: "Redes", icon : '../../../../../assets/icons/icon-redes.svg'},
    {nome: "Banco de Dados", icon : '../../../../../assets/icons/icon-banco-dados.svg'},
    {nome: "Programação", icon : '../../../../../assets/icons/icon-programacao.svg'},
    {nome: "Web", icon : '../../../../../assets/icons/icon-web.svg'},
    {nome: "Estrutura de Dados", icon : '../../../../../assets/icons/icon-estrutura-dados.svg'},
    {nome: "Arquitetura de Computadores", icon : '../../../../../assets/icons/icon-arquitetura-comp.svg'},
  ]

  mockData = [
    { nome: "HTML", descricao: "HTML é uma linguagem de marcação utilizada na construção de páginas na Web..."},
    { nome: "HTML", descricao: "HTML é uma linguagem de marcação utilizada na construção de páginas na Web..."},
    { nome: "HTML", descricao: "HTML é uma linguagem de marcação utilizada na construção de páginas na Web..."},
    { nome: "HTML", descricao: "HTML é uma linguagem de marcação utilizada na construção de páginas na Web..."},
    { nome: "HTML", descricao: "HTML é uma linguagem de marcação utilizada na construção de páginas na Web..."},
  ]

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
    this.start = true;
    this.second = false;
    this.third = false;
    this.obterTopicos();
  }

  changePage(event: any){
    this.start = false;
    this.second = true;
    this.third = false;
  }

  changePageThird(){
    this.start = false;
    this.second = false;
    this.third = true;
  }

  obterTopicos(){
    this.service.getAllTopicos().pipe(takeUntil(this.unsubscribeAll)).subscribe(
      (res: any) => {
        this.topicos = res;
      }
    )
  }

  toggleRespostas(){
    this.mostrarRespostas = !this.mostrarRespostas;
  }
}
