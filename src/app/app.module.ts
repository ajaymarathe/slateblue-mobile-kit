import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BaseNavbarComponent } from './common/base-navbar/base-navbar.component';

import { NgFontawesomeModule } from "ng-fontawesome-icon";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BaseNavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgFontawesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
