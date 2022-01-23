import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button'

const material: any = [
  // MatButtonModule
]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    ...material
  ],
  exports: [
    BrowserAnimationsModule,
    ...material
  ]
})
export class MaterialModule { }
