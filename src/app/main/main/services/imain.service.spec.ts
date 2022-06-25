import { TestBed } from '@angular/core/testing';

import { ImainService } from './imain.service';

describe('ImainService', () => {
  let service: ImainService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ImainService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
