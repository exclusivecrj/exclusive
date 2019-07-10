import { Component, OnInit } from '@angular/core';
import { Perfil } from '../model/perfil';
import * as firebase from 'firebase';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-edita-perfil',
  templateUrl: './edita-perfil.page.html',
  styleUrls: ['./edita-perfil.page.scss'],
})
export class EditaPerfilPage implements OnInit {

  perfil: Perfil = new Perfil();
  id: string;
  firestore = firebase.firestore();
  settings = { timestampsInSnapshots: true };

  formGroup: FormGroup;

  constructor(public activateRoute: ActivatedRoute,
    public formBuilder: FormBuilder,
    public router : Router,
    public loadingController : LoadingController) { // <---
    this.id = this.activateRoute.snapshot.paramMap.get('perfil');
    this.form();
   }

  form() {
    this.formGroup = this.formBuilder.group({
      nome: [this.perfil.nome],
      telefone: [this.perfil.telefone],
      email: [this.perfil.email],
      endereco: [this.perfil.endereco],
      cep: [this.perfil.cep],
      bairro: [this.perfil.bairro],
      complemento: [this.perfil.complemento],
      cpf: [this.perfil.cpf],
      numero: [this.perfil.numero],
    });
  }

  ngOnInit() {
    this.obterPerfil();
  }

  obterPerfil() {
    var ref = firebase.firestore().collection("perfil").doc(this.id);
    ref.get().then(doc => {
      this.perfil.setDados(doc.data());
      this.form();
    }).catch(function (error) {
      console.log("Error getting document: ", error);
    });
  }

  atualizar(){
    this.loading();
    let ref = this.firestore.collection('perfil')
    ref.doc(this.id).set(this.formGroup.value)
      .then(() =>{
        console.log('Atualizado com sucesso');
        this.router.navigate(['/lista-perfil']);
      }).catch(()=>{
        console.log('Erro ao Atualizar');
      })
  }

  async loading() {
    const loading = await this.loadingController.create({
      message: 'Carregando',
      duration: 1000
    });
    await loading.present();
  }

}
