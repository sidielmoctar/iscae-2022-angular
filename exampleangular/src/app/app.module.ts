import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ShowSuccessComponent } from './common-elements/show-success/show-success.component';
import { ShowErrorComponent } from './common-elements/show-error/show-error.component';
import {MessageService} from "./message.service";
import {CommonModule} from "@angular/common";
import {HttpClientModule} from "@angular/common/http";
import {CommonElementsModule} from "./common-elements/common-elements.module";
import {MaterialModule} from "./material/material.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatTabsModule} from "@angular/material/tabs";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    CommonElementsModule,
    MaterialModule,
    MatTabsModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
