import { TestBed } from '@angular/core/testing';

import { CafeteriaCreateService } from './cafeteria-create.service';

describe('CafeteriaCreateService', () => {
  let service: CafeteriaCreateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CafeteriaCreateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
