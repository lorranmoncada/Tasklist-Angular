import { Component, OnInit, ViewChild } from '@angular/core';
import { Subject } from 'rxjs';
import { EClasseAlertas } from '../../enum/EClasseAlertas.enum';
import { TaskListTodo } from '../../models/TaskListTodo';
import { BaseService } from '../../services/base.service';
import { TaskListCompletedService } from '../../services/task-list-completed-service/task-list-completed.service';

@Component({
  selector: 'app-task-list-completed',
  templateUrl: './task-list-completed.component.html',
  styleUrls: ['./task-list-completed.component.css']
})
export class TaskListCompletedComponent implements OnInit {
  destroy$: Subject<boolean> = new Subject<boolean>();
  @ViewChild('alert') alert: any;

  taskListTodoCompleted = [] as TaskListTodo[];

  constructor(private baseService: BaseService, private taskListCompletedService: TaskListCompletedService) { }

  ngOnInit() {
    this.refreshCompletedList();
  }

  refreshCompletedList() {
    this.baseService.showLoading();
    this.taskListCompletedService.ListAllTaskConcluidas().takeUntil(this.destroy$).subscribe(data => {
      this.baseService.hideLoading();
      this.taskListTodoCompleted = data;
    },error=>{
      this.baseService.hideLoading();
      this.alert.toastConfirmacao("Erro ao carregar tasks concluídas", EClasseAlertas.AlertDanger);
    })
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

}
