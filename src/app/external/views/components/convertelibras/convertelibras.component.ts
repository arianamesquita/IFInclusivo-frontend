import { Component } from '@angular/core';
import { sinaisLibras } from '../../../../shared/models/convertelibras.model';
import { Observable, Subject, takeUntil } from 'rxjs';
import { ExternalService } from '../../service/external.service';
import { Router } from '@angular/router'; // Importação do Router

@Component({
  selector: 'app-convertelibras',
  templateUrl: './convertelibras.component.html',
  styleUrls: ['./convertelibras.component.scss']
})
export class ConvertelibrasComponent {
  private readonly unsubscribeAll: Subject<any[]> = new Subject();
  sinais: sinaisLibras[] = [];
  sinais$ = new Observable<sinaisLibras[]>();

  // Variáveis para teste de PUT
  id = '';
  palavra = '';
  descricao = '';
  url = '';
  video = '';
  foto = '';
  justificativa = '';
  status = '';

  // Injetando ExternalService e Router
  constructor(private externalService: ExternalService, private router: Router) {
    this.obterSinaisCadastrados(); // Chama o método que obtém os sinais
  }



  // Método para navegação
  navigateTo(page: string): void {
    this.router.navigate([page]); // Navega para a página correspondente
  }

  navigateToTopicosLibras() {
    console.log('Navegando para Tópicos Libras'); // Adicione esta linha para verificar
    this.router.navigate(['/topicoslibras']);
  }

  // Método para obter sinais cadastrados
  obterSinaisCadastrados() {
    this.externalService.buscarLibrasDePalavra().pipe(takeUntil(this.unsubscribeAll)).subscribe(
      (res: any) => {
        this.sinais = res; // Armazena os sinais recebidos
      }
    );
  }

  // Método para cadastrar Libras (somente no contexto interno após o login)
  cadastrarLibras() {
    this.externalService.cadastrarLibras({
      palavra: this.palavra,
      descricao: this.descricao,
      url: this.url,
      video: this.video,
      foto: this.foto,
      justificativa: this.justificativa,
      status: this.status
    }).pipe(takeUntil(this.unsubscribeAll)).subscribe(() => this.obterSinaisCadastrados());
  }

  // Limpeza de recursos ao destruir o componente
  ngOnDestroy(): void {
    this.unsubscribeAll.next([]);
    this.unsubscribeAll.complete();
  }
}
