import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {DiabetesService} from '../../../services/diabetes.service';
import {Router} from '@angular/router';
import {Sugar} from '../../../shared/sugarLevel';
import {filter} from 'rxjs/operators';

@Component({
  selector: 'app-sugar-reading-form',
  templateUrl: './sugar-reading-form.component.html',
  styleUrls: ['./sugar-reading-form.component.scss']
})
export class SugarReadingFormComponent implements OnInit {


  @ViewChild('f', {static: false}) sugarLevelForm: NgForm;

  sugarReadings: number;
  newSugarReading = new Sugar();

  constructor(private diabetesService: DiabetesService,
              private router: Router) { }


  ngOnInit() {

    this.sugarReadings = this.diabetesService.getIDNum();

  }

  onSubmit() {
    this.newSugarReading.id =  this.sugarReadings; //  this.sugarLevelForm.value.userData.Id;
    this.newSugarReading.timeOfDay = this.sugarLevelForm.value.userData.TimeOfDay;
    this.newSugarReading.reading = this.sugarLevelForm.value.userData.Reading;
    this.newSugarReading.date = this.sugarLevelForm.value.userData.Date;
    this.newSugarReading.medication = this.sugarLevelForm.value.userData.Medication;
    this.newSugarReading.notes = this.sugarLevelForm.value.userData.Notes;

    this.diabetesService.postDiabetesReading(this.newSugarReading)
      .subscribe((readings: Sugar) => this.newSugarReading = readings); // assign diabetes readings to the diabetesReading property

    // reset the form
    this.sugarLevelForm.reset();
    this.router.navigate(['/addSugarReading'],  { queryParams:  filter, skipLocationChange: true});

    // go back to the sugar readings page
    setTimeout(() => {
      alert('Returning to Sugar Readings list');
      this.router.navigate(['/sugarReadings']);
      },
      3000);

  }

}
