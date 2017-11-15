import { TestBed, inject } from '@angular/core/testing';

import { Sse } from './sse.service';

describe('SseService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Sse]
    });
  });

  it('should be created', inject([Sse], (service: Sse) => {
    expect(service).toBeTruthy();
  }));
});
