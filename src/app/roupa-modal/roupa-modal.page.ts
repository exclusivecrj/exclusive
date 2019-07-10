import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import * as firebase from 'firebase';
import { roupas } from 'src/app/model/roupas';
import { query } from '@angular/core/src/render3';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-roupa-modal',
  templateUrl: './roupa-modal.page.html',
  styleUrls: ['./roupa-modal.page.scss'],
})
export class RoupaModalPage implements OnInit {

  listaDeRoupas: roupas[] = [];
  roupas: roupas = new roupas();
  id: string;

  firestore = firebase.firestore();
  settings = { timestampsInSnapshots: true };

  constructor(public activateRoute: ActivatedRoute) { 
    this.id = this.activateRoute.snapshot.paramMap.get('roupas');
   }

  ngOnInit() {
    this.obterRoupa();
  }

  obterRoupa() {
    var ref = firebase.firestore().collection("roupas").doc(this.id);
    ref.get().then(doc => {
      this.roupas.setDados(doc.data());
    }).catch(function (error) {
      console.log("Error getting document: ", error);
    });
  }
}
