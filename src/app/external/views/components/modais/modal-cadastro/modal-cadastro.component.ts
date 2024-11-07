import { Component, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ServiceGeralService } from 'src/app/service/service-geral.service';

@Component({
  selector: 'app-modal-cadastro',
  templateUrl: './modal-cadastro.component.html',
  styleUrls: ['./modal-cadastro.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ModalCadastroComponent {

  form: FormGroup;
  private closeModalSubscription: Subscription;

  constructor(
    public dialogRef: MatDialogRef<ModalCadastroComponent>,
    private readonly formBuilder: FormBuilder,
    private readonly service: ServiceGeralService
  ) {
    this.form = this.formBuilder.group({
      nome: [null, ],
      login: [null, ],
      matricula: [null, ],
      senha: [null, Validators.required]
    })

    this.closeModalSubscription = this.service.$closeModalCadastro.subscribe(() => {
      this.dialogRef.close();
    });
  } 

  cadastrar(){
    //chamar auth service e cadastrar
  }

  direcionarLogin(){
    // chamar auth service e logar
    // chamar modal de login
    this.service.emitOpenLogin();
    this.service.emitCloseCadastro();
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
