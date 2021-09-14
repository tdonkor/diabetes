import { Component, OnInit } from '@angular/core';
import {filter} from 'rxjs/operators';
import {Router} from '@angular/router';

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.scss']
})
export class InformationComponent implements OnInit {

  id = 'basics';
  id2 = 'levels';
  id3 = 'living-with-diabetes';
  id4 = 'diabetes-links';

  constructor(private router: Router) { }

  ngOnInit() {
  }

  diabeticHealth() {
    this.router.navigate(['/diabeticHealth'],  { queryParams:  filter, skipLocationChange: true});
  }
}
