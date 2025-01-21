import { Injectable } from '@angular/core';
import { sinaisLibras } from 'src/app/shared/models/convertelibras.model';
import { HttpService } from 'src/app/shared/service-http/http.service';


@Injectable({
  providedIn: 'root'
})
export class ExternalService {
  endpointLibras: string = 'sinais';
  endpointTopico: string = 'topicos';
  endpointForum: string = 'publicacoes';
  endpointComentarios: string = 'comentarios/publicacao'

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

  getAllTopicos(){
    return this.http.genericGet(this.endpointTopico)
    .pipe((res) => {
      return res;
    })
  }

  getAllTopicosCategoria(categoria: string, params: any){
    return this.http.genericGetData(this.endpointForum, categoria, params)
    .pipe((res) => {
      return res;
    })
  }
}
