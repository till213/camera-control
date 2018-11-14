import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { CameraComponent } from './camera/camera.component';
import { PhotoViewerComponent } from './photo-viewer/photo-viewer.component';
import { CameraService } from './camera.service';
import { PentaxCameraService } from './pentax-camera.service';
import { PhotoInfoComponent } from './components/photo-info/photo-info.component';

@NgModule({
  declarations: [
    AppComponent,
    CameraComponent,
    PhotoViewerComponent,
    PhotoInfoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
        path: 'camera',
        component: CameraComponent,
      },
      {
        path: 'photos',
        component: PhotoViewerComponent,
      }
    ])
  ],
  providers: [{ provide: CameraService, useClass: PentaxCameraService }],
  bootstrap: [AppComponent]
})
export class AppModule { }
