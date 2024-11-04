import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { HttpClientModule } from '@angular/common/http';
import { TopnavbarComponent } from './components/topnavbar/topnavbar.component';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './components/footer/footer.component';
import { MatDialogModule } from '@angular/material/dialog';
import {ReactiveFormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';


@NgModule({
  declarations: [
    TopnavbarComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    MatInputModule,
    MatIconModule,
    MatCardModule,
    MatExpansionModule,
    HttpClientModule,
    MatButtonModule,
    RouterModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatFormFieldModule
  ],
  exports: [
    MatInputModule,
    MatIconModule,
    MatFormField,
    MatLabel,
    MatCardModule,
    MatExpansionModule,
    HttpClientModule,
    TopnavbarComponent,
    MatButtonModule,
    RouterModule, 
    FooterComponent,
    MatDialogModule,
    ReactiveFormsModule,
    MatFormFieldModule
   ]
})
export class SharedModule { }