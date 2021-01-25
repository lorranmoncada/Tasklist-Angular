import { TestBed, inject } from '@angular/core/testing';

import { TaskListPendingService } from './task-list-pending.service';

describe('TaskListService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TaskListPendingService]
    });
  });

  it('should be created', inject([TaskListPendingService], (service: TaskListPendingService) => {
    expect(service).toBeTruthy();
  }));
});
