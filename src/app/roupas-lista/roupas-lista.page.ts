import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-roupas-lista',
  templateUrl: './roupas-lista.page.html',
  styleUrls: ['./roupas-lista.page.scss'],
})
export class RoupasListaPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  escolher(){
    console.log("ok")
  }

}
