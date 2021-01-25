import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskListCompletedComponent } from './task-list-completed.component';

describe('TaskListCompletedComponent', () => {
  let component: TaskListCompletedComponent;
  let fixture: ComponentFixture<TaskListCompletedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskListCompletedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskListCompletedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
