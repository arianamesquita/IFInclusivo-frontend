import { TestBed } from '@angular/core/testing';

import { TelaInicialService } from './tela-inicial.service';

describe('TelaInicialService', () => {
  let service: TelaInicialService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TelaInicialService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
