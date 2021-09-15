import {IBodyMass} from './interfaces';


export class BodyMass implements IBodyMass {
  id: number;
  weight: number;
  height: number;
  waist: number;
  date: Date;
  timeOfDay: number;
  bmi: number;
  notes: string;
}
