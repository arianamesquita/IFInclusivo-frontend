import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ExternalService } from '../../service/external.service';
import { debounceTime, Subject, takeUntil } from 'rxjs';
import { Professor, removerAcentuacoesEspacos, Topico } from 'src/app/shared/models/interface.models';

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
  topicos: Topico[] = [];
  mostrarRespostas = false;
  assunto: string = '';
  professor: any;

  categorias = [
    {nome: "Redes", icon : '../../../../../assets/icons/icon-redes.svg'},
    {nome: "Banco de Dados", icon : '../../../../../assets/icons/icon-banco-dados.svg'},
    {nome: "Programação", icon : '../../../../../assets/icons/icon-programacao.svg'},
    {nome: "Web", icon : '../../../../../assets/icons/icon-web.svg'},
    {nome: "Estrutura de Dados", icon : '../../../../../assets/icons/icon-estrutura-dados.svg'},
    {nome: "Arquitetura de Computadores", icon : '../../../../../assets/icons/icon-arquitetura-comp.svg'},
  ]
  
  respostas = [
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

  params = {
    pagina: 0,
    tamanho: 10
  }
  categoria: string ='';
  categoriasFiltradas: { nome: string; icon: string; }[] = [];

  constructor(
    private readonly builder: FormBuilder,
    private readonly service: ExternalService,
    private readonly cdr: ChangeDetectorRef ){
    this.form = this.builder.group({
      pesquisa: [null,]
    })
  }

  ngOnInit(){
    this.changePage(true, false, false, '');

    this.categoriasFiltradas = [...this.categorias];

    this.form.get('pesquisa')?.valueChanges
      .pipe(
        debounceTime(300),
        takeUntil(this.unsubscribeAll)
      )
      .subscribe((valor: string) => {
        if (valor) {
          this.categoriasFiltradas = this.categorias.filter(categoria =>
            categoria.nome.toLowerCase().includes(valor.toLowerCase())
          );
        } else {
          this.categoriasFiltradas = [...this.categorias];
        }
        this.categorias = this.categoriasFiltradas;
      });
  }

  changePage(start: boolean, second: boolean, third: boolean, nome: string){
    this.start = start;
    this.second = second;
    this.third = third;
    if(nome !== ''){
      this.assunto = nome;
      this.obterAssuntoCategoria(this.assunto);
    }
  }

  obterTopicos(){ //para pegar todas, se precisar
    this.service.getAllTopicos().pipe(takeUntil(this.unsubscribeAll)).subscribe(
      (res: any) => {
        this.topicos = res;
      }
    )
  }

  removerAcentuacoes(data: any){
    const categoria = removerAcentuacoesEspacos(data);
    return categoria;
  }

  obterAssuntoCategoria(categoria: string){
    const data = removerAcentuacoesEspacos(categoria).toUpperCase();
    this.service.getAllTopicosCategoria(data, this.params).pipe(takeUntil(this.unsubscribeAll)).subscribe(
      (res: any) => {
        this.topicos = res.content;
        this.professor = res.content[0].professor;
      }
    )
  }

  toggleRespostas(id: string){
    this.mostrarRespostas = !this.mostrarRespostas;
    this.service.getAllComentariosPost(id, this.params).pipe(takeUntil(this.unsubscribeAll)).subscribe(
      (res: any) => {
        //console.log(res.content)
        this.respostas = res.content
      }
    );
  }
}
