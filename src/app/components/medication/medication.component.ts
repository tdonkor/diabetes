import {Component, OnInit, ViewChild} from '@angular/core';
import { IMedication} from '../../shared/interfaces';
import {MatPaginator, MatTableDataSource} from '@angular/material';
import {DataService} from '../../services/data.service';

@Component({
  selector: 'app-medication',
  templateUrl: './medication.component.html',
  styleUrls: ['./medication.component.scss']
})
export class MedicationComponent implements OnInit {
  dataSource;
 // @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  medication: IMedication[];
  displayedColumns: string[] = ['Medication', 'Dose', 'Intake', 'Notes'];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    // use the get medication in the Data Service
    // need to tell getDefinitions to make the call to get the data
    // so need to subscribe from the Async operation
    // assign abbrevs to the abbreviations property
    this.dataService.getMedication()
      .subscribe((medi: IMedication[]) => {this.medication = medi;
                                           this.dataSource =  new MatTableDataSource<IMedication>(this.medication);
      });
  }

}
