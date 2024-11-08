import { Component, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';


@Component({
  selector: 'app-modal-login',
  templateUrl: './modal-login.component.html',
  styleUrls: ['./modal-login.component.scss']
})
export class ModalLoginComponent {

  form: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<ModalLoginComponent>,
    private readonly formBuilder: FormBuilder,
    private readonly router: Router
  ) {
    this.form = this.formBuilder.group({
      nome: [null, ],
      login: [null, ],
      matricula: [null, ],
      senha: [null, Validators.required]
    })
  } 
  Entrar(){
    //implementar
  }

  EsqueciSenha(){
    //implementar
  }
  direcionarCadastro(){
    //implementar
  }

  voltarHome(){
    this.dialogRef.close();
  }
}
