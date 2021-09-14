import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {IDefinitions} from '../../shared/interfaces';
import {DataService} from '../../services/data.service';
import {MatPaginator, MatTableDataSource} from '@angular/material';


@Component({
  selector: 'app-definitions',
  templateUrl: './definitions.component.html',
  styleUrls: ['./definitions.component.scss']
})
export class DefinitionsComponent implements OnInit  {

  dataSource;
  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
  definitions: IDefinitions[] = [];
  displayedColumns: string[] = ['Title', 'Description'];

  constructor(private dataService: DataService) {
 }

  ngOnInit() {


    // use the get getDefinitions in the Data Service
    // need to tell getDefinitions to make the call to get the data
    // so need to subscribe from the Async operation
    // assign abbrevs to the abbreviations property
    this.dataService.getDefinitions()
      .subscribe((abbrevs: IDefinitions[]) => {this.definitions = abbrevs;
                                               this.dataSource =  new MatTableDataSource<IDefinitions>(this.definitions);
                                               this.dataSource.paginator = this.paginator;

      });
  }
}
