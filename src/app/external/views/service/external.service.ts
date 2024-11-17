import { Injectable } from '@angular/core';
import { sinaisLibras } from 'src/app/shared/models/convertelibras.model';
import { HttpService } from 'src/app/shared/service-http/http.service';


@Injectable({
  providedIn: 'root'
})
export class ExternalService {
  endpointLibras: string = '/teste';

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
    
  }
}
