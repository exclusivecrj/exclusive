import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  constructor() { }

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

}
