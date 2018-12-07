import { TestBed } from '@angular/core/testing';

import { VideoServisService } from './video-servis.service';

describe('VideoServisService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VideoServisService = TestBed.get(VideoServisService);
    expect(service).toBeTruthy();
  });
});
