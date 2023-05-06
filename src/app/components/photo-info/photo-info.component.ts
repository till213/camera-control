import { Component, OnInit, Input } from '@angular/core';

import { CameraService } from '../../camera.service';

@Component({
  selector: 'app-photo-info',
  templateUrl: './photo-info.component.html',
  styleUrls: ['./photo-info.component.css']
})
export class PhotoInfoComponent implements OnInit {

  private photoPath: string | undefined;
  photoUri: string | undefined;
  constructor(private camera: CameraService) { }

  ngOnInit() {
  }

  showInfo(photoPath: string): void {
    this.photoPath = photoPath;
    console.log('Photo Info: ' + photoPath);
  }

}
