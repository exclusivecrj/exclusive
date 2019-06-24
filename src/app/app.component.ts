import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  public appPages = [
    {
      title: 'Início',
      url: '/inicio',
      icon: 'home'
    },
    {
      title: 'Roupas',
      url: '/roupas',
      icon: 'shirt'
    },
    {
      title: 'Nossas Marcas',
      url: '/nossas-marcas',
      icon: 'md-list-box'
    },
    {
      title: 'Carrinho',
      url: '/carrinho',
      icon: 'md-cart'
    },
    {
      title: 'Lista de Clientes',
      url: '/lista-de-clientes',
      icon: 'list'
    },
    {
      title: 'Lista de Logistas',
      url: '/logista',
      icon: 'list'
    },
    {
      title: 'Cadastro de Clientes',
      url: '/cadastro-de-cliente',
      icon: 'md-add-circle'
    },
    {
      title: 'Cadastrar-se como Logista',
      url: '/cadastrarlogista',
      icon: 'md-add-circle'
    },
    
    {
      title: 'Cadastrar Marcas',
      url: '/cadastro-marca',
      icon: 'md-add-circle'
    }, 
    {
      title: 'Cadastrar Roupa',
      url: '/cadastrar-roupa',
      icon: 'md-add-circle'
    },
    {
      title: 'Quem Somos',
      url: '/quem',
      icon: 'md-contacts'
    },    
    {
      title: 'Logoff',
      url: '/logoff',
      icon: 'ios-log-out'
    },
    {
      title: 'Logar como Logista',
      url: '/login',
      icon: 'log-in'
    },
  ];
  //cadastro-de-clientes

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private firebaseauth : AngularFireAuth,
    private router : Router
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });

  }
}
