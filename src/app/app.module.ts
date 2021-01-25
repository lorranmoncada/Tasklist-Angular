import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TaskListPendingModule } from './pages/task-list-pending/task-list-pending.module';
import { TaskListPendingService } from './services/task-list-pending-service/task-list-pending.service';
import { HttpClientModule } from '@angular/common/http';
import { BaseService } from './services/base.service';
import { TaskListCompletedModule } from './pages/task-list-completed/task-list-completed.module';
import { TaskListCompletedService } from './services/task-list-completed-service/task-list-completed.service';
import { TaskListInativeModule } from './pages/task-list-inative/task-list-inative.module';
import { TaskListInativeService } from './services/task-list-inative-service/task-list-inative.service';
import { NgxSpinnerModule } from 'ngx-spinner';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    TaskListPendingModule,
    HttpClientModule,
    TaskListCompletedModule,
    TaskListInativeModule,
    NgxSpinnerModule
  ],
  providers: [
    TaskListPendingService,
    TaskListCompletedService,
    TaskListInativeService,
    BaseService

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
