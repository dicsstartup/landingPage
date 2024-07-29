import { TestBed } from '@angular/core/testing';

import { FirebaseInitService } from './firebase-init.service';

describe('FirebaseInitService', () => {
  let service: FirebaseInitService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FirebaseInitService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
