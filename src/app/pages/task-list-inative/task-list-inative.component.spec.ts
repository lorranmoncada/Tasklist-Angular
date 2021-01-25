import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskListInativeComponent } from './task-list-inative.component';

describe('TaskListinativeComponent', () => {
  let component: TaskListInativeComponent;
  let fixture: ComponentFixture<TaskListInativeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskListInativeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskListInativeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
