import { TestBed } from '@angular/core/testing';

import { BillService } from './bill-service.service';

describe('BillServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BillService = TestBed.get(BillService);
    expect(service).toBeTruthy();
  });
});
