import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskListCompletedComponent } from './task-list-completed.component';
import { ListTaskComponentModule } from '../../components/list-task-component.module';
import { AlertModule } from '../../components/alert/alert.module';


@NgModule({
  imports: [
    CommonModule,
    ListTaskComponentModule,
    AlertModule
  ],
  declarations: [TaskListCompletedComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [TaskListCompletedComponent]
})
export class TaskListCompletedModule { }
