import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { CameraService } from '../camera.service';

const WIDTH = 720;
const HEIGHT = 480;

@Component({
  selector: 'app-camera',
  templateUrl: './camera.component.html',
  styleUrls: ['./camera.component.css']
})
export class CameraComponent implements OnInit {

  liveUri = '/assets/images/liveview_disabled.jpg';
  private liveViewEnabled: boolean;

  constructor(private http: HttpClient, private camera: CameraService) {
    this.liveViewEnabled = false;
  }

  ngOnInit() {
  }

  toggle(): void {
    this.liveViewEnabled = !this.liveViewEnabled;
    this.liveUri = this.liveViewEnabled ? 'http://192.168.0.1/v1/liveview' : '/assets/images/liveview_disabled.jpg';
  }

  focus(x: number, y: number): void {
    console.log('X: ' + x + ' Y: ' + y + ' is valid: ' + this.isValidPosition(x, y));

    if (this.isValidPosition(x, y)) {
      const focusX = Math.ceil(x / WIDTH * 100);
      const focusY = Math.ceil(y / HEIGHT * 100);
      this.http.post('http://192.168.0.1/v1/lens/focus', 'pos=' + focusX + ',' + focusY).subscribe();
      console.log('Focusing on focus X: ' + focusX + ' Y: ' + focusY);
    }
  }

  private isValidPosition(x: number, y: number): boolean {
    // var props = ImageSync.Model.Camera.getProps();
    const invalidMarginXRatio = 80 / 720;
    const invalidMarginYRatio = 60 / 480;
    // if (props != null) {
    //     if (props.focusEffectiveArea != null) {
    //         invalidMarginXRatio = (100 - props.focusEffectiveArea[0]) / 2 / 100;
    //         invalidMarginYRatio = (100 - props.focusEffectiveArea[1]) / 2 / 100
    //     }
    // }
    const minX = WIDTH * invalidMarginXRatio;
    const maxX = WIDTH - WIDTH * invalidMarginXRatio;
    const minY = HEIGHT * invalidMarginYRatio;
    const maxY = HEIGHT - HEIGHT * invalidMarginYRatio;
    return x >= minX && x <= maxX && (y >= minY && y <= maxY);
  }

}
