import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';

@Component({
  selector: 'app-waist',
  templateUrl: './waist.component.html',
  styleUrls: ['./waist.component.scss']
})
export class WaistComponent implements OnInit {

  waistValue = 0;

  constructor(  private route: ActivatedRoute,
                private router: Router) { }

  ngOnInit() {

    const id = +this.route.snapshot.paramMap.get('id');
    // get waist value
    this.waistValue = id;
  }

}
