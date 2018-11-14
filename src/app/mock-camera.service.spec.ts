import { TestBed, inject } from '@angular/core/testing';

import { MockCameraService } from './mock-camera.service';

describe('MockCameraService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MockCameraService]
    });
  });

  it('should be created', inject([MockCameraService], (service: MockCameraService) => {
    expect(service).toBeTruthy();
  }));
});
