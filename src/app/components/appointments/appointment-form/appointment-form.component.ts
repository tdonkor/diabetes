import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Sugar} from '../../../shared/sugarLevel';
import {Appointments} from '../../../shared/appointment';
import {Router} from '@angular/router';
import {AppointmentsService} from '../../../services/appointments.service';
import {filter} from 'rxjs/operators';

@Component({
  selector: 'app-appointment-form',
  templateUrl: './appointment-form.component.html',
  styleUrls: ['./appointment-form.component.scss']
})
export class AppointmentFormComponent implements OnInit {
  @ViewChild('f', {static: false}) appointmentsForm: NgForm;

  appointments: number;
  newAppointment = new Appointments();

  constructor(private appointmentsService: AppointmentsService,
              private router: Router) { }

  ngOnInit() {
    this.appointments = this.appointmentsService.getIDNum();
  }

  onSubmit() {
    this.newAppointment.id =  this.appointments; //  this.sugarLevelForm.value.userData.Id;
    this.newAppointment.title = this.appointmentsForm.value.userData.Title;
    this.newAppointment.location = this.appointmentsForm.value.userData.Location;
    this.newAppointment.date = this.appointmentsForm.value.userData.Date;
    this.newAppointment.results = this.appointmentsForm.value.userData.Results;
    this.newAppointment.notes = this.appointmentsForm.value.userData.Notes;

    this.appointmentsService.postAppointmentReading(this.newAppointment)
      .subscribe((readings: Appointments) => this.newAppointment = readings); // assign diabetes readings to the diabetesReading property

    // reset the form
    this.appointmentsForm.reset();
    this.router.navigate(['/addAppointment'],  { queryParams:  filter, skipLocationChange: true});

  }

}
