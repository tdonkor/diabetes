import { Component, OnInit } from '@angular/core';
import {IAppointments, } from '../../../shared/interfaces';
import {AppointmentsService} from '../../../services/appointments.service';
import {MatTableDataSource} from '@angular/material';
import {filter} from 'rxjs/operators';
import {Router} from '@angular/router';

@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrls: ['./appointment-list.component.scss']
})
export class AppointmentListComponent implements OnInit {

  // <app-diabetes-list [diabetesList]="diabetesReadings" ></app-diabetes-list>
  // diabetesReading is the populated array in the diabetes component with the list from the database.

  // passed from another component
  appointmentList: IAppointments[] = [];
  numOfAppointments = 0;
  date = new Date();
  dataSource;
  displayedColumns: string[];


  config: any;

  constructor(private appointmentsService: AppointmentsService, private router: Router) {


    this.config = {
      itemsPerPage: 14,
      currentPage: 1,
      totalItems: this.appointmentList.length
    };
  }

  ngOnInit() {

    // use the get getAppointmentReadings in the Appointment Service
    // need to tell getAppointmentReadings to make the call to get the data
    // so need to subscribe from the Async operation
    this.appointmentsService.getAppointmentReadings()
      .subscribe((readings: IAppointments[]) => this.appointmentList = readings);

    this.displayedColumns = ['Id', 'Title', 'Location', 'Date', 'Results', 'Notes' ];
    this.dataSource = new MatTableDataSource(this.appointmentList);
    console.log(this.appointmentList);
  }


  calculateNumOfAppointments(num: number) {
    this.numOfAppointments = num;
    this.appointmentsService.setIdNumber(this.numOfAppointments);
  }


  pageChanged(event) {
    this.config.currentPage = event;
  }

  addNewAppointment(){
    this.router.navigate(['/addAppointment'],  { queryParams:  filter, skipLocationChange: true});
  }
}
