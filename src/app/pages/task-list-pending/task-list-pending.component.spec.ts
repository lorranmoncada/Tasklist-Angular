import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskListPendingComponent } from './task-list-pending.component';

describe('TaskListPendingComponent', () => {
  let component: TaskListPendingComponent;
  let fixture: ComponentFixture<TaskListPendingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskListPendingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskListPendingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
