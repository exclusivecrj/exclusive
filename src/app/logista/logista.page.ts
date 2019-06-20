import { Component, OnInit } from '@angular/core';
import { Logista } from '../model/logista';
import * as firebase from 'firebase';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-logista',
  templateUrl: './logista.page.html',
  styleUrls: ['./logista.page.scss'],
})
export class LogistaPage implements OnInit {

  listaDeLogistas: Logista[] = [];
  firestore = firebase.firestore();
  settings = { timestampsInSnapshots: true };

  constructor(public router: Router,
    public loadingController : LoadingController) { }

  ngOnInit() {
    this.getList();
  }

  viewLog(obj: Logista) {
    this.router.navigate(['/logista-view', { 'logista' : obj.id }]);

  }

  async loading() {
    const loading = await this.loadingController.create({
      message: 'Carregando',
      duration: 2000
    });
    await loading.present();
  } 

  getList() {
    this.loading();

    var ref = firebase.firestore().collection("logista");
    ref.get().then(query => {
      query.forEach(doc => {
        let c = new Logista();
        c.setDados(doc.data());
        c.id = doc.id;
        this.listaDeLogistas.push(c);
      });
      this.loadingController.dismiss();     

    });

  }

  remove(obj: Logista) {
    var ref = firebase.firestore().collection("logista");
    ref.doc(obj.id).delete()
      .then(() => {
        this.listaDeLogistas = [];
        this.getList();
      }).catch(() => {
        console.log('Erro ao atualizar');
      })
  }

}
