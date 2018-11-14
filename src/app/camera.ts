import { Observable, of } from 'rxjs';
import { PhotosReply } from './photos-reply';

export interface Camera {
    getPhotos(): Observable<PhotosReply>;
    getLiveUri(): string;
}
