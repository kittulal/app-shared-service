import { TestBed } from '@angular/core/testing';

import { Intercomm } from './intercomm';

describe('Intercomm', () => {
  let service: Intercomm;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Intercomm);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
