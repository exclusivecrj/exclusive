import { Component, OnInit } from '@angular/core';
import { roupas } from '../model/roupas';
import * as firebase from 'firebase';
import { Router } from '@angular/router';
import { LoadingController, ToastController, IonInfiniteScroll, PopoverController, IonSearchbar, ModalController } from '@ionic/angular';
import { Pedido } from '../model/pedido';
import { StorageService } from '../service/storage.service';
import { Item } from '../model/item';
import { ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FiltroPage } from '../filtro/filtro.page';
import { RoupaModalPage } from 'src/app/roupa-modal/roupa-modal.page';



@Component({
  selector: 'app-roupas',
  templateUrl: './roupas.page.html',
  styleUrls: ['./roupas.page.scss'],
})
export class RoupasPage implements OnInit {

  popoverData;

  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;
  @ViewChild("textoBusca") textoBusca;

  listaDeRoupas: roupas[] = [];
  firestore = firebase.firestore();
  imagem;
  settings = { timestampsInSnapshots: true };
  filtro;
  valor;
  id: string;

  pedido: Pedido = new Pedido();
  filtroBox  = "none";

  constructor(public router: Router,
    public loadingController: LoadingController,
    public toastController: ToastController,
    public storageServ: StorageService,
    private popoverController: PopoverController,
    public activateRoute: ActivatedRoute,
    private modalController: ModalController) {



    this.filtro = this.activateRoute.snapshot.paramMap.get('filtro');
    this.valor = this.activateRoute.snapshot.paramMap.get('valor');




    if (this.storageServ.getCart() == null) {
      this.pedido = this.storageServ.getCart()
    } else {
      this.pedido.itens = [];
    }


  }


  async showPopover(ev: any) {
    const popover = await this.popoverController.create({
      component: FiltroPage,
      event: ev,
      translucent: true
    });
    return await popover.present();
  }

  presentModal(obj: roupas) {
    this.router.navigate(['/roupa-modal', { 'roupas': obj.id }]);
  }

  showFilter(){
    if(this.filtroBox=='none')
      this.filtroBox = 'block'
    else
      this.filtroBox = 'none'
  }

  /*
    loadData(event) {
      setTimeout(() => {
        console.log('Done');
        event.target.complete();
  
        // App logic to determine if all data is loaded
        // and disable the infinite scroll
        if (this.loadData.length == 1000) {
          event.target.disabled = true;
        }
      }, 500);
    }
  
    toggleInfiniteScroll() {
      this.infiniteScroll.disabled = !this.infiniteScroll.disabled;
    }
  */

  ngOnInit() {
    if (this.filtro == null)
      this.getList();
  }

  valorSel(){
    console.log("teste");
  }

  busca() {
    console.log(this.textoBusca.value)

    this.listaDeRoupas = [];
    var ref = firebase.firestore().collection("roupas");

    ref.orderBy('roupa').startAfter(this.textoBusca.value).endAt(this.textoBusca.value + '\uf8ff').get().then(doc => {

      if (doc.size > 0) {

        doc.forEach(doc => {

          let r = new roupas();
          r.setDados(doc.data());
          r.id = doc.id;

          let ref = firebase.storage().ref().child(`roupas/${doc.id}.jpg`).getDownloadURL().then(url => {
            r.img = url;
            console.log(r);
            this.listaDeRoupas.push(r);
          }).catch(err => {
            this.listaDeRoupas.push(r);
          })

        })

      } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
      }
    })

    //this.router.navigate(['/roupas', { 'filtro': "busca" }]);
  }

  async loading() {
    const loading = await this.loadingController.create({
      message: 'Carregando',
      duration: 2000
    });
    await loading.present();
  }

  async toast(msg: string) {
    const toast = await this.toastController.create({
      message: 'Cadastrado com sucesso!',
      duration: 2000
    });
    toast.present();
  }

  getList() {
    this.loading();

    var ref = firebase.firestore().collection("roupas");
    ref.get().then(query => {
      query.forEach(doc => {
        let r = new roupas();
        r.setDados(doc.data());
        r.id = doc.id;

        let ref = firebase.storage().ref().child(`roupas/${doc.id}.jpg`).getDownloadURL().then(url => {
          r.img = url;

          this.listaDeRoupas.push(r);
        }).catch(err => {
          this.listaDeRoupas.push(r);
        })


      });
      this.loadingController.dismiss();

    });

  }

  viewRoupa(obj: roupas) {
    this.router.navigate(['/roupa-view', { 'roupas': obj.id }]);
  }

  remove(obj: roupas) {
    var ref = firebase.firestore().collection("roupas");
    ref.doc(obj.id).delete()
      .then(() => {
        this.listaDeRoupas = [];
        this.getList();
      }).catch(() => {
        console.log('Erro ao atualizar');
      })
  }

  addCarrinho(roupas: roupas) {
    this.pedido = this.storageServ.getCart();
    let add = true;

    let i = new Item();
    i.roupas = roupas;
    i.quantidade = 1;

    console.log(roupas);


    if (this.pedido == null) {
      this.pedido = new Pedido();
      this.pedido.itens = [];
    }

    this.pedido.itens.forEach(p => {
      if (p.roupas.id == roupas.id) {
        add = false;
      }


    })

    if (add == true) this.pedido.itens.push(i);


    this.storageServ.setCart(this.pedido);
    console.log(this.pedido);
  }

  downloadFoto() {
    let ref = firebase.storage().ref()
      .child(`roupas/${this.id}.jpg`);

    ref.getDownloadURL().then(url => {
      this.imagem = url;
    })
  }

  filter() {

  }



  // ion-fab dos redirecionamentos
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
