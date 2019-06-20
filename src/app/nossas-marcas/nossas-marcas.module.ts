import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { NossasMarcasPage } from './nossas-marcas.page';

const routes: Routes = [
  {
    path: '',
    component: NossasMarcasPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [NossasMarcasPage]
})
export class NossasMarcasPageModule {}
