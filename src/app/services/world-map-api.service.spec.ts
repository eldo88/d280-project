import { TestBed } from '@angular/core/testing';

import { WorldMapApiService } from './world-map-api.service';

describe('WorldMapApiService', () => {
  let service: WorldMapApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WorldMapApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
