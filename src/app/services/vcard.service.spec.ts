import { TestBed } from '@angular/core/testing';

import { VcardService } from './vcard.service';

describe('VcardService', () => {
  let service: VcardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VcardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
