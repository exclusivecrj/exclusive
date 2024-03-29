import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { RoupasPage } from './roupas.page';
import { FiltroPage } from '../filtro/filtro.page';
import { RoupaModalPage } from 'src/app/roupa-modal/roupa-modal.page';

const routes: Routes = [
  {
    path: '',
    component: RoupasPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [RoupasPage,FiltroPage],
  entryComponents: [FiltroPage]
})
export class RoupasPageModule {}
