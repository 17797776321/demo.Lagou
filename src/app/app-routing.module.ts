import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// 首页
import { HomeComponent } from './home/home.component';
// 详情页
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { Page404ComponentComponent } from './page404-component/page404-component.component';

const routes: Routes = [
  {
    path:'',
    component: HomeComponent
  },
  {
    path:'product/:productId',
    component: ProductDetailComponent
  },
  {
    path:'**',
    component: Page404ComponentComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
