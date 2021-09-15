import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {BodyMass} from '../../../shared/BodyMass';
import {Router} from '@angular/router';
import {WeightsService} from '../../../services/weights.service';
import {filter} from 'rxjs/operators';


@Component({
  selector: 'app-weight-form',
  templateUrl: './weight-form.component.html',
  styleUrls: ['./weight-form.component.scss']
})
export class WeightFormComponent implements OnInit {


  @ViewChild('f', {static: false}) weightReadingForm: NgForm;

  weightReadings: number;
  newWeightsReading = new BodyMass();
  weightInPounds: number;
  heightInInches: number;
  bmiValue: number;



  constructor(private weightsService: WeightsService,
              private router: Router) { }

  ngOnInit() {
    this.weightReadings = this.weightsService.getIDNum();
  }

  calculateBMI(weight: number, height: number) {
    // height in feet and inches
    // weight in stones and ounces
    this.weightInPounds = weight * 14;
    this.heightInInches = height * 12;

    this.bmiValue = 703 * (this.weightInPounds / ((Math.pow(this.heightInInches, 2))));
    return parseFloat((this.bmiValue).toFixed(2));

  }


  onSubmit() {
    this.newWeightsReading.id =  this.weightReadings; //  this.sugarLevelForm.value.userData.Id;
    this.newWeightsReading.weight = this.weightReadingForm.value.userData.Weight;
    this.newWeightsReading.height = this.weightReadingForm.value.userData.Height;
    this.newWeightsReading.waist = this.weightReadingForm.value.userData.Waist;
    this.newWeightsReading.date = this.weightReadingForm.value.userData.Date;
    this.newWeightsReading.timeOfDay = this.weightReadingForm.value.userData.TimeOfDay;
    this.newWeightsReading.bmi = this.calculateBMI(this.newWeightsReading.weight, this.newWeightsReading.height);
    this.newWeightsReading.notes = this.weightReadingForm.value.userData.Notes;

    this.weightsService.postWeightReading(this.newWeightsReading)
      .subscribe((readings: BodyMass) => this.newWeightsReading = readings); // assign diabetes readings to the diabetesReading property

    // reset the form
    this.weightReadingForm.reset();
    this.router.navigate(['/addWeightReading'],  { queryParams:  filter, skipLocationChange: true});

  }

}
