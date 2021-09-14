import { Component, OnInit } from '@angular/core';
import { IBodyMass} from '../../../shared/interfaces';
import {ActivatedRoute, Router} from '@angular/router';
import {MatDialog} from '@angular/material';
import {WeightsService} from '../../../services/weights.service';
import {ConfirmDialogModel} from '../../../shared/confirmationDialogModel';
import {ConfirmDialogBoxComponent} from '../../confirm-dialog-box/confirm-dialog-box.component';
import {filter} from 'rxjs/operators';
import {BodyMass} from '../../../shared/BodyMass';

@Component({
  selector: 'app-single-weight',
  templateUrl: './single-weight.component.html',
  styleUrls: ['./single-weight.component.scss']
})
export class SingleWeightComponent implements OnInit {

  weightValue = new BodyMass();
  constructor(private weightsService: WeightsService,
              private route: ActivatedRoute,
              private dialog: MatDialog,
              private router: Router) { }

  ngOnInit() {

    const id = +this.route.snapshot.paramMap.get('id');

    this.weightsService.getSingleWeight(id).subscribe((reading: IBodyMass) => {
      this.weightValue = reading;
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
        this.weightsService.deleteWeightReading(id).subscribe((reading: IBodyMass) => {
          this.weightValue = reading;
        });
      }
    });
  }

  editReadingDialog(id: number) {
  }

}
