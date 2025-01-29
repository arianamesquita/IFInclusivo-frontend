import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { sinaisLibras } from 'src/app/shared/models/convertelibras.model';
import { HttpService } from 'src/app/shared/service-http/http.service';


@Injectable({
  providedIn: 'root'
})
export class ExternalService {
  endpointLibras: string = 'sinais';
  endpointTopico: string = 'topicos';
  endpointForum: string = 'publicacoes';
  endpointCursos: string = 'cursos';
  endpointAlunos: string = 'alunos';
  endpointComentarios: string = 'comentarios/publicacao';
  endpointBuscaRapidaForum: string = 'publicacoes/buscar-rapido';
  endpointBuscaTopicoForum: string = 'publicacoes/buscar-topico';
  endpointBuscaRapidaTopicos: string = 'topicos/buscar-rapido';

  constructor(private readonly http: HttpService) { }

  buscarLibrasDePalavra() {
    return this.http.genericGet(this.endpointLibras)
    .pipe((res) => {
      return res;
    });
  }

  cadastrarLibras(sinais: sinaisLibras) { //levar para o internal depois, o cadastrar vai ser feito só na parte interna após login
    return this.http.genericPost(this.endpointLibras, sinais, '')
    .pipe((res) => {
      return res;
    })
  }

  getAllForum(){
    return this.http.genericGet(this.endpointForum)
    .pipe((res) => {
      return res;
    })
  }

  getAllComentariosPost(id: string, params: any){
    return this.http.genericGetComments(this.endpointComentarios, id, params)
    .pipe((res) => {
      return res;
    })
  }

  getComentariosId(id: string){
    return this.http.genericGet(this.endpointComentarios, id)
    .pipe((res) => {
      return res;
    })
  }

  getPublicacoesId(id: string){
    return this.http.genericGet(this.endpointForum, id)
    .pipe((res) => {
      return res;
    })
  }

  getAllTopicos(){
    return this.http.genericGet(this.endpointTopico)
    .pipe((res) => {
      return res;
    })
  }

  getAllTopicosCategoria(categoria: string, params: any){
    return this.http.genericGetData(this.endpointTopico, categoria, params)
    .pipe((res) => {
      return res;
    })
  }

  cadastrarUsuario(body: FormGroup<any>, id: number){
    return this.http.genericPostID(this.endpointAlunos, body, id)
    .pipe((res) => {
      return res;
    })
  }

  getAllCursos(){
    return this.http.genericGet(this.endpointCursos)
    .pipe((res) => {
      return res;
    })
  }

  getAllAlunos(){
    return this.http.genericGet(this.endpointAlunos)
    .pipe((res) => {
      return res;
    })
  }

  searchPublicacaoForum(termo: string, params: any){
    return this.http.genericSearchPublication(this.endpointBuscaRapidaForum, termo, params)
      .pipe((res) => {
        return res;
      })
  }

  searchPublicacaoTopicos(termo: string, params: any){
    return this.http.genericSearchPublication(this.endpointBuscaRapidaForum, termo, params)
      .pipe((res) => {
        return res;
      })
  }

  searchPublicacaoporTopicos(id: string, params: any){
    return this.http.genericSearchPublicationTopic(this.endpointBuscaTopicoForum, id, params)
      .pipe((res) => {
        return res;
      })
  }
}
