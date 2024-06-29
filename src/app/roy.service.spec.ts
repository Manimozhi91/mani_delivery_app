import { TestBed } from '@angular/core/testing';

import { RoyService } from './roy.service';

describe('RoyService', () => {
  let service: RoyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RoyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
