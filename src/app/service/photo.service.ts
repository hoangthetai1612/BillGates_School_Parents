import { Injectable } from '@angular/core';
import { Camera, CameraResultType } from '@capacitor/camera';
// eslint-disable-next-line @typescript-eslint/naming-convention

interface Photo {
    filepath: string;
    webviewPath: string;
    base64: string;
}
@Injectable({
    providedIn: 'root',
})
export class PhotoService {
    public photos: Photo[] = [];

    constructor() { }

    public async addNewToGallery() {
        // Take a photo
        const capturedPhoto = await Camera.getPhoto({
            resultType: CameraResultType.Base64,
            quality: 100,
        });

        this.photos.unshift({
            filepath: 'soon...',
            webviewPath: capturedPhoto.webPath,
            base64: capturedPhoto.base64String,
        });
    }

    shiftImg() {
        this.photos.shift();
    }
}
