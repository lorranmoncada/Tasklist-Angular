import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TaskListTodo } from '../../models/TaskListTodo';
import { BaseService } from '../base.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Injectable()
export class TaskListPendingService extends BaseService {

  constructor(public httpClient: HttpClient,public spinner: NgxSpinnerService) {
    super(httpClient,spinner);
  }

  ListAllTaskPendentes(): Observable<TaskListTodo[]> {
    return this.httpClient.get<TaskListTodo[]>(`${this.url}tasks-pendentes`);
  }

  CreateTask(task:TaskListTodo): Observable<TaskListTodo> {
    return this.httpClient.post<TaskListTodo>(`${this.url}cadastro/task`,task);
  }
}
