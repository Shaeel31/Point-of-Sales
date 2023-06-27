import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { PrintBarcodeComponent } from './pages/print-barcode/print-barcode.component';
import { ShowProductsComponent } from './pages/show-products/show-products.component';



export const routes: Routes = [
  {
    path: 'pages',
    loadChildren: () => import('./pages/pages.module')
      .then(m => m.PagesModule),
  },
  {
    path: 'login',
    loadChildren: () => import('./Modules/auth/auth.module')
      .then(m => m.AuthModule),
  },
  {
    path: 'print',
    component: PrintBarcodeComponent
  },
  {
    path: 'ShowProducts',
    component: ShowProductsComponent
  },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '**', redirectTo: 'pages' },
];

const config: ExtraOptions = {
  useHash: false,
};

@NgModule({
  imports: [RouterModule.forRoot(routes, config)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
