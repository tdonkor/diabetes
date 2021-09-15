import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {IDefinitions, IMedication} from '../shared/interfaces';
import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  baseUrl = 'assets/data/';

  // http client injected into the constructor of the data service we can use it to call the server to get some data
  // in this example we call the the assets folder on the server to grab the json file
  // but could be done for a restful service by changing the url
  //
  constructor(private httpClient: HttpClient) { }

  // The service makes a request to the database/File with the HTTP Get call and  the response we get back is
  // an observable. An observable is a sequence of items that arrive asynchronously over time. This observable
  // should match the IAbbreviations interface
  //


  getDefinitions(): Observable<IDefinitions[]> {
    return this.httpClient.get<IDefinitions[]>(this.baseUrl + 'definitions.json')
      // server may be down or network error catch errors through the pipeline like a physical pipe using operators like catch Error
      .pipe(
        // Can put operators into these pipes  i'e catchError. Push any errors out to the handleError() method defined below
        catchError(this.handleError)
      );
  }

  getMedication(): Observable<IMedication[]> {
    return this.httpClient.get<IMedication[]>(this.baseUrl + 'medication.json')
      // server may be down or network error catch errors through the pipeline like a physical pipe using operators like catch Error
      .pipe(
        // Can put operators into these pipes  i'e catchError. Push any errors out to the handleError() method defined below
        catchError(this.handleError)
      );
  }

  // report and log errors to the console
  private handleError(error: any) {
    console.error('server error:', error);
    if (error.error instanceof Error) {
      const errMessage = error.error.message;
      return throwError(errMessage);
    }

    return throwError(error || 'Node.js Server error');
  }
}
