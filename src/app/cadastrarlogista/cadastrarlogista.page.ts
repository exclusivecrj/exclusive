import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import * as firebase from 'firebase';
import { Router } from '@angular/router';
import { LoadingController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-cadastrarlogista',
  templateUrl: './cadastrarlogista.page.html',
  styleUrls: ['./cadastrarlogista.page.scss'],
})
export class CadastrarlogistaPage implements OnInit {

  firestore = firebase.firestore();
  settings = {timestampsInSnapshots: true};
  formGroup : FormGroup;

  constructor(public formBuilder : FormBuilder,
    public router : Router,
    public loadingController : LoadingController,
    public toastController : ToastController) { 

      this.formGroup = this.formBuilder.group({
        nome : [''],
        telefone : [''],
        email : [''],
        endereco : [''],
        cnpj : [''],
        
      })

     }

  ngOnInit() {
  }

  async loading() {
    const loading = await this.loadingController.create({
      message: 'Carregando',
      duration: 1000
    });
    await loading.present();
  }

  async toast(msg : string) {
    const toast = await this.toastController.create({
      message: 'Cadastrado com sucesso!',
      duration: 2000
    });
    toast.present();
  }

  cadastrar(){
    this.loading();
    let ref = this.firestore.collection('logista')
    ref.add(this.formGroup.value)
      .then(() =>{
        this.toast('Cadastrado com sucesso');
        this.router.navigate(['/logista']);
        this.loadingController.dismiss();
      }).catch(()=>{
        this.toast("Erro ao Cadastrar!");
        this.loadingController.dismiss();
      })
  }

}
