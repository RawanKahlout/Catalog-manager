import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './user/login/login.component';
import {ProductTemplateComponent} from './upload product activity/product-template/product-template.component';
import{UploadReportsComponent}from './upload product activity/upload-reports/upload-reports.component';
import{HomePageComponent}from './home-page/home-page.component';
import{DisabledProductComponent}from './disabled-product/disabled-product.component';
import{SplitTemplateComponent} from './split product activity/split-template/split-template.component';
import { from } from 'rxjs';
const routes: Routes = [
{path:'signin', component: LoginComponent},
{path:'upload-products' , component : ProductTemplateComponent},
{path :'product-report', component: UploadReportsComponent },
{path :'home-page', component:HomePageComponent},
{path: 'Disabled-product',component:DisabledProductComponent},
{path : 'upload-split',component: SplitTemplateComponent},
{path: '',redirectTo: 'signin',pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponent =[LoginComponent,UploadReportsComponent,HomePageComponent];
