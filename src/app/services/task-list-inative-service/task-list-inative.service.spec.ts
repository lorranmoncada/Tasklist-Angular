import { TestBed, inject } from '@angular/core/testing';

import { TaskListInativeService } from './task-list-inative.service';

describe('TaskListInativeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TaskListInativeService]
    });
  });

  it('should be created', inject([TaskListInativeService], (service: TaskListInativeService) => {
    expect(service).toBeTruthy();
  }));
});
