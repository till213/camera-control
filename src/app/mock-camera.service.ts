import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Camera } from './camera';
import { PhotosReply } from './photos-reply';
import { CameraDirectory } from './camera-directory';

@Injectable()
export class MockCameraService implements Camera {

  constructor() { }

  getPhotos(): Observable<PhotosReply> {
    const photosReply: PhotosReply = {errCode: null, errMsg: '', dirs: null};
    const dir1: CameraDirectory = {name: null, files: null };

    photosReply.dirs = new Array<CameraDirectory>(1);
    dir1.name = './assets/mock';
    dir1.files = [];
    dir1.files.push('img1.jpg', 'img2.jpg', 'img3.jpg');
    photosReply.dirs[0] = dir1;
    return of(photosReply);
  }

  getLiveUri(): string {
    return './assets/mock/liveview.jpg';
  }

}
