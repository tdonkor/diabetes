import { Component, OnInit } from '@angular/core';
import { ChartType, ChartOptions, Chart } from 'chart.js';
import {Label, SingleDataSet} from 'ng2-charts';
import {DiabetesService} from '../../../../../services/diabetes.service';



@Component({
  selector: 'app-sugar-chart',
  templateUrl: './sugar-chart.component.html',
  styleUrls: ['./sugar-chart.component.scss']
})
export class SugarChartComponent implements OnInit {

  // Pie
  public pieChartOptions: ChartOptions = {
    responsive: true,
  };
  public pieChartLabels: Label[] = [['Below 4 mmol/l'], ['Between 4 and 5 mmol/l'], ['Between 5 and 6 mmol/l'], ['Between 6 and 7 mmol/l'], 'Greater than 7 mml/l'];
  public pieChartData: SingleDataSet;
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;
  public pieChartPlugins = [];

  constructor(private diabetesService: DiabetesService) {


  }

  ngOnInit() {
    console.log(this.diabetesService.lessThan4);
    console.log(this.diabetesService.between45);
    console.log(this.diabetesService.between56);
    console.log(this.diabetesService.between67);
    console.log(this.diabetesService.greaterThan7);

   this.pieChartData = [ this.diabetesService.lessThan4,
                         this.diabetesService.between45,
                         this.diabetesService.between56,
                         this.diabetesService.between67,
                         this.diabetesService.greaterThan7

  ];
  }

  // // Pie
  // public pieChartOptions: ChartOptions = {
  //   responsive: true,
  //   legend: {
  //     position: 'top',
  //   },
  //   plugins: {
  //     datalabels: {
  //       formatter: (value, ctx) => {
  //         const label = ctx.chart.data.labels[ctx.dataIndex];
  //         return label;
  //       },
  //     },
  //   }
  // };
  // public pieChartLabels: Label[] = [['Download', 'Sales'], ['In', 'Store', 'Sales'], 'Mail Sales'];
  // public pieChartData: number[] = [300, 500, 100];
  // public pieChartType: ChartType = 'pie';
  // public pieChartLegend = true;
  // // public pieChartPlugins = [pluginDataLabels];
  // public pieChartColors = [
  //   {
  //     backgroundColor: ['rgba(255,0,0,0.3)', 'rgba(0,255,0,0.3)', 'rgba(0,0,255,0.3)'],
  //   },
  // ];
  //
  // constructor(diabetesService: DiabetesService) { }
  //
  // ngOnInit(): void {
  // }
  //
  // // events
  // public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
  //   console.log(event, active);
  // }
  //
  // public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
  //   console.log(event, active);
  // }
  //
  // changeLabels(): void {
  //   const words = ['hen', 'variable', 'embryo', 'instal', 'pleasant', 'physical', 'bomber', 'army', 'add', 'film',
  //     'conductor', 'comfortable', 'flourish', 'establish', 'circumstance', 'chimney', 'crack', 'hall', 'energy',
  //     'treat', 'window', 'shareholder', 'division', 'disk', 'temptation', 'chord', 'left', 'hospital', 'beef',
  //     'patrol', 'satisfied', 'academy', 'acceptance', 'ivory', 'aquarium', 'building', 'store', 'replace', 'language',
  //     'redeem', 'honest', 'intention', 'silk', 'opera', 'sleep', 'innocent', 'ignore', 'suite', 'applaud', 'funny'];
  //   const randomWord = () => words[Math.trunc(Math.random() * words.length)];
  //   this.pieChartLabels = Array.apply(null, { length: 3 }).map(_ => randomWord());
  // }
  //
  // addSlice(): void {
  //   this.pieChartLabels.push(['Line 1', 'Line 2', 'Line 3']);
  //   this.pieChartData.push(400);
  //   this.pieChartColors[0].backgroundColor.push('rgba(196,79,244,0.3)');
  // }
  //
  // removeSlice(): void {
  //   this.pieChartLabels.pop();
  //   this.pieChartData.pop();
  //   this.pieChartColors[0].backgroundColor.pop();
  // }
  //
  // changeLegendPosition(): void {
  //   this.pieChartOptions.legend.position = this.pieChartOptions.legend.position === 'left' ? 'top' : 'left';
  // }

}
