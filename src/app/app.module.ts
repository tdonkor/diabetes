import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';
import {MatDialogModule, MatIconModule, MatMenuModule, MatPaginatorModule, MatTableModule, MatToolbarModule} from '@angular/material';
import { FooterComponent } from './components/footer/footer.component';
import { MenuComponent } from './components/menu/menu.component';
import { HomeComponent } from './components/home/home.component';
import { DefinitionsComponent } from './components/definitions/definitions.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { InformationComponent } from './components/information/information.component';
import {RouterModule} from '@angular/router';
import { DiabetesListComponent } from './components/diabetes/diabetes-list/diabetes-list.component';
import { SingleReadingComponent } from './components/diabetes/single-reading/single-reading.component';
import { SugarReadingFormComponent } from './components/diabetes/sugar-reading-form/sugar-reading-form.component';
import {DiabetesService} from './services/diabetes.service';
import { ConfirmDialogBoxComponent } from './components/confirm-dialog-box/confirm-dialog-box.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { AppointmentListComponent } from './components/appointments/appointment-list/appointment-list.component';
import { SingleAppointmentComponent } from './components/appointments/single-appointment/single-appointment.component';
import { AppointmentFormComponent } from './components/appointments/appointment-form/appointment-form.component';
import {AppointmentsService} from './services/appointments.service';
import { DietComponent } from './components/health/diet/diet.component';
import { ExerciseComponent } from './components/health/exercise/exercise.component';
import { HealthComponent } from './components/health/health.component';
import { MedicationComponent } from './components/medication/medication.component';
import {MaterialsModule} from '../materials/materials.module';
import { WeightListComponent } from './components/weight/weight-list/weight-list.component';
import { WeightFormComponent } from './components/weight/weight-form/weight-form.component';
import { SingleWeightComponent } from './components/weight/single-weight/single-weight.component';
import {WeightsService} from './services/weights.service';
import { WaistComponent } from './components/weight/waist/waist.component';
import { AveragesComponent } from './components/diabetes/diabetes-list/averages/averages.component';
import { GlycemicIndexComponent } from './components/health/diet/glycemic-index/glycemic-index.component';
import { FoodgroupsComponent } from './components/health/diet/foodgroups/foodgroups.component';
import { EatingComponent } from './components/health/diet/eating/eating.component';
import { GlycaemicTablesComponent } from './components/health/diet/glycemic-index/glycaemic-tables/glycaemic-tables.component';
import { SugarChartComponent } from './components/diabetes/diabetes-list/averages/sugar-chart/sugar-chart.component';
import {ChartsModule} from 'ng2-charts';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MenuComponent,
    HomeComponent,
    DefinitionsComponent,
    InformationComponent,
    DiabetesListComponent,
    SingleReadingComponent,
    SugarReadingFormComponent,
    ConfirmDialogBoxComponent,
    PageNotFoundComponent,
    AppointmentListComponent,
    SingleAppointmentComponent,
    AppointmentFormComponent,
    DietComponent,
    ExerciseComponent,
    HealthComponent,
    MedicationComponent,
    WeightListComponent,
    WeightFormComponent,
    SingleWeightComponent,
    WaistComponent,
    AveragesComponent,
    GlycemicIndexComponent,
    FoodgroupsComponent,
    EatingComponent,
    GlycaemicTablesComponent,
    SugarChartComponent,

  ],
  entryComponents: [
    ConfirmDialogBoxComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatTableModule,
    HttpClientModule,
    FormsModule,
    RouterModule,
    MatDialogModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    MatPaginatorModule,
    MaterialsModule,
    ChartsModule,

  ],
  providers: [DiabetesService, AppointmentsService, WeightsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
