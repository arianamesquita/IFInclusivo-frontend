import { Component, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ServiceGeralService } from 'src/app/service/service-geral.service';


@Component({
  selector: 'app-modal-login',
  templateUrl: './modal-login.component.html',
  styleUrls: ['./modal-login.component.scss']
})
export class ModalLoginComponent {

  form: FormGroup;
  private closeModalSubscription: Subscription;

  constructor(
    public dialogRef: MatDialogRef<ModalLoginComponent>,
    private readonly formBuilder: FormBuilder,
    private readonly router: Router,
    private readonly service: ServiceGeralService
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
  Entrar(){
    //implementar
  }

  EsqueciSenha(){
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
