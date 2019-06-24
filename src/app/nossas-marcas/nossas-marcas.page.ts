import { Component, OnInit } from '@angular/core';
import { Marcas } from '../model/marcas';
import * as firebase from 'firebase';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-nossas-marcas',
  templateUrl: './nossas-marcas.page.html',
  styleUrls: ['./nossas-marcas.page.scss'],
})
export class NossasMarcasPage implements OnInit {

 
  nossasMarcas: Marcas[] = [];
  firestore = firebase.firestore();
  settings = { timestampsInSnapshots: true };

  constructor(public router: Router,
    public loadingController : LoadingController) {

     }
     ngOnInit() {
       this.getList();
    }

    viewMarca(obj: Marcas) {
      this.router.navigate(['/marca-view', { 'marcas' : obj.id }]);
  
    }
  
    getList() {
      this.loading();
  

      var ref = firebase.firestore().collection("marcas");
      ref.get().then(query => {
        query.forEach(doc => {
          let m = new Marcas();
          m.setDados(doc.data());
          m.id = doc.id;
          this.nossasMarcas.push(m);
        });
        this.loadingController.dismiss();     
  
      });
  
    }

    remove(obj: Marcas) {
      var ref = firebase.firestore().collection("marcas");
      ref.doc(obj.id).delete()
        .then(() => {
          this.nossasMarcas = [];
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