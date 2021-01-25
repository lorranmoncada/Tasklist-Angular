import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Subject } from 'rxjs';
import { EClasseAlertas } from '../../enum/EClasseAlertas.enum';
import { TaskListTodo } from '../../models/TaskListTodo';
import { BaseService } from '../../services/base.service';
import { TaskListPendingService } from '../../services/task-list-pending-service/task-list-pending.service';

@Component({
  selector: 'app-task-list-pending',
  templateUrl: './task-list-pending.component.html',
  styleUrls: ['./task-list-pending.component.css']
})
export class TaskListPendingComponent implements OnInit, OnDestroy {
  destroy$: Subject<boolean> = new Subject<boolean>();

  taskListTodo = [] as TaskListTodo[];
  task = {} as TaskListTodo;
  titulo = "";

  @ViewChild('alert') alert: any;

  constructor(private baseService: BaseService,private taskListService: TaskListPendingService) { }

  ngOnInit() {
    this.refreshPendingList();
  }

  refreshPendingList() {
    this.baseService.showLoading();
    this.taskListService.ListAllTaskPendentes().takeUntil(this.destroy$).subscribe(data => {
      this.baseService.hideLoading();
      this.taskListTodo = data;
    },error =>{
      this.alert.toastConfirmacao("Ocorreu um erro ao carregar as tasks pendentes", EClasseAlertas.AlertDanger);
      this.baseService.hideLoading();
    })
  }

  createTask() {
    if (this.titulo != "") {
      this.baseService.showLoading();
      this.task.titulo = this.titulo;
      this.task.ativo = true;
      this.taskListService.CreateTask(this.task).subscribe(data => {
        if (data) {
          this.alert.toastConfirmacao("Task criada", EClasseAlertas.AlertSuccess);
          this.refreshPendingList();
          this.task = {} as TaskListTodo;
          this.titulo = "";
        }else{
          this.alert.toastConfirmacao("Não foi possível cirar task", EClasseAlertas.AlertInfo);
        }
      },error =>{
        this.baseService.hideLoading();
        this.alert.toastConfirmacao("Erro ao tentar criar task", EClasseAlertas.AlertDanger);
      });
    } else {
      this.alert.toastConfirmacao("Titulo obrigatório", EClasseAlertas.AlertInfo);
    }
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

}
