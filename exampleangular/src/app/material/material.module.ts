import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule} from "@angular/material/card";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {MatBadgeModule} from "@angular/material/badge";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatAutocompleteModule} from "@angular/material/autocomplete";
import {MatInputModule} from "@angular/material/input";



@NgModule({
  exports: [
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatBadgeModule,
    MatFormFieldModule,
    MatAutocompleteModule,
    MatInputModule
  ]
})
export class MaterialModule { }
