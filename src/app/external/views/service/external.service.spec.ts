import { TestBed } from '@angular/core/testing';

import { ExternalService } from './external.service';

describe('ExternalService', () => {
  let service: ExternalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExternalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
