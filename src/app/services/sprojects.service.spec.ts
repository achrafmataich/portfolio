import { TestBed } from '@angular/core/testing';

import { SProjectsService } from './sprojects.service';

describe('SProjectsService', () => {
  let service: SProjectsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SProjectsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
