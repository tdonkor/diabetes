import { Component, OnInit } from '@angular/core';
import { IBodyMass} from '../../../shared/interfaces';
import {MatTableDataSource} from '@angular/material';
import {WeightsService} from '../../../services/weights.service';
import {filter} from 'rxjs/operators';
import {Router} from '@angular/router';

@Component({
  selector: 'app-weight-list',
  templateUrl: './weight-list.component.html',
  styleUrls: ['./weight-list.component.scss']
})
export class WeightListComponent implements OnInit {

  weightsList: IBodyMass[] = [];
  numOfWeights = 0;
  date = new Date();
  dataSource;


  config: any;

  constructor(private weightsService: WeightsService,   private router: Router) {


    this.config = {
      itemsPerPage: 14,
      currentPage: 1,

    };
  }

  ngOnInit() {

    // use the get getWeightReadings in the weights Service
    // need to tell getWeightReadings to make the call to get the data
    // so need to subscribe from the Async operation
    this.weightsService.getWeightReadings()
      .subscribe((readings: IBodyMass[]) => this.weightsList = readings);
    this.dataSource = new MatTableDataSource(this.weightsList);

  }


  calculateNumOfWeights(num: number) {
    this.numOfWeights = num;
    this.weightsService.setIdNumber(this.numOfWeights);
  }



  getColor(reading: number) {
    if (reading > 7.0 ) { return 'red'; }
    if (reading < 4.0 ) { return 'green'; }
  }

  pageChanged(event) {
    this.config.currentPage = event;
  }

  addNewBmiReading() {
    this.router.navigate(['/addWeightReading'],  { queryParams:  filter, skipLocationChange: true});
  }

}
