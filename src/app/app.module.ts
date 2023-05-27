import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SharedModule } from './shared/shared.module';

// Config locale
import localEsCO from "@angular/common/locales/es-CO";
import localEsMX from "@angular/common/locales/es-MX";
import localFrCA from "@angular/common/locales/fr-CA";


import {registerLocaleData} from "@angular/common";


registerLocaleData(localEsCO)
registerLocaleData(localEsMX)
registerLocaleData(localFrCA)


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
