import { TestBed } from '@angular/core/testing';

import { StoregeService } from './storege.service';

describe('StoregeService', () => {
  let service: StoregeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StoregeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
