import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertComponent } from './alert.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [AlertComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [
    AlertComponent
  ]
})
export class AlertModule { }
