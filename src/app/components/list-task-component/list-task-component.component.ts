import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { Subject } from 'rxjs';
import { EClasseAlertas } from '../../enum/EClasseAlertas.enum';
import { TaskListTodo } from '../../models/TaskListTodo';
import { BaseService } from '../../services/base.service';

@Component({
  selector: 'app-list-task-component',
  templateUrl: './list-task-component.component.html',
  styleUrls: ['./list-task-component.component.css']
})
export class ListTaskComponentComponent implements OnInit {
  destroy$: Subject<boolean> = new Subject<boolean>();
  typeStatus: string;
  task = {} as TaskListTodo;
  titulo = "";
  teste = false;

  @Input() taskListTodo = [] as TaskListTodo[];

  @Output() reloadPendingList = new EventEmitter();
  @Output() reloadCompletedList = new EventEmitter();
  @Output() reloadInativedList = new EventEmitter();
  @Output() reactiveTask = new EventEmitter<TaskListTodo>();

  @ViewChild('alert') alert: any;

  constructor(private baseService: BaseService) { }

  ngOnInit() {
    this.baseService.statusTask.subscribe(type => {
      this.typeStatus = type;
      this.refresh();
    })
  }

  changeValue(task: TaskListTodo, property: string, descricao: string) {
    const taskCopy = { ...task }
    if ((this.task.descricao === undefined) || (this.task.titulo === undefined)) {
      this.task = taskCopy;
    }
    this.task[property] = descricao;
  }

  updateTask() {
    if (this.task.titulo == undefined) return alert("titulo ou descrição não foram alteradas")
    
    this.baseService.showLoading();
    this.baseService.UpdateTask(this.task).takeUntil(this.destroy$).subscribe(data => {
      if (data) {
        this.baseService.hideLoading();
        this.alert.toastConfirmacao("Task alterada", EClasseAlertas.AlertSuccess);
        this.refresh();
        this.task = {} as TaskListTodo;
      }
    }, error => {
      this.alert.toastConfirmacao("Não foi possível realizar a edição", EClasseAlertas.AlertDanger);
    });
  }

  refresh() {
    this.typeStatus == "pending" ? this.reloadPendingList.emit()
      : this.typeStatus == "completed" ? this.reloadCompletedList.emit()
        : this.reloadInativedList.emit();
  }

  backOrNextProgress(task: TaskListTodo) {
    this.baseService.showLoading();
    if (this.typeStatus == "pending") {
      this.baseService.ConcludeTask(task).takeUntil(this.destroy$).subscribe(() => {
        this.baseService.hideLoading();
        this.alert.toastConfirmacao("Task concluída", EClasseAlertas.AlertSuccess);
        this.refresh()
      },error =>{
        this.alert.toastConfirmacao("Erro ao concluir task", EClasseAlertas.AlertDanger);
      } );
    } else if (this.typeStatus == "completed") {
      this.baseService.PendingTask(task).takeUntil(this.destroy$).subscribe(() => {
        this.baseService.hideLoading();
        this.alert.toastConfirmacao("Task pendenciada", EClasseAlertas.AlertSuccess);
        this.refresh()
      },error =>{
        this.alert.toastConfirmacao("Erro ao pendenciar task", EClasseAlertas.AlertDanger);
      } );
    }
  }

  inactivaterTask(task: TaskListTodo) {
    this.baseService.InactivaterTask(task).takeUntil(this.destroy$).subscribe(data => {
      if (data) {
        this.alert.toastConfirmacao("Task inativada", EClasseAlertas.AlertSuccess);
        this.refresh();
      } else{
        this.alert.toastConfirmacao("Task não pode ser inativada", EClasseAlertas.AlertWarning);
      }
    },error =>{
      this.alert.toastConfirmacao("Erro ao inativar task", EClasseAlertas.AlertDanger);
    })
  }

  taskReactive(task: TaskListTodo) {
    this.reactiveTask.emit(task)
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

}
