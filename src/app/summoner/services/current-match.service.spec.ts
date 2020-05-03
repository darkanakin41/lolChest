import { TestBed } from '@angular/core/testing';

import { CurrentMatchService } from './current-match.service';

describe('CurrentMatchService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CurrentMatchService = TestBed.get(CurrentMatchService);
    expect(service).toBeTruthy();
  });
});
