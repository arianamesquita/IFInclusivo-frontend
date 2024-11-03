import { Component } from '@angular/core';
import { ConvertelibrasService } from '../../service/convertelibras.service';
import { sinaisLibras } from '../../models/convertelibras.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-convertelibras',
  templateUrl: './convertelibras.component.html',
  styleUrls: ['./convertelibras.component.scss']
})
export class ConvertelibrasComponent {

  //sinais: sinaisLibras[] = []
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

  constructor(private ConvertelibrasService: ConvertelibrasService){
    //metodo que chama todos obj do db teste
    this.obterSinaisCadastrados();
  }

  obterSinaisCadastrados(){
    //this.ConvertelibrasService.buscarLibrasDePalavra()
    //.subscribe(sinais => this.sinais = sinais)

    this.sinais$ = this.ConvertelibrasService.buscarLibrasDePalavra();
  }
    //metodo para teste de set
  cadastrarLibras(){
    
    this.ConvertelibrasService.cadastrarLibras({palavra: this.palavra, descricao: this.descricao, url: this.url,
      video: this.video, foto: this.foto, justificativa: this.justificativa, status: this.status})
      .subscribe(_ => this.obterSinaisCadastrados())
  }

}
