import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { Observable } from 'rxjs';
import { TaskListTodo } from '../../models/TaskListTodo';
import { BaseService } from '../base.service';

@Injectable()
export class TaskListCompletedService extends BaseService {

  constructor(public httpClient: HttpClient,public spinner: NgxSpinnerService) {
    super(httpClient,spinner);
  } 

  ListAllTaskConcluidas(): Observable<TaskListTodo[]> {
    return this.httpClient.get<TaskListTodo[]>(`${this.url}tasks-concluidas`);
  }
}
