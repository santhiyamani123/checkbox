import { TestBed } from '@angular/core/testing';

import { PerfernceCheckGuard } from './perfernce-check.guard';

describe('PerfernceCheckGuard', () => {
  let guard: PerfernceCheckGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(PerfernceCheckGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
