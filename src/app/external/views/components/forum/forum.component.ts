import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ExternalService } from '../../service/external.service';
import { debounceTime, Subject, takeUntil } from 'rxjs';
import { Comentarios, Publicacoes, Usuario } from 'src/app/shared/models/interface.models';

@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.scss']
})
export class ForumComponent {
  private readonly unsubscribeAll: Subject<any[]> = new Subject();
  categorias = [
    { nome: "Banco de Dados" },
    { nome: "Programação" },
    { nome: "Estrutura de Dados" },
    { nome: "Web" },
    { nome: "Redes" }
  ]
  form: FormGroup;
  mostrarRespostas: { [id: string]: boolean } = {};

  publicacoes: Publicacoes[] = [];
  userIds : any[] = [];
  usuarios: Usuario[] = [];
  comentarios: { [id: string]: any[] } = {};

  params = {
    pagina: 0,
    tamanho: 10
  }

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

  ngOnInit(){
    this.getDataForum();

    this.form.get('pesquisa')?.valueChanges
    .pipe(
      debounceTime(300),
      takeUntil(this.unsubscribeAll) 
    )
    .subscribe((valor: string) => {
      this.service.searchPublicacaoForum(valor, this.params).pipe(takeUntil(this.unsubscribeAll)).subscribe(
        (res: any) => {
          this.publicacoes = res.content;
          console.log(res);
        }
      );
    });
  }

  toggleRespostas(id: string) {
    this.mostrarRespostas[id] = !this.mostrarRespostas[id];
    this.service.getAllComentariosPost(id, this.params).pipe(takeUntil(this.unsubscribeAll)).subscribe(
      (res: any) => {
        this.comentarios[id] = res.content;
      },
      (error) => {
        console.error(`Erro ao carregar comentários para a pergunta ${id}:`, error);
      }
    );
  }

  getDataForum(){
    this.service.getAllForum().pipe(takeUntil(this.unsubscribeAll)).subscribe(
      (res: any) => {
        this.publicacoes = res;
        //console.log(this.publicacoes)
      }
    )
  }
}
