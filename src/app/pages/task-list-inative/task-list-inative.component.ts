import { Component, OnInit, ViewChild } from '@angular/core';
import { Subject } from 'rxjs';
import { EClasseAlertas } from '../../enum/EClasseAlertas.enum';
import { TaskListTodo } from '../../models/TaskListTodo';
import { BaseService } from '../../services/base.service';
import { TaskListInativeService } from '../../services/task-list-inative-service/task-list-inative.service';

@Component({
  selector: 'app-task-list-inative',
  templateUrl: './task-list-inative.component.html',
  styleUrls: ['./task-list-inative.component.css']
})
export class TaskListInativeComponent implements OnInit {
  destroy$: Subject<boolean> = new Subject<boolean>();

  taskListTodoInative = [] as TaskListTodo[];

  @ViewChild('alert') alert: any;

  constructor(private baseService: BaseService, private taskListInativeService: TaskListInativeService) { }

  ngOnInit() {
    this.refreshInativeList();
  }

  refreshInativeList() {
    this.baseService.showLoading();
    this.taskListInativeService.ListAllTaskInativas().takeUntil(this.destroy$).subscribe(data => {
      this.taskListTodoInative = data;
      this.baseService.hideLoading()
    }, erro => {
      this.baseService.hideLoading();
      this.alert.toastConfirmacao("Ocorreu um erro ao carregar as tasks inativas", EClasseAlertas.AlertDanger);
    })
  }

  reactiveTask(task: TaskListTodo) {
    this.baseService.showLoading();
    this.taskListInativeService.ReactiveTask(task).subscribe(data => {
      data ? (this.baseService.hideLoading(),
        this.alert.toastConfirmacao("Task reativada", EClasseAlertas.AlertSuccess), this.refreshInativeList())
        : this.alert.toastConfirmacao("Não foi possível reativar task", EClasseAlertas.AlertInfo);
    }, erro => {
      this.baseService.hideLoading();
      this.alert.toastConfirmacao("Ocorreu um erro ao tentar reativar task", EClasseAlertas.AlertDanger);
    })
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

}
