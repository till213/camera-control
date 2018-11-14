import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Camera } from './camera';
import { PhotosReply } from './photos-reply';

@Injectable()
export class PentaxCameraService implements Camera {

  constructor(private http: HttpClient) { }

  /**
     * Handle Http operation that failed.
     * Let the app continue.
     * @param operation - name of the operation that failed
     * @param result - optional value to return as the observable result
     */
    private handleError<T>(operation = 'operation', result?: T) {
      return (error: any): Observable<T> => {
  
        // TODO: send the error to remote logging infrastructure
        console.error(error); // log to console instead
  
        // TODO: better job of transforming error for user consumption
        console.log(`${operation} failed: ${error.message}`);
  
        // Let the app keep running by returning an empty result.
        return of(result as T);
      }
    }

  getPhotos(): Observable<PhotosReply> {
    console.log('Start fetching thumbnails...');
    return this.http.get<PhotosReply>('http://192.168.0.1/v1/photos');
    // TODO FIXME
    /*.pipe(
      tap(_ => console.log('fetched heroes')),
      catchError(this.handleError('getPhotos'))
    ); */
  }

  getLiveUri(): string {
    return 'http://192.168.0.1/v1/liveview';
  }

  

}

