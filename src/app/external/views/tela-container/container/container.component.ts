import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ServiceGeralService } from 'src/app/service/service-geral.service';
import { ModalCadastroComponent } from '../../components/modais/modal-cadastro/modal-cadastro.component';
import { ModalLoginComponent } from '../../components/modais/modal-login/modal-login.component';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent implements OnInit{

  constructor(
    private readonly service: ServiceGeralService,
    public dialog: MatDialog
  ) {}

  ngOnInit() {
    this.service.$openModalCadastro.subscribe(() => {
      this.openModalCadastro();
    })
    
    this.service.$openModalLogin.subscribe(() => {
      this.openModalLogin();
    })
  }

  openModalCadastro(){
    const dialogRef = this.dialog.open(ModalCadastroComponent, {
      width: '85vw',
      height: '80vh'
    });
    dialogRef.afterClosed().subscribe(result => {
      //chamar service e salvar no banco de dados aqui.
    })
  }

  openModalLogin(){
    const dialogRef = this.dialog.open(ModalLoginComponent, {
      width: '85vw',
      height: '80vh'
    });
    dialogRef.afterClosed().subscribe(result => {
      //chamar service e salvar no banco de dados aqui.
    })
  }


}
