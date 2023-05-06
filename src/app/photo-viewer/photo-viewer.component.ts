import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PhotosReply } from '../photos-reply';
import { CameraService } from '../camera.service';
import { PhotoInfoComponent } from '../components/photo-info/photo-info.component';


@Component({
  selector: 'app-photo-viewer',
  templateUrl: './photo-viewer.component.html',
  styleUrls: ['./photo-viewer.component.css']
})
export class PhotoViewerComponent implements OnInit {

  @ViewChild(PhotoInfoComponent, {static:false})
  photoInfoComponent: PhotoInfoComponent | undefined;
  reply: PhotosReply | undefined;

  constructor(private camera: CameraService) { }

  ngOnInit() { }

  fetchThumbnails(): void {
     this.camera.getPhotos().subscribe(reply => this.reply = reply);
  }

  showDetails(directory: string, file: string) {
    console.log('Details for: ' + directory + '/' + file);
    this.photoInfoComponent?.showInfo(directory + '/' + file);
  }

}
