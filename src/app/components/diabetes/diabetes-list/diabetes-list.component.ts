import {Component, OnInit, ViewChild} from '@angular/core';
import {IDiabetes} from '../../../shared/interfaces';
import {MatTableDataSource} from '@angular/material';
import {DiabetesService} from '../../../services/diabetes.service';
import {AveragesComponent} from './averages/averages.component';
import {filter} from 'rxjs/operators';
import {Router} from '@angular/router';


// noinspection DuplicatedCode
@Component({
  selector: 'app-diabetes-list',
  templateUrl: './diabetes-list.component.html',
  styleUrls: ['./diabetes-list.component.scss']
})
export class DiabetesListComponent implements OnInit {
  // @input DiabetesList - the Diabetes[] passed to us from the parent i.e in the diabetes html file
  // <app-diabetes-list [diabetesList]="diabetesReadings" ></app-diabetes-list>
  // diabetesReading is the populated array in the diabetes component with the list from the database.



  // passed from another component
  diabetesList: IDiabetes[] = [];

  // numOfReadings: number[] = [];
  // readingAverages: number[] = [];

  // dateTime = new Date();
  dataSource;
  displayedColumns: string[];

  readingTotal: number;
  morningTotal: number;
  afterTotal: number;
  eveningTotal: number;

  //pass these to the average component
  avReading: number;
  morningAv: number;
  afterAv: number;
  eveningAv: number;

  numOfSugarReadings: number;
  numOfMorningSugarReadings: number;
  numOfAfterSugarReadings: number;
  numOfEveningSugarReadings: number;


  numOfHyper: number;
  morningHyper : number;
  afternoonHyper: number;
  eveningHyper: number;

  numOfHyp: number;
  morningHypo: number;
  afternoonHypo: number;
  eveningHypo: number;

  morningHigh: number;
  morningLow: number;

  afternoonHigh: number;
  afternoonLow: number;

  eveningHigh: number;
  eveningLow: number;

  overallHigh: number;
  overallLow: number;

  lessThan4: number;
  between45: number;
  between56: number;
  between67: number;
  greaterThan7: number;


  config: any;

  constructor(private diabetesService: DiabetesService,  private router: Router) {
    this.config = {
      itemsPerPage: 10,
      currentPage: 1,
      totalItems: this.diabetesList.length
    };
  }

    ngOnInit() {

    // use the get getDiabetesReadings in the diabetes Service
    // need to tell getDiabetesReadings to make the call to get the data
    // so need to subscribe from the Async operation
      this.diabetesService.getDiabetesReadings()  // remove ';' after test
    // assign diabetes readings to the diabetesReading property
     .subscribe((readings: IDiabetes[]) => this.diabetesList = readings);

      this.dataSource = new MatTableDataSource(this.diabetesList);

  }


  // Morning
  calculateMorningAverage() {
    this.numOfMorningSugarReadings = 0;
    this.morningTotal = 0;
    this.morningHypo = 0;
    this.morningHyper = 0;
    this.morningLow = Number.MAX_VALUE;
    this.morningHigh = 0;

    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < this.diabetesList.length; i++) {
      if (this.diabetesList[i].timeOfDay.toString(0) === 'Morning') {
        this.morningTotal += this.diabetesList[i].reading;
        this.numOfMorningSugarReadings++;

        if(this.diabetesList[i].reading < 4.0){
          this.morningHypo++;
        }
        if(this.diabetesList[i].reading > 7.0){
          this.morningHyper++;
        }

        //get lowest
        if( this.diabetesList[i].reading < this.morningLow){
          this.morningLow = this.diabetesList[i].reading;
        }

        // get highest
        if( this.diabetesList[i].reading > this.morningHigh){
          this.morningHigh = this.diabetesList[i].reading;
        }
      }
   }
    // calculate the Average
    this.morningAv = this.morningTotal / this.numOfMorningSugarReadings;

    // Populate the service
    this.diabetesService.numMorningReadings = this.numOfMorningSugarReadings;
    this.diabetesService.morningAvg = this.morningAv;
    this.diabetesService.morningHypo = this.morningHypo;
    this.diabetesService.morningHyper = this.morningHyper;
    this.diabetesService.morningLow = this.morningLow;
    this.diabetesService.morningHigh = this.morningHigh

  }

   // Afternoon
  calculateAfternoonAverage() {
    this.numOfAfterSugarReadings = 0;
    this.afterTotal = 0;
    this.afternoonHypo = 0;
    this.afternoonHyper = 0;
    this.afternoonLow = Number.MAX_VALUE;
    this.afternoonHigh = 0;

    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < this.diabetesList.length; i++) {
      if (this.diabetesList[i].timeOfDay.toString(0) === 'Afternoon') {
        this.afterTotal += this.diabetesList[i].reading;
        this.numOfAfterSugarReadings++;
        if(this.diabetesList[i].reading < 4.0){
          this.afternoonHypo++;
        }
        if(this.diabetesList[i].reading > 7.0){
          this.afternoonHyper++;
        }
        //get lowest
        if( this.diabetesList[i].reading < this.afternoonLow){
          this.afternoonLow = this.diabetesList[i].reading;
        }

        // get highest
        if( this.diabetesList[i].reading > this.afternoonHigh){
          this.afternoonHigh = this.diabetesList[i].reading;
        }
      }
    }
    this.afterAv = this.afterTotal / this.numOfAfterSugarReadings;

    // pouulate the service
    this.diabetesService.numAfternoonReadings = this.numOfAfterSugarReadings;
    this.diabetesService.afternoonAvg = this.afterAv;
    this.diabetesService.afternoonHypo = this.afternoonHypo
    this.diabetesService.afternoonHyper = this.afternoonHyper
    this.diabetesService.afternoonLow = this.afternoonLow;
    this.diabetesService.afternoonHigh = this.afternoonHigh

  }

  // Evening
  calculateEveningAverage() {
    this.numOfEveningSugarReadings = 0;
    this.eveningTotal = 0;
    this.eveningHyper = 0;
    this.eveningHypo = 0;
    this.eveningLow = 0;
    this.eveningHigh = 0;
    this.eveningLow = Number.MAX_VALUE;
    this.eveningHigh = 0;

    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < this.diabetesList.length; i++) {
      if (this.diabetesList[i].timeOfDay.toString(0) === 'Evening') {
        this.eveningTotal += this.diabetesList[i].reading;
        this.numOfEveningSugarReadings++;
        if(this.diabetesList[i].reading < 4){
          this.eveningHypo++;
        }
        if(this.diabetesList[i].reading > 7){
          this.eveningHyper++;
        }

        if( this.diabetesList[i].reading < this.eveningLow){
          this.eveningLow = this.diabetesList[i].reading;
        }

        // get highest
        if( this.diabetesList[i].reading > this.eveningHigh){
          this.eveningHigh = this.diabetesList[i].reading;
        }
      }
    }
    this.eveningAv = this.eveningTotal / this.numOfEveningSugarReadings;

    //poulate the service
    this.diabetesService.numEveningReadings = this.numOfEveningSugarReadings;
    this.diabetesService.eveningAvg = this.eveningAv;
    this.diabetesService.eveningHypo = this.eveningHypo
    this.diabetesService.eveningHyper = this.eveningHyper
    this.diabetesService.eveningLow = this.eveningLow;
    this.diabetesService.eveningHigh = this.eveningHigh

  }

  //
  calculateSections() {
    this.lessThan4 = 0;
    this.between45 = 0;
    this.between56 = 0;
    this.between67 = 0;
    this.greaterThan7 = 0;
    for (let i = 0; i < this.diabetesList.length; i++) {

          if(this.diabetesList[i].reading < 4.0){
            this.lessThan4++;
          }
          if((this.diabetesList[i].reading >= 4.0) && (this.diabetesList[i].reading <= 5.0) ){
            this.between45++;
          }
          if((this.diabetesList[i].reading > 5.0) && (this.diabetesList[i].reading <= 6.0) ){
            this.between56++;
          }
          if((this.diabetesList[i].reading > 6.0) && (this.diabetesList[i].reading <= 7.0) ){
            this.between67++;
          }
          if(this.diabetesList[i].reading > 7.0){
            this.greaterThan7++;
          }
       }

    // populate the service
    this.diabetesService.lessThan4 = this.lessThan4;
    this.diabetesService.between45 = this.between45;
    this.diabetesService.between56 = this.between56;
    this.diabetesService.between67 = this.between67;
    this.diabetesService.greaterThan7 = this.greaterThan7;
   }


  // Total
  calculateNumOfReadings(num: number) {
    this.numOfSugarReadings = num;
    this.diabetesService.setIdNumber(this.numOfSugarReadings);
  }

  calculateAverage(diabetesArr: IDiabetes[]) {
    this.readingTotal = 0;  // set the total to  0
    this.overallLow = Number.MAX_VALUE;
    this.overallHigh = 0;

   // loop through  pen  and add to the total.
    diabetesArr.forEach((dia: IDiabetes) => {
      this.readingTotal += dia.reading;


      //get lowest
      if( dia.reading < this.overallLow){
        this.overallLow = dia.reading;
      }

      // get highest
      if(dia.reading > this.overallHigh){
        this.overallHigh = dia.reading;
      }
    });
    this.avReading = (this.readingTotal / this.numOfSugarReadings);

    // populate the service
    this.diabetesService.numReadings = this.numOfSugarReadings;
    this.diabetesService.readingAvg = this.avReading;


    this.diabetesService.numOfHypo = this.morningHypo + this.afternoonHypo + this.eveningHypo;
    this.diabetesService.numOfHyper = this.morningHyper + this.afternoonHyper + this.eveningHyper;

    this.diabetesService.overallLow = this.overallLow;
    this.diabetesService.overallHigh = this.overallHigh

  }

  getColor(reading: number) {
    if (reading > 7.0 ) { return 'red'; }
    if (reading < 4.0 ) { return 'green'; }
  }

  pageChanged(event) {
    this.config.currentPage = event;
  }

  addNewReading() {
    this.router.navigate(['/addSugarReading'],  { queryParams:  filter, skipLocationChange: true});
  }
}
