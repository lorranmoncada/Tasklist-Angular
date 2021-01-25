import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { TaskListTodo } from '../models/TaskListTodo';

@Injectable()
export class BaseService {

  statusTask = new BehaviorSubject<string>('pending');

  constructor( public httpClient: HttpClient, public spinner: NgxSpinnerService) { }

  emitType(statusTask: string) {
    this.statusTask.next(statusTask);
  }

  UpdateTask(task: TaskListTodo): Observable<TaskListTodo> {
    return this.httpClient.put<TaskListTodo>(`${this.url}update/task`, task);
  }

  InactivaterTask(task: TaskListTodo): Observable<boolean> {
    return this.httpClient.put<boolean>(`${this.url}inativar/task`, task);
  }

  ConcludeTask(task: TaskListTodo): Observable<string> {
    return this.httpClient.put<string>(`${this.url}concluir/task`, task);
  }

  PendingTask(task: TaskListTodo): Observable<string> {
    return this.httpClient.put<string>(`${this.url}pendenciar/task`, task);
  }

  get url() {
    return environment.url;
  }

  showLoading() {
    this.spinner.show();
  }

  hideLoading() {
    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
    }, 1000);
  }

}
