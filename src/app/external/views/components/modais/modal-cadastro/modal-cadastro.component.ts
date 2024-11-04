import { Component, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modal-cadastro',
  templateUrl: './modal-cadastro.component.html',
  styleUrls: ['./modal-cadastro.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ModalCadastroComponent {

  form: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<ModalCadastroComponent>,
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

  cadastrar(){
    console.log(this.form.value)
    //chamar auth service e cadastrar
  }

  direcionarLogin(){
    // chamar auth service e logar
    // chamar modal de login
  }

  voltarHome(){
    this.dialogRef.close();
  }

}
