import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-topnavbar',
  templateUrl: './topnavbar.component.html',
  styleUrls: ['./topnavbar.component.scss']
})
export class TopnavbarComponent {

  constructor(private readonly router: Router) { }


  navigateTo(){
    this.router.navigate(['/home']);
  }
}
