import { TestBed } from '@angular/core/testing';

import { AdminWorkGuard } from './admin-work.guard';

describe('AdminWorkGuard', () => {
  let guard: AdminWorkGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AdminWorkGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
