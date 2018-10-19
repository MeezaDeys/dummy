import { CommonModule } from '@angular/common';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Ng2AutoBreadCrumb } from "ng2-auto-breadcrumb";
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';
import { FullLayoutComponent } from './layout/full-layout.component';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from './shared/auth.service';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    Ng2AutoBreadCrumb,
    HttpClientModule
  ],
  declarations: [
    FullLayoutComponent,
    AppComponent
  ],
  providers: [AuthService],
  bootstrap: [ AppComponent ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
