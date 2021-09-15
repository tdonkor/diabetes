import {IDiabetes} from './interfaces';


export class Sugar implements IDiabetes  {
  date: Date;
  id: number;
  reading: number;
  timeOfDay: number;
  medication: string;
  notes: string;
}
