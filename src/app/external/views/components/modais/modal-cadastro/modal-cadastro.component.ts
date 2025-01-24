import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Subject, Subscription, takeUntil } from 'rxjs';
import { ServiceGeralService } from 'src/app/service/service-geral.service';
import { ExternalService } from '../../../service/external.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-modal-cadastro',
  templateUrl: './modal-cadastro.component.html',
  styleUrls: ['./modal-cadastro.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ModalCadastroComponent implements OnInit {
  private readonly unsubscribeAll: Subject<any[]> = new Subject();
  form: FormGroup;
  private closeModalSubscription: Subscription;
  cursos: any[] = [];
  cursoID: number = 0;
  cursoSelecionado: boolean = false;
  status: boolean = false;

  constructor(
    public dialogRef: MatDialogRef<ModalCadastroComponent>,
    private readonly formBuilder: FormBuilder,
    private readonly service: ServiceGeralService,
    private readonly reqService: ExternalService,
    private _snackBar: MatSnackBar
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

  ngOnInit(){
    this.buscarCursos();
  }

  buscarCursos(){
    this.reqService.getAllCursos().pipe(takeUntil(this.unsubscribeAll)).subscribe(
      (res: any) => {
        this.cursos = res;
      }
    )
  }

  valueSelected(event: any){
    this.cursoID = event.value;
  }

  cadastrar(form: FormGroup){
    const body = form.value;
    this.form.reset();
    this.buscarCursos()
    this.reqService.cadastrarUsuario(body, this.cursoID).pipe(takeUntil(this.unsubscribeAll)).subscribe(
      (res: any) => {
        this.cursoSelecionado = false;
        this.status = true;
        console.log("no modal", res)
      }
    );
    this.dialogRef.close();
    this._snackBar.open('Cadastrado com sucesso!!', 'Fechar', {
      horizontalPosition: 'right',
      verticalPosition: 'top',
    });
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
