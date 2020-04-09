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
import { MainNavComponent } from './main-nav/main-nav.component';
import {MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import { HomePageComponent } from './home-page/home-page.component';
import { NotFoundComponent } from './not-found/not-found.component';
import {MatTableModule } from '@angular/material/table';
import { DisabledProductComponent } from './disabled-product/disabled-product.component';
import {MatPaginatorModule} from '@angular/material/paginator';
import{MatSortModule}from '@angular/material/sort';
import {MatFormFieldModule} from '@angular/material/form-field';
import{MatInputModule}from '@angular/material/input';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { SplitTemplateComponent } from './split product activity/split-template/split-template.component';
import {MatGridListModule} from '@angular/material/grid-list';
import{MatCardModule} from '@angular/material/card';
import {MatDialogModule, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { AddCategoryComponent } from './disabledProductActions/add-category/add-category.component';
import{MatSelectModule} from '@angular/material/select';
import {MatIconModule} from '@angular/material/icon';
import { ProductsDescriptionComponent } from './products-description/products-description.component';
import { AddGenderComponent } from './add-gender/add-gender.component';
import { AddDescriptionComponent } from './disabledProductActions/add-description/add-description.component';
import { TableFilteringExampleComponent } from './table-filtering-example/table-filtering-example.component';
import { AddPriceComponent } from './add-price/add-price.component';
import { DiscountPriceComponent } from './discount-price/discount-price.component';
import { JsonMapperPipe } from './pipe/json-mapper.pipe';
import { ProductStatusComponent } from './product-status/product-status.component';
import { WarningComponent } from './popup/warning/warning.component';
import { MainNavbarComponent } from './main-navbar/main-navbar.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { TableProductComponent } from './table-product/table-product.component';
import { ProductPipe } from './product.pipe';
import {CdkTableModule}from "@angular/cdk/table";
import { ProductsComponent } from './products/products.component';
import { ShowImageComponent } from './popup/show-image/show-image.component';
@NgModule({
  declarations: [
    AppComponent,
    routingComponent,
    ProductTemplateComponent,
    UploadReportsComponent,
    MainNavComponent,
    HomePageComponent,
    NotFoundComponent,
    DisabledProductComponent,
    SplitTemplateComponent,
    AddCategoryComponent,
    ProductsDescriptionComponent,
    AddGenderComponent,
    AddDescriptionComponent,
    TableFilteringExampleComponent,
    AddPriceComponent,
    DiscountPriceComponent,
    JsonMapperPipe,
    ProductStatusComponent,
    WarningComponent,
    MainNavbarComponent,
    TableProductComponent,
    ProductPipe,
    ProductsComponent,
    ShowImageComponent

    
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
  providers: [],
  bootstrap: [AppComponent],
  entryComponents:[AddCategoryComponent,AddGenderComponent,AddDescriptionComponent,AddPriceComponent,DiscountPriceComponent,ProductStatusComponent,WarningComponent,ShowImageComponent] 

})
export class AppModule { }
