import { BrowserModule } from '@angular/platform-browser';
import { NgModule,Component } from '@angular/core';
import { AppRoutingModule , routingComponent } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { ProductTemplateComponent } from './upload product activity/product-template/product-template.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {UploadReportsComponent} from './upload product activity/upload-reports/upload-reports.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import { HomePageComponent } from './home-page/home-page.component';
import { NotFoundComponent } from './not-found/not-found.component';
import {MatTableModule } from '@angular/material/table';
import { AllProductsComponent } from './all-products/all-products.component';
import {MatPaginatorModule} from '@angular/material/paginator';
import{MatSortModule}from '@angular/material/sort';
import {MatFormFieldModule} from '@angular/material/form-field';
import{MatInputModule}from '@angular/material/input';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { SplitTemplateComponent } from './split product activity/split-template/split-template.component';
import {MatGridListModule} from '@angular/material/grid-list';
import{MatCardModule} from '@angular/material/card';
import {MatDialogModule, MatDialogRef, MAT_DIALOG_DATA,MatDialogConfig} from '@angular/material/dialog';
import { AddDescriptionComponent } from './ProductActions/add-description/add-description.component';
import{MatSelectModule} from '@angular/material/select';
import {MatIconModule} from '@angular/material/icon';
import { ProductsDescriptionComponent } from './products-description/products-description.component';
import { AddGenderComponent } from './ProductActions/add-gender/add-gender.component';
import { AddCategoryComponent } from './ProductActions/add-category/add-category.component';
import { AddPriceComponent } from './ProductActions/add-price/add-price.component';
import { DiscountPriceComponent } from './ProductActions/discount-price/discount-price.component';
import { JsonMapperPipe } from './pipe/json-mapper.pipe';
import { ProductStatusComponent } from './ProductActions/product-status/product-status.component';
import { WarningComponent } from './popup/warning/warning.component';
import { MainNavbarComponent } from './main-navbar/main-navbar.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { HiddenProductsComponent } from './hidden-products/hidden-products.component';
import { ProductPipe } from './product.pipe';
import {CdkTableModule}from "@angular/cdk/table";
import { ShowImageComponent } from './popup/show-image/show-image.component';
import { SuccessComponent } from './popup/success/success.component';
import { AddFeaturedProductComponent } from './featured-products/add-featured-product/add-featured-product.component';
import { EditFeaturedProductComponent } from './featured-products/edit-featured-product/edit-featured-product.component';
import { AddDiscountPersentageComponent } from './ProductActions/add-discount-persentage/add-discount-persentage.component';

@NgModule({
  declarations: [
    AppComponent,
    routingComponent,
    ProductTemplateComponent,
    UploadReportsComponent,
    HomePageComponent,
    NotFoundComponent,
    AllProductsComponent,
    SplitTemplateComponent,
    AddCategoryComponent,
    ProductsDescriptionComponent,
    AddGenderComponent,
    AddDescriptionComponent,
    AddPriceComponent,
    DiscountPriceComponent,
    JsonMapperPipe,
    ProductStatusComponent,
    WarningComponent,
    MainNavbarComponent,
    HiddenProductsComponent,
    ProductPipe,
    ShowImageComponent,
    SuccessComponent,
    AddFeaturedProductComponent,
    EditFeaturedProductComponent,
    AddDiscountPersentageComponent

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgbModule,
    MatToolbarModule,
    MatButtonModule,
    MatDividerModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    MatGridListModule,
    MatCardModule,
    MatDialogModule,
    MatSelectModule,
    MatIconModule,
    LayoutModule,
    MatSidenavModule,
    MatListModule,
    CdkTableModule,
    BrowserModule,
    BrowserModule,
    
  ],
  providers: [MatDialogConfig],
  bootstrap: [AppComponent],
  entryComponents:[AddCategoryComponent,AddGenderComponent,AddDescriptionComponent,AddPriceComponent,DiscountPriceComponent,ProductStatusComponent,WarningComponent,ShowImageComponent,SuccessComponent,AddDiscountPersentageComponent] 

})
export class AppModule { }
