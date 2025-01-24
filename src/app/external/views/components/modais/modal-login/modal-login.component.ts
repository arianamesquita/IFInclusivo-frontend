import { Component, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Subject, Subscription, takeUntil } from 'rxjs';
import { ServiceGeralService } from 'src/app/service/service-geral.service';
import { ExternalService } from '../../../service/external.service';
import { Aluno } from 'src/app/shared/models/interface.models';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-modal-login',
  templateUrl: './modal-login.component.html',
  styleUrls: ['./modal-login.component.scss']
})
export class ModalLoginComponent {
  private readonly unsubscribeAll: Subject<any[]> = new Subject();
  form: FormGroup;
  private closeModalSubscription: Subscription;

  constructor(
    public dialogRef: MatDialogRef<ModalLoginComponent>,
    private readonly formBuilder: FormBuilder,
    private readonly router: Router,
    private readonly service: ServiceGeralService,
    private readonly externalService: ExternalService,
    private _snackBar: MatSnackBar
  ) {
    this.form = this.formBuilder.group({
      nome: [null, ],
      login: [null, ],
      matricula: [null, ],
      senha: [null, Validators.required]
    })

    this.closeModalSubscription = this.service.$closeModalLogin.subscribe(() => {
      this.dialogRef.close();
    });
  } 

  entrar(form: any){
    console.log(form);
    this.externalService.getAllAlunos().pipe(takeUntil(this.unsubscribeAll)).subscribe(
      (res: any) => {
        const usuarioEncontrado = res.find((aluno: Aluno) => aluno.login === form.value.login);
        if (usuarioEncontrado.senha === form.value.senha) {
          this.dialogRef.close();
          this._snackBar.open('Logado com sucesso!!', 'Fechar', {
            horizontalPosition: 'right',
            verticalPosition: 'top',
          });
          console.log('Login bem-sucedido!');
          // Redirecionar ou executar ações de login
        } else {
          this._snackBar.open('Algum dado está incorreto!! Tente novamente!', 'Fechar', {
            horizontalPosition: 'right',
            verticalPosition: 'top',
          });
          console.log('Senha incorreta.');
        }
        console.log(this.form, res);
      }
    );
  }

  esqueciSenha(){
    //implementar
  }

  direcionarCadastro(){
    //implementar
    // chamar auth service e logar
    // chamar modal de login
    this.service.emitOpenModal();
    this.service.emitCloseLogin();
  }

  voltarHome(){
    this.dialogRef.close();
  }

  ngOnDestroy() {
    // Certifique-se de cancelar a inscrição ao destruir o componente
    if (this.closeModalSubscription) {
      this.closeModalSubscription.unsubscribe();
    }
  }
}
