import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-topicos',
  templateUrl: './topicos.component.html',
  styleUrls: ['./topicos.component.scss']
})
export class TopicosComponent {

  form: FormGroup;

  categorias = [
    {nome: "Redes", icon : '../../../../../assets/icons/icon-redes.svg'},
    {nome: "Banco de Dados", icon : '../../../../../assets/icons/icon-banco-dados.svg'},
    {nome: "Programação", icon : '../../../../../assets/icons/icon-programacao.svg'},
    {nome: "Web", icon : '../../../../../assets/icons/icon-web.svg'},
    {nome: "Estrutura de Dados", icon : '../../../../../assets/icons/icon-estrutura-dados.svg'},
    {nome: "Arquitetura de Computadores", icon : '../../../../../assets/icons/icon-arquitetura-comp.svg'},
  ]

  constructor(
    private readonly builder: FormBuilder ){
    this.form = this.builder.group({
      pesquisa: [null,]
    })
    console.log(this.categorias)
    
  }
  
}
