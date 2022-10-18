import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ShowSuccessComponent} from "./show-success/show-success.component";
import {ShowErrorComponent} from "./show-error/show-error.component";
import { MontantFormatterPipe } from './montant-formatter.pipe';
import { HighlightDirective } from './highlight.directive';



@NgModule({
  declarations: [
    ShowSuccessComponent,
    ShowErrorComponent,
    MontantFormatterPipe,
    HighlightDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ShowSuccessComponent,
    ShowErrorComponent,
    MontantFormatterPipe,
    HighlightDirective
  ]
})
export class CommonElementsModule { }
