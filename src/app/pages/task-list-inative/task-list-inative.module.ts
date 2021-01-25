import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskListInativeComponent } from './task-list-inative.component';
import { ListTaskComponentModule } from '../../components/list-task-component.module';
import { AlertModule } from '../../components/alert/alert.module';

@NgModule({
  imports: [
    CommonModule,
    ListTaskComponentModule,
    AlertModule
  ],
  declarations: [TaskListInativeComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [TaskListInativeComponent]
})
export class TaskListInativeModule { }
