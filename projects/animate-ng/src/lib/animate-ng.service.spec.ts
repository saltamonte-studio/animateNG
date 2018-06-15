import { TestBed, inject } from '@angular/core/testing';

import { AnimateNgService } from './animate-ng.service';

describe('AnimateNgService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AnimateNgService]
    });
  });

  it('should be created', inject([AnimateNgService], (service: AnimateNgService) => {
    expect(service).toBeTruthy();
  }));
});
