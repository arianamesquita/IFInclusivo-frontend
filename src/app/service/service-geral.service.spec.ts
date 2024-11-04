import { TestBed } from '@angular/core/testing';

import { ServiceGeralService } from './service-geral.service';

describe('ServiceGeralService', () => {
  let service: ServiceGeralService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceGeralService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
