import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ServiceGeralService } from 'src/app/service/service-geral.service';
import { ModalCadastroComponent } from '../../components/modais/modal-cadastro/modal-cadastro.component';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent implements OnInit{
  animal: string = '';
  name: string = '';

  constructor(
    private readonly service: ServiceGeralService,
    public dialog: MatDialog
  ) {}

  ngOnInit() {
    this.service.$openModalCadastro.subscribe(() => {
      this.openModalCadastro();
    })
  }

  openModalCadastro(){
    const dialogRef = this.dialog.open(ModalCadastroComponent, {
      data: {animal: this.animal, name: this.name}
    });
    dialogRef.afterClosed().subscribe(result => {
      //chamar service e salvar no banco de dados aqui.
    })
  }


}

export interface DialogData {
  animal: string,
  name: string
}
