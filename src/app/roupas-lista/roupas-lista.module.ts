import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { RoupasListaPage } from './roupas-lista.page';

const routes: Routes = [
  {
    path: '',
    component: RoupasListaPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [RoupasListaPage]
})
export class RoupasListaPageModule {}
