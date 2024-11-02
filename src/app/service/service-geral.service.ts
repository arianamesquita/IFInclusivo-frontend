import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceGeralService {

  constructor() { }

  private openModalCadastro = new Subject<void>();
  $openModalCadastro = this.openModalCadastro.asObservable();

  emitOpenModal(){
    this.openModalCadastro.next();
  }
}
