import { Component } from '@angular/core';
import { sinaisLibras } from '../../../../shared/models/convertelibras.model';
import { Observable, Subject, takeUntil } from 'rxjs';
import { ExternalService } from '../../service/external.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-convertelibras',
  templateUrl: './convertelibras.component.html',
  styleUrls: ['./convertelibras.component.scss']
})
export class ConvertelibrasComponent {
  private readonly unsubscribeAll: Subject<any[]> = new Subject();
  sinais: sinaisLibras[] = []
  sinais$ = new Observable<sinaisLibras[]>();

  //teste de put

    id= '';
    palavra = '';
    descricao = '';
    url = '';
    video = '';
    foto = '';
    justificativa = '';
    status = '';

    constructor(private externalService: ExternalService, private router: Router) {
      // método que chama todos os objetos do db teste
      this.obterSinaisCadastrados();
    }
    

  navigateTo(page: string): void {
    // Navega para a rota correspondente
    this.router.navigate([page]);
  }
  obterSinaisCadastrados(){
    //this.ConvertelibrasService.buscarLibrasDePalavra()
    //.subscribe(sinais => this.sinais = sinais)
    //this.sinais$ = this.externalService.buscarLibrasDePalavra();
    this.externalService.buscarLibrasDePalavra().pipe(takeUntil(this.unsubscribeAll)).subscribe(
      (res: any) => {
        this.sinais = res;
      }
    )
  }
    //metodo para teste de set
  cadastrarLibras(){ //levar para o internal depois, o cadastrar vai ser feito só na parte interna após login
    this.externalService.cadastrarLibras({palavra: this.palavra, descricao: this.descricao, url: this.url,
      video: this.video, foto: this.foto, justificativa: this.justificativa, status: this.status})
      .pipe(takeUntil(this.unsubscribeAll))
      .subscribe(_ => this.obterSinaisCadastrados())
  }


  ngOnDestroy(): void {
    this.unsubscribeAll.next([]);
    this.unsubscribeAll.complete();
}


}
