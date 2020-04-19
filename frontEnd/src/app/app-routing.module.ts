import{NgModule, Component } from '@angular/core';
import{Routes, RouterModule } from '@angular/router';
import{LoginComponent } from './user/login/login.component';
import{ProductTemplateComponent} from './upload product activity/product-template/product-template.component';
import{UploadReportsComponent}from './upload product activity/upload-reports/upload-reports.component';
import{HomePageComponent}from './home-page/home-page.component';
import{AllProductsComponent}from './all-products/all-products.component';
import{SplitTemplateComponent} from './split product activity/split-template/split-template.component';
import {ProductsDescriptionComponent} from './products-description/products-description.component';
import{AddGenderComponent} from './ProductActions/add-gender/add-gender.component';
import{HiddenProductsComponent}from './hidden-products/hidden-products.component'
import{AddFeaturedProductComponent}from'./featured-products/add-featured-product/add-featured-product.component';
import{EditFeaturedProductComponent} from './featured-products/edit-featured-product/edit-featured-product.component';

import { from } from 'rxjs';
const routes: Routes = [
{path:'signin', component: LoginComponent},
{path:'upload-products' , component : ProductTemplateComponent},
{path :'product-report', component: UploadReportsComponent },
{path :'home-page', component:HomePageComponent},
{path: 'Search-products',component:AllProductsComponent},
{path :'upload-split',component: SplitTemplateComponent},
{path:'Add-Dedcription',component:ProductsDescriptionComponent},
{path:'Add-gender', component:AddGenderComponent},
{path:'Hidden-products/:issue',component:HiddenProductsComponent},
{path:'Add-Featured-Product',component:AddFeaturedProductComponent},
{path:'Edit-Featured-Product' ,component: EditFeaturedProductComponent},
{path: '',redirectTo: 'signin',pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponent =[LoginComponent,UploadReportsComponent,HomePageComponent , ProductsDescriptionComponent];
