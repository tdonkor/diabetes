import { NgModule } from '@angular/core';
import {Routes, RouterModule, ExtraOptions} from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {DefinitionsComponent} from './components/definitions/definitions.component';
import {InformationComponent} from './components/information/information.component';
import {SingleReadingComponent} from './components/diabetes/single-reading/single-reading.component';
import {PageNotFoundComponent} from './components/page-not-found/page-not-found.component';
import {SugarReadingFormComponent} from './components/diabetes/sugar-reading-form/sugar-reading-form.component';
import {DiabetesListComponent} from './components/diabetes/diabetes-list/diabetes-list.component';
import {AppointmentFormComponent} from './components/appointments/appointment-form/appointment-form.component';
import {SingleAppointmentComponent} from './components/appointments/single-appointment/single-appointment.component';
import {AppointmentListComponent} from './components/appointments/appointment-list/appointment-list.component';
import {HealthComponent} from './components/health/health.component';
import {DietComponent} from './components/health/diet/diet.component';
import {ExerciseComponent} from './components/health/exercise/exercise.component';
import {MedicationComponent} from './components/medication/medication.component';
import {WeightListComponent} from './components/weight/weight-list/weight-list.component';
import {WeightFormComponent} from './components/weight/weight-form/weight-form.component';
import {SingleWeightComponent} from './components/weight/single-weight/single-weight.component';
import {WaistComponent} from './components/weight/waist/waist.component';
import {AveragesComponent} from './components/diabetes/diabetes-list/averages/averages.component';
import {FoodgroupsComponent} from './components/health/diet/foodgroups/foodgroups.component';
import {EatingComponent} from './components/health/diet/eating/eating.component';
import {GlycemicIndexComponent} from './components/health/diet/glycemic-index/glycemic-index.component';
import {GlycaemicTablesComponent} from './components/health/diet/glycemic-index/glycaemic-tables/glycaemic-tables.component';

const routerOptions: ExtraOptions = {
  scrollPositionRestoration: 'enabled',
  anchorScrolling: 'enabled',
  scrollOffset: [0, 64],
};


const routes: Routes = [
  {path: '', component: HomeComponent, data: {title: 'Diabetes Home Page'} }, // root
  {path: 'home', component: HomeComponent, data: {title: 'Diabetes Home Page'} }, // home
  {path: 'defs', component: DefinitionsComponent, data: {title: 'Diabetes Definitions'} }, // home
  {path: 'info', component: InformationComponent, data: {title: 'Diabetes Information'} }, // home
  {path: 'sugarReadings', component: DiabetesListComponent, data: {title: 'Sugar Level Readings'} },
  {path: 'addSugarReading', component: SugarReadingFormComponent, data: {title: 'Sugar Level input Form'} },
  {path: 'singleId/:id', component: SingleReadingComponent,  data: {title: 'Single Sugar Level Reading'} },
  {path: 'appointments', component: AppointmentListComponent, data: {title: 'Diabetes Appointments'} },
  {path: 'addAppointment', component: AppointmentFormComponent, data: {title: 'Diabetes Appointment Input Form'} },
  {path: 'diabeticHealth', component: HealthComponent, data: {title: 'Diabetes Health'} },
  {path: 'singleAppointment/:id', component: SingleAppointmentComponent,  data: {title: 'Diabetes Appointment'} },
  {path: 'diet', component: DietComponent,  data: {title: 'Diabetes and Diet'} },
  {path: 'exercise', component: ExerciseComponent,  data: {title: 'Diabetes and Exercise'} },
  {path: 'medication', component: MedicationComponent,  data: {title: 'Diabetes Medication Taken'} },
  {path: 'weightList', component: WeightListComponent,  data: {title: 'BodyMass Readings'} },
  {path: 'addWeightReading', component: WeightFormComponent,  data: {title: 'BodyMass Input Form'} },
  {path: 'singleWeight/:id', component: SingleWeightComponent,  data: {title: 'Single BodyMass Reading'} },
  {path: 'waist/:id', component: WaistComponent,  data: {title: 'Waist Reading Information'} },
  {path: 'readingAverages', component: AveragesComponent,  data: {title: 'Sugar Readings Data'} },
  {path: 'groups', component: FoodgroupsComponent,  data: {title: 'Food Groups'} },
  {path: 'eating', component: EatingComponent,  data: {title: 'What Should I Eat? '} },
  {path: 'glycemic', component: GlycemicIndexComponent,  data: {title: 'Glycaemic Index of Foods'} },
  {path: 'glyceamicTables', component: GlycaemicTablesComponent,  data: {title: 'Glycaemic Tables' }},
  {path: '**', component: PageNotFoundComponent, data: {title: 'Error Page'} },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
