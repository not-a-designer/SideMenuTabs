import { TestBed, inject } from '@angular/core/testing';

import { AgmMapService } from './agm-map.service';

describe('AgmMapService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AgmMapService]
    });
  });

  it('should be created', inject([AgmMapService], (service: AgmMapService) => {
    expect(service).toBeTruthy();
  }));
});
