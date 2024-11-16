import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceGeralService {

  constructor() { }

  private openModalCadastro = new Subject<void>();
  $openModalCadastro = this.openModalCadastro.asObservable();

  private closeModalCadastro = new Subject<void>();
  $closeModalCadastro = this.closeModalCadastro.asObservable();

  private closeModalLogin = new Subject<void>();
  $closeModalLogin = this.closeModalLogin.asObservable();

  private openModalLogin = new Subject<void>();
  $openModalLogin = this.openModalLogin.asObservable();

  emitOpenModal(){
    this.openModalCadastro.next();
  }

  emitOpenLogin(){
    this.openModalLogin.next();
  }

  emitCloseCadastro(){
    this.closeModalCadastro.next();
  }

  emitCloseLogin(){
    this.closeModalLogin.next();
  }
}
