import { CameraDirectory } from './camera-directory';

export class PhotosReply {
    errCode: number | undefined;
    errMsg: string | undefined;
    dirs: CameraDirectory[] = [];
}
