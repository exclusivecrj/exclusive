import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import * as firebase from 'firebase';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-finaliza-compra',
  templateUrl: './finaliza-compra.page.html',
  styleUrls: ['./finaliza-compra.page.scss'],
})
export class FinalizaCompraPage implements OnInit {

  firestore = firebase.firestore();
  settings = { timestampsInSnapshots: true };
  idUsuario: string = "";

  constructor(private menu: MenuController,
    public fire: AngularFireAuth,
    private router: Router, ) {

    this.fire.authState.subscribe(obj => {
      this.idUsuario = this.fire.auth.currentUser.uid;
      this.verificaClienteCadastro();
    });
  }

  ngOnInit() {
  }

  openFirst() {
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }

  openEnd() {
    this.menu.open('end');
  }

  openCustom() {
    this.menu.enable(true, 'custom');
    this.menu.open('custom');
  }
  verificaClienteCadastro() {

    let ref = this.firestore.collection('perfil').doc(this.idUsuario).get().then(doc => {

      if (!doc.exists) {
        this.router.navigate(['/cadastrar-perfil']);

      }
    });
  }
}
