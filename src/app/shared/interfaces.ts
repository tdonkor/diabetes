
export interface IDefinitions {
  title: string;
  description: string;
}

export interface IDiabetes {
  id: number;
  reading: number;
  date: Date;
  timeOfDay: number;
  medication: string;
  notes: string;
}

export interface IAppointments {
  id: number;
  title: string;
  location: string;
  date: Date;
  results: string;
  notes: string;
}


export interface IMedication {
  medication: string;
  description: string;
  dose: string;
  intake: string;
  notes: string;
}

export interface IBodyMass {
  id: number;
  weight: number;
  height: number;
  waist: number;
  date: Date;
  timeOfDay: number;
  bmi: number;
  notes: string;
}

export interface IGlaecemic {
  id: number;
  name: string;
  gi: number;
}
