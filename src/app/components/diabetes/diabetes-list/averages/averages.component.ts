import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {DiabetesListComponent} from '../diabetes-list.component';
import {DiabetesService} from '../../../../services/diabetes.service';

@Component({
  selector: 'app-averages',
  templateUrl: './averages.component.html',
  styleUrls: ['./averages.component.scss']
})
export class AveragesComponent implements OnInit {

  readingAvg: number;
  morningAvg: number;
  afternoonAvg: number;
  eveningAvg: number;

  numReadings: number;
  numMorningReadings: number;
  numAfternoonReadings: number;
  numEveningReadings: number;

  numOfHyper = 0;
  morningHyper = 0;
  afternoonHyper = 0;
  eveningHyper = 0;

  numOfHypo = 0;
  morningHypo = 0;
  afternoonHypo = 0;
  eveningHypo = 0;

  morningHigh: number;
  morningLow: number;

  afternoonHigh: number;
  afternoonLow: number;

  eveningHigh: number;
  eveningLow: number;

  overallHigh: number;
  overallLow: number;

  dateTime = new Date();

  constructor(private diabetesService: DiabetesService) {
  }

  ngOnInit() {

    // overall
    this.readingAvg = this.diabetesService.readingAvg;
    this.numReadings = this.diabetesService.numReadings;
    this.numOfHypo =  this.diabetesService.numOfHypo;
    this.numOfHyper =  this.diabetesService.numOfHyper;

    // Morning
    this.morningAvg = this.diabetesService.morningAvg;
    this.numMorningReadings = this.diabetesService.numMorningReadings;
    this.morningHypo =  this.diabetesService.morningHypo;
    this.morningHyper =  this.diabetesService.morningHyper;

    // Afternoon
    this.afternoonAvg = this.diabetesService.afternoonAvg;
    this.numAfternoonReadings = this.diabetesService.numAfternoonReadings;
    this.afternoonHypo =  this.diabetesService.afternoonHypo;
    this.afternoonHyper =  this.diabetesService.afternoonHyper;

    // Evening
    this.eveningAvg = this.diabetesService.eveningAvg;
    this.numEveningReadings = this.diabetesService.numEveningReadings;
    this.eveningHypo =  this.diabetesService.eveningHypo;
    this.eveningHyper =  this.diabetesService.eveningHyper;

    this.morningHigh = this.diabetesService.morningHigh;
    this.morningLow = this.diabetesService.morningLow;

    this.afternoonHigh = this.diabetesService.afternoonHigh;
    this.afternoonLow = this.diabetesService.afternoonLow;

    this.eveningHigh = this.diabetesService.eveningHigh;
    this.eveningLow = this.diabetesService.eveningLow;

    this.overallHigh = this.diabetesService.overallHigh;
    this.overallLow = this.diabetesService.overallLow;

  }
}
