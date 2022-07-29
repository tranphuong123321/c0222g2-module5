import { TestBed } from '@angular/core/testing';

import { NhaxeService } from './nhaxe.service';

describe('NhaxeService', () => {
  let service: NhaxeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NhaxeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
