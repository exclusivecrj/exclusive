import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { Auth2Guard } from './service/auth2.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  {
    path: 'logoff',
    loadChildren: './logoff/logoff.module#LogoffPageModule',
    canActivate: [Auth2Guard]
  },
  {
    path: 'lista-de-clientes',
    loadChildren: './lista-de-clientes/lista-de-clientes.module#ListaDeClientesPageModule'
  },
  {
    path: 'cadastro-de-cliente',
    loadChildren: './cadastro-de-cliente/cadastro-de-cliente.module#CadastroDeClientePageModule'
  },
  {
    path: 'cliente-view',
    loadChildren: './cliente-view/cliente-view.module#ClienteViewPageModule'
  },
  {
    path: 'nossas-marcas',
    loadChildren: './nossas-marcas/nossas-marcas.module#NossasMarcasPageModule'
  },
  {
    path: 'cadastro-marca',
    loadChildren: './cadastro-marca/cadastro-marca.module#CadastroMarcaPageModule'
  },
  {
    path: 'marca-view',
    loadChildren: './marca-view/marca-view.module#MarcaViewPageModule'
  },
  {
    path: 'quem',
    loadChildren: './quem/quem.module#QuemPageModule'
  },
  {
    path: 'inicio',
    loadChildren: './inicio/inicio.module#InicioPageModule'
  },
  {
    path: 'finaliza-compra',
    loadChildren: './finaliza-compra/finaliza-compra.module#FinalizaCompraPageModule'
  },
  {
    path: 'cadastrar-roupa',
    loadChildren: './cadastrar-roupa/cadastrar-roupa.module#CadastrarRoupaPageModule'
  },
  {
    path: 'roupas',
    loadChildren: './roupas/roupas.module#RoupasPageModule'
  },
  {
    path: 'carrinho',
    loadChildren: './carrinho/carrinho.module#CarrinhoPageModule'
  },
  {
    path: 'roupa-view',
    loadChildren: './roupa-view/roupa-view.module#RoupaViewPageModule'
  },
  {
    path: 'login',
    loadChildren: './login/login.module#LoginPageModule'
  },
  {
    path: 'cadastrarlogista',
    loadChildren: './cadastrarlogista/cadastrarlogista.module#CadastrarlogistaPageModule'
  },
  {
    path: 'logista',
    loadChildren: './logista/logista.module#LogistaPageModule'
  },
  {
    path: 'adidas',
    loadChildren: './adidas/adidas.module#AdidasPageModule'
  },
  {
    path: 'calvin-klein',
    loadChildren: './calvin-klein/calvin-klein.module#CalvinKleinPageModule'
  },
  {
    path: 'forever',
    loadChildren: './forever/forever.module#ForeverPageModule'
  },
  {
    path: 'lacoste',
    loadChildren: './lacoste/lacoste.module#LacostePageModule'
  },
  {
    path: 'mr-cat',
    loadChildren: './mr-cat/mr-cat.module#MrCatPageModule'
  },
  {
    path: 'nike',
    loadChildren: './nike/nike.module#NikePageModule'
  },
  {
    path: 'oakley',
    loadChildren: './oakley/oakley.module#OakleyPageModule'
  },
  {
    path: 'zara', loadChildren: './zara/zara.module#ZaraPageModule'
  },  { path: 'pre-login', loadChildren: './pre-login/pre-login.module#PreLoginPageModule' },
  { path: 'filtro', loadChildren: './filtro/filtro.module#FiltroPageModule' }


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
