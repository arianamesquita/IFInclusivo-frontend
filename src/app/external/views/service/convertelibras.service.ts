import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { sinaisLibras } from '../models/convertelibras.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConvertelibrasService {
  private url = environment.api;

  constructor(private httpClient: HttpClient) { }

  buscarLibrasDePalavra() {
    return this.httpClient.get<sinaisLibras[]>(this.url + '/sinaisLibras');
  }
  cadastrarLibras(sinais: sinaisLibras): Observable<sinaisLibras> {

    return this.httpClient.post<sinaisLibras>(this.url + '/sinaisLibras', sinais);

  }
}
