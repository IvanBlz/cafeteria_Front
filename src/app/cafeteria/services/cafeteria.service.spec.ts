import { TestBed } from '@angular/core/testing';

import { CafeteriaService } from './cafeteria.service';

describe('CafeteriaService', () => {
  let service: CafeteriaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CafeteriaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
