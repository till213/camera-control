import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { PhotosReply } from './photos-reply';
import { Camera } from './camera';

@Injectable()
export abstract class CameraService implements Camera {
    abstract getPhotos(): Observable<PhotosReply>;
    abstract getLiveUri(): string;
}
