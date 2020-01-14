import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule , routingComponent } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { ProductTemplateComponent } from './activity/product-template/product-template.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {UploadReportsComponent} from './activity/upload-reports/upload-reports.component'

@NgModule({
  declarations: [
    AppComponent,
    routingComponent,
    ProductTemplateComponent,
    UploadReportsComponent

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
   

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
