import { TestBed } from '@angular/core/testing';

import { UrlShortnenService } from './url-shortnen.service';

describe('UrlShortnenService', () => {
  let service: UrlShortnenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UrlShortnenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
