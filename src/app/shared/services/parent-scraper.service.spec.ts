import { TestBed } from '@angular/core/testing';

import { ParentScraperService } from './parent-scraper.service';

describe('ParentScraperService', () => {
  let service: ParentScraperService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ParentScraperService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
