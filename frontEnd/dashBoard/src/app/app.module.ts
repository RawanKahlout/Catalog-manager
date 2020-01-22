import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule , routingComponent } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { ProductTemplateComponent } from './activity/product-template/product-template.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {UploadReportsComponent} from './activity/upload-reports/upload-reports.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { MainNavComponent } from './main-nav/main-nav.component';

@NgModule({
  declarations: [
    AppComponent,
    routingComponent,
    ProductTemplateComponent,
    UploadReportsComponent,
    MainNavComponent

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgbModule
   

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
