import { CameraDirectory } from './camera-directory';

export class PhotosReply {
    errCode: number;
    errMsg: string;
    dirs: CameraDirectory[];
}
