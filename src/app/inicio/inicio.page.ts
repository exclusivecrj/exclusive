import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  constructor(public router : Router) { }

  ngOnInit() {  
  }


  slideOpts = {
    initialSlide:0,
    speed: 20,
    autoplay:true,
    loop: true,
    slidesPerView: 1,
     
  };

  gerar(){
    
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
