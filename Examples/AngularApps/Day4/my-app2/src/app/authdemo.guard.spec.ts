import { TestBed } from '@angular/core/testing';

import { AuthdemoGuard } from './authdemo.guard';

describe('AuthdemoGuard', () => {
  let guard: AuthdemoGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AuthdemoGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
