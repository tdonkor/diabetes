import { Component, OnInit } from '@angular/core';
import {IDiabetes} from '../../../shared/interfaces';
import {DiabetesService} from '../../../services/diabetes.service';
import {ActivatedRoute, Router} from '@angular/router';
import {MatDialog} from '@angular/material';
import {ConfirmDialogBoxComponent} from '../../confirm-dialog-box/confirm-dialog-box.component';
import {filter} from 'rxjs/operators';
import {ConfirmDialogModel} from '../../../shared/confirmationDialogModel';

@Component({
  selector: 'app-single-reading',
  templateUrl: './single-reading.component.html',
  styleUrls: ['./single-reading.component.scss']
})
export class SingleReadingComponent implements OnInit {

  reading: IDiabetes;

  constructor(private diabetesService: DiabetesService,
              private route: ActivatedRoute,
              private dialog: MatDialog,
              private router: Router) { }

  ngOnInit() {

    const id = +this.route.snapshot.paramMap.get('id');

    this.diabetesService.getSingleReading(id).subscribe((reading: IDiabetes) => {
      this.reading = reading;
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
        this.diabetesService.deleteDiabetesReading(id).subscribe((reading: IDiabetes) => {
          this.reading = reading;
        });
      }
    });
  }

  // backToList() {
  //   this.router.navigate(['/diabetes'],  { queryParams:  filter, skipLocationChange: true});
  // }

  getColor(reading: number) {
    if (reading > 7.0 ) { return 'red'; }
    if (reading < 4.0 ) { return 'green'; }
  }

}
