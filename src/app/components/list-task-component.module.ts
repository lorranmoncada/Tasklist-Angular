import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ListTaskComponentComponent } from './list-task-component/list-task-component.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { AlertModule } from './alert/alert.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgxSpinnerModule,
    AlertModule
  ],
  declarations: [ListTaskComponentComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [ListTaskComponentComponent]
})
export class ListTaskComponentModule { }
