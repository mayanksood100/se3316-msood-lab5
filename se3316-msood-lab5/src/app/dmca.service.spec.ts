import { TestBed } from '@angular/core/testing';

import { DmcaService } from './dmca.service';

describe('DmcaService', () => {
  let service: DmcaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DmcaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
