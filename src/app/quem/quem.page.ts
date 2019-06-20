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

  insta(){
    this.router.navigate(['https://www.instagram.com/exclusiveclothingrj/']);
  }
  git(){
    
  }
  tt(){
    
  }
  face(){
    
  }
  email(){
    
  }
  linkedin(){
    
  }


}
