import {IAppointments} from './interfaces';


export class Appointments implements IAppointments {
  id: number;
  title: string;
  location: string;
  date: Date;
  results: string;
  notes: string;
}
