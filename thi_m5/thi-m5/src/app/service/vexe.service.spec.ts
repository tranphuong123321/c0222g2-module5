import { TestBed } from '@angular/core/testing';

import { VexeService } from './vexe.service';

describe('VexeService', () => {
  let service: VexeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VexeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
