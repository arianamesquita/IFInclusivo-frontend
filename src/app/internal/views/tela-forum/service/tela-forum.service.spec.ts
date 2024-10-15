import { TestBed } from '@angular/core/testing';

import { TelaForumService } from './tela-forum.service';

describe('TelaForumService', () => {
  let service: TelaForumService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TelaForumService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
