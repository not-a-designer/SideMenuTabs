import { TestBed, inject } from '@angular/core/testing';

import { ThemeServiceService } from './theme-service.service';

describe('ThemeServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ThemeServiceService]
    });
  });

  it('should be created', inject([ThemeServiceService], (service: ThemeServiceService) => {
    expect(service).toBeTruthy();
  }));
});
