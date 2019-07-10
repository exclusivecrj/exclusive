import { Component, OnInit } from '@angular/core';
import { Perfil } from '../model/perfil';
import * as firebase from 'firebase';
import { Router, ActivatedRoute } from '@angular/router';
import { LoadingController, ToastController, PopoverController } from '@ionic/angular';
import { StorageService } from 'src/app/service/storage.service';

@Component({
  selector: 'app-lista-perfil',
  templateUrl: './lista-perfil.page.html',
  styleUrls: ['./lista-perfil.page.scss'],
})
export class ListaPerfilPage implements OnInit {

  listaDePerfis: Perfil[] = [];
  firestore = firebase.firestore();
  settings = { timestampsInSnapshots: true };

  constructor(public router: Router,
    public loadingController: LoadingController,
    public activateRoute: ActivatedRoute) { }

  ngOnInit() {
    this.getList();
  }

  getList() {
    this.loading();

    var ref = firebase.firestore().collection("perfil");
    ref.get().then(query => {
      query.forEach(doc => {
        let r = new Perfil();
        r.setDados(doc.data());
        r.id = doc.id;

        let ref = firebase.storage().ref().child(`perfil/${doc.id}.jpg`).getDownloadURL().then(url => {
        //  r.img = url;

          this.listaDePerfis.push(r);
        }).catch(err => {
          this.listaDePerfis.push(r);
        })


      });
      this.loadingController.dismiss();

    });

  }

  perfilEdit(obj: Perfil) {
    this.router.navigate(['/edita-perfil', { 'perfil' : obj.id }]);
  }

  remove(obj: Perfil) {
    var ref = firebase.firestore().collection("perfil");
    ref.doc(obj.id).delete()
      .then(() => {
        this.listaDePerfis = [];
        this.getList();
      }).catch(() => {
        console.log('Erro ao atualizar');
      })
  }

  async loading() {
    const loading = await this.loadingController.create({
      message: 'Carregando',
      duration: 2000
    });
    await loading.present();
  }

  cart() {
    this.router.navigate(['/carrinho'])
  }
  search() {
    this.router.navigate(['/roupas'])
  }
  contact() {
    this.router.navigate(['/quem'])
  }
  logout() {
    this.router.navigate(['/logoff'])
  }

}
