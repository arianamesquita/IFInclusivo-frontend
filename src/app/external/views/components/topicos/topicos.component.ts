import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-topicos',
  templateUrl: './topicos.component.html',
  styleUrls: ['./topicos.component.scss']
})
export class TopicosComponent {

  form: FormGroup;

  constructor(
    private readonly builder: FormBuilder ){
    this.form = this.builder.group({
      pesquisa: [null,]
    })
  }
  
}
