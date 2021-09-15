import { Injectable } from '@angular/core';
import { IAppointments } from '../shared/interfaces';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppointmentsService {

  baseUrl = 'https://localhost:44344/api/Appointments/';
  IdNum: number;
  public appointments: IAppointments[] = [];
  isLoading = false;

  constructor(private http: HttpClient) { }

  // GET all posts
  // from the API

  getAppointmentReadings(): Observable<IAppointments[]> {
    return this.http.get<IAppointments[]>(this.baseUrl);
  }

  getSingleAppointment(id: number): Observable<IAppointments> {
    return this.http.get<IAppointments>(this.baseUrl + id);
  }
  postAppointmentReading(appointments: IAppointments): Observable<IAppointments> {
    return this.http.post<IAppointments>(this.baseUrl, appointments);
  }

  deleteAppointmentReading(id: number): Observable<IAppointments> {
    return this.http.delete<IAppointments>(this.baseUrl + id);
  }

  setIdNumber(id: number) {
    this.IdNum = id;
  }
  getIDNum() {
    return this.IdNum + 1;
  }
}
