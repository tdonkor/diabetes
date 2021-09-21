import { Component, OnInit } from '@angular/core';
import {filter} from 'rxjs/operators';
import {ActivatedRoute, Router} from '@angular/router';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor(  private route: ActivatedRoute,
                private dialog: MatDialog,
                private router: Router) { }

  ngOnInit() {
  }

  displaySugarReadings() {
    this.router.navigate(['/sugarReadings'],  { queryParams:  filter, skipLocationChange: true});
  }

  // addSugarReading() {
  //   this.router.navigate(['/addSugarReading'],  { queryParams:  filter, skipLocationChange: true});
  // }

  displaySugarReadingsAverages() {
    this.router.navigate(['/readingAverages'],  { queryParams:  filter, skipLocationChange: true});
  }

  displayAppointments() {
    this.router.navigate(['/appointments'],  { queryParams:  filter, skipLocationChange: true});
  }

  // addAppointment() {
  //   this.router.navigate(['/addAppointment'],  { queryParams:  filter, skipLocationChange: true});
  // }
  medication() {
    this.router.navigate(['/medication'],  { queryParams:  filter, skipLocationChange: true});
  }

  displayWeightValues() {
    this.router.navigate(['/weightList'],  { queryParams:  filter, skipLocationChange: true});
  }
  addWeightValue() {
    this.router.navigate(['/addWeightReading'],  { queryParams:  filter, skipLocationChange: true});
  }
}
