import { TestBed, inject } from '@angular/core/testing';

import { PentaxCameraService } from './pentax-camera.service';

describe('PentaxCameraService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PentaxCameraService]
    });
  });

  it('should be created', inject([PentaxCameraService], (service: PentaxCameraService) => {
    expect(service).toBeTruthy();
  }));
});
