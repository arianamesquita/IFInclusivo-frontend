import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ExternalService } from '../../service/external.service';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-topicos',
  templateUrl: './topicos.component.html',
  styleUrls: ['./topicos.component.scss']
})
export class TopicosComponent implements OnInit{
  private readonly unsubscribeAll: Subject<any[]> = new Subject();
  form: FormGroup;
  start: boolean = true;
  second: boolean = false;
  third: boolean = false;
  topicos: any[] = [];
  mostrarRespostas = false;
  assunto: string = '';

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
    private readonly service: ExternalService,
    private readonly cdr: ChangeDetectorRef ){
    this.form = this.builder.group({
      pesquisa: [null,]
    })
  }

  ngOnInit(){
    this.changePage(true, false, false, '')
    this.obterTopicos();
  }

  changePage(start: boolean, second: boolean, third: boolean, nome: string){
    this.start = start;
    this.second = second;
    this.third = third;
    this.assunto = nome;
  }

  obterTopicos(){
    this.service.getAllTopicos().pipe(takeUntil(this.unsubscribeAll)).subscribe(
      (res: any) => {
        console.log(res)
        this.topicos = res;
      }
    )
  }

  toggleRespostas(){
    this.mostrarRespostas = !this.mostrarRespostas;
  }
}
