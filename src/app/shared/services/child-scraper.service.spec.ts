import { TestBed } from '@angular/core/testing';

import { ChildScraperService } from './child-scraper.service';

describe('ChildScraperService', () => {
  let service: ChildScraperService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChildScraperService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
