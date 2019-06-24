import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quem',
  templateUrl: './quem.page.html',
  styleUrls: ['./quem.page.scss'],
})
export class QuemPage implements OnInit {

  constructor(public router: Router,
    public loadingController : LoadingController) { }

  ngOnInit() {
  }

// ion-fab dos redirecionamentos
cart(){
  this.router.navigate(['/carrinho'])
}
search(){
  this.router.navigate(['/roupas'])
}
contact(){
  this.router.navigate(['/quem'])
}
logout(){
  this.router.navigate(['/logoff'])
}


}
