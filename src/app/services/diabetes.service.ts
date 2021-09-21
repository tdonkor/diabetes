import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {IDiabetes} from '../shared/interfaces';
import {Observable} from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import {Sugar} from '../shared/sugarLevel';

@Injectable({
  providedIn: 'root'
})
export class DiabetesService {


  baseUrl = 'https://localhost:44344/api/Diabetes/';
  IdNum: number;
  public sugarReadings: IDiabetes[] = [];

  readingAvg: number;
  morningAvg: number;
  afternoonAvg: number;
  eveningAvg: number;

  numReadings: number;
  numMorningReadings: number;
  numAfternoonReadings: number;
  numEveningReadings: number;


  numOfHyper = 0;
  morningHyper = 0;
  afternoonHyper = 0;
  eveningHyper = 0;

  numOfHypo = 0;
  morningHypo = 0;
  afternoonHypo = 0;
  eveningHypo = 0;

  morningHigh: number;
  morningLow: number;

  afternoonHigh: number;
  afternoonLow: number;

  eveningHigh: number;
  eveningLow: number;

  overallHigh: number;
  overallLow: number;

  lessThan4: number;
  between45: number;
  between56: number;
  between67: number;
  greaterThan7: number;


  constructor(private http: HttpClient) { }

   // CRUD HTTP requests to the database.

  getDiabetesReadings(): Observable<IDiabetes[]> {
    return this.http.get<IDiabetes[]>(this.baseUrl);
  }

  getSingleReading(id: number): Observable<IDiabetes> {
    return this.http.get<IDiabetes>(this.baseUrl + id);
  }
  postDiabetesReading(sugarReading: IDiabetes): Observable<IDiabetes> {
    return this.http.post<IDiabetes>(this.baseUrl, sugarReading);
  }

  deleteDiabetesReading(id: number): Observable<IDiabetes> {
    return this.http.delete<IDiabetes>(this.baseUrl + id);
  }

  setIdNumber(id: number) {
    this.IdNum = id;
  }
  getIDNum() {
    return this.IdNum + 1;
  }
}
