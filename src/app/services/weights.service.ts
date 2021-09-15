import { Injectable } from '@angular/core';
import {IAppointments, IBodyMass} from '../shared/interfaces';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeightsService {


  baseUrl = 'https://localhost:44344/api/BodyMasses/';
  IdNum: number;



  constructor(private http: HttpClient) { }

  getWeightReadings(): Observable<IBodyMass[]> {
    return this.http.get<IBodyMass[]>(this.baseUrl);
  }

  getSingleWeight(id: number): Observable<IBodyMass> {
    return this.http.get<IBodyMass>(this.baseUrl + id);
  }
  postWeightReading(weightReading: IBodyMass): Observable<IBodyMass> {
    return this.http.post<IBodyMass>(this.baseUrl, weightReading);
  }

  deleteWeightReading(id: number): Observable<IBodyMass> {
    return this.http.delete<IBodyMass>(this.baseUrl + id);
  }

  setIdNumber(id: number) {
    this.IdNum = id;
  }
  getIDNum() {
    return this.IdNum + 1;
  }

}
