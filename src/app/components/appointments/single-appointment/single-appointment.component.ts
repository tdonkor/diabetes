import { Component, OnInit } from '@angular/core';
import {IAppointments} from '../../../shared/interfaces';
import {ActivatedRoute, Router} from '@angular/router';
import {MatDialog} from '@angular/material';
import {AppointmentsService} from '../../../services/appointments.service';
import {ConfirmDialogModel} from '../../../shared/confirmationDialogModel';
import {ConfirmDialogBoxComponent} from '../../confirm-dialog-box/confirm-dialog-box.component';
import {filter} from 'rxjs/operators';

@Component({
  selector: 'app-single-appointment',
  templateUrl: './single-appointment.component.html',
  styleUrls: ['./single-appointment.component.scss']
})
export class SingleAppointmentComponent implements OnInit {

  appointment: IAppointments;

  constructor(private appointmentsService: AppointmentsService,
              private route: ActivatedRoute,
              private dialog: MatDialog,
              private router: Router) { }

  ngOnInit() {


    const id = +this.route.snapshot.paramMap.get('id');

    this.appointmentsService.getSingleAppointment(id).subscribe((reading: IAppointments) => {
      this.appointment = reading;
    });
  }

  removeReadingDialog(id: number) {

    const message = `Are you sure, you want to remove this value?`;
    const title = 'Confirm Action';

    const dialogData =  new ConfirmDialogModel(title, message);

    const dialogRef = this.dialog.open(ConfirmDialogBoxComponent, {
      panelClass: 'confirm-dialog-container',
      data: dialogData,

    });

    dialogRef.afterClosed().subscribe(dialogResult => {
      if (dialogResult) {
        this.appointmentsService.deleteAppointmentReading(id).subscribe((reading: IAppointments) => {
          this.appointment = reading;
        });
      }
    });
  }

  editReadingDialog(id: number) {
}

  backToList() {
    this.router.navigate(['/appointmentsList'],  { queryParams:  filter, skipLocationChange: true});
  }
}
