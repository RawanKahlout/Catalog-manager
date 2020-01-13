import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './user/login/login.component';
import {ProductTemplateComponent} from '././activity/product-template/product-template.component';
const routes: Routes = [
{path:'signin', component: LoginComponent},
{path:'upload' , component : ProductTemplateComponent},
{ path: '',redirectTo: 'signin',pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponent =[LoginComponent];
