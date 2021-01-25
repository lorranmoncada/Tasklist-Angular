import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskListPendingComponent } from './task-list-pending.component';
import { FormsModule } from '@angular/forms';
import { ListTaskComponentModule } from '../../components/list-task-component.module';
import { AlertModule } from '../../components/alert/alert.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ListTaskComponentModule,
    AlertModule
  ],
  declarations: [TaskListPendingComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [TaskListPendingComponent]
})
export class TaskListPendingModule { }
