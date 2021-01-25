import { TestBed, inject } from '@angular/core/testing';

import { TaskListCompletedService } from './task-list-completed.service';

describe('TaskListCompletedService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TaskListCompletedService]
    });
  });

  it('should be created', inject([TaskListCompletedService], (service: TaskListCompletedService) => {
    expect(service).toBeTruthy();
  }));
});
