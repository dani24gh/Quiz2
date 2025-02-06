import { TestBed } from '@angular/core/testing';

import { MalUwuService } from './mal-uwu.service';

describe('MalUwuService', () => {
  let service: MalUwuService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MalUwuService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
