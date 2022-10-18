import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ShowSuccessComponent } from './show-success/show-success.component';
import { ShowErrorComponent } from './show-error/show-error.component';
import {MessageService} from "./message.service";

@NgModule({
  declarations: [
    AppComponent,
    ShowSuccessComponent,
    ShowErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
