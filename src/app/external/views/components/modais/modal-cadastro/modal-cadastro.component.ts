import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DialogData } from '../../../tela-container/container/container.component';

@Component({
  selector: 'app-modal-cadastro',
  templateUrl: './modal-cadastro.component.html',
  styleUrls: ['./modal-cadastro.component.scss']
})
export class ModalCadastroComponent {

    constructor(
      public dialogRef: MatDialogRef<ModalCadastroComponent>,
      @Inject (MAT_DIALOG_DATA) public data: DialogData
    ) { console.log (data) } 

  

    //onClick() {
      // this.dialogRef.close();
    //}
}
