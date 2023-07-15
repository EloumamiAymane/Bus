import { Component, OnInit } from '@angular/core';
import { ChartTheme, ILoadedEventArgs } from '@syncfusion/ej2-angular-charts';
import { Browser } from '@syncfusion/ej2-base';
@Component({
  selector: 'app-retard-chart',
  templateUrl: './retard-chart.component.html',
  styleUrls: ['./retard-chart.component.css']
})
export class RetardChartComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log(this.data)
  }
  public data: Object[] = [
    { Month: 'Bus 01 ', retardI: 25, retardW: 0, retardA: 0, tot: 0 },
    { Month: 'Bus 02', retardI: 0, retardW: 6, retardA: 0, tot: 0 },
    { Month: 'Bus 03', retardI: 0, retardW: 0, retardA: 3, tot: 0 },
    { Month: 'Bus 04', retardI: 0, retardW: 0, retardA: 0, tot: -5 },
    { Month: 'Bus 05', retardI: 20, retardW: 0, retardA: 0, tot: 0 },
    { Month: 'Bus 06', retardI: 0, retardW: 8, retardA: 0, tot: 0 },
    { Month: 'Bus 07', retardI: 0, retardW: 0, retardA: 1, tot: 0 },
    { Month: 'Bus 08', retardI: 25, retardW: 0, retardA: 0, tot: 0 },
    { Month: 'Bus 09', retardI: 0, retardW: 6, retardA: 0, tot: 0 },
    { Month: 'Bus 10', retardI: 0, retardW: 0, retardA: 3, tot: 0 },
    { Month: 'Bus 11', retardI: 0, retardW: 0, retardA: 0, tot: -5 },
    { Month: 'Bus 12', retardI: 20, retardW: 0, retardA: 0, tot: 0 },
    { Month: 'Bus 13', retardI: 0, retardW: 8, retardA: 0, tot: 0 },
    { Month: 'Bus 14', retardI: 0, retardW: 0, retardA: 1, tot: 0 },
    { Month: 'Bus 15', retardI: 0, retardW: 6, retardA: 0, tot: 0 },
    { Month: 'Bus 16', retardI: 0, retardW: 0, retardA: 3, tot: 0 },
    { Month: 'Bus 17', retardI: 0, retardW: 0, retardA: 0, tot: -5 },
    { Month: 'Bus 18', retardI: 20, retardW: 0, retardA: 0, tot: 0 },
    { Month: 'Bus 19', retardI: 0, retardW: 8, retardA: 0, tot: 0 },
    { Month: 'Bus 20', retardI: 0, retardW: 0, retardA: 1, tot: 0 },
  ];
  //Initializing Primary X Axis
  public primaryXAxis: Object = {
    valueType: 'Category',
    majorGridLines: { width: 0 },
    majorTickLines: { width: 0 },
  };
  //Initializing Primary Y Axis
  public primaryYAxis: Object = {
    lineStyle: { width: 0 },
    majorTickLines: { width: 0 },
    labelFormat: '{value}',
    edgeLabelPlacement: 'Shift',
  };
  public tooltip: Object = {
    enable: true,
    format: '${point.x} : ${point.y}  min',
  };

  // custom code end
  public title: string = 'Retard Estimee';
  public chartArea: Object = {
    border: {
      width: 0,
    },
  };
  public border: Object = { color: '#ffffff', width: 1 };
  public width: string = '900px';
  public legend: Object = {
    visible: true,
    enableHighlight: true,
  };
  // custom code start
  public load(args: ILoadedEventArgs): void {
    let selectedTheme: string = location.hash.split('/')[1];
    selectedTheme = selectedTheme ? selectedTheme : 'Material';
    args.chart.theme = <ChartTheme>(
      (selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1))
        .replace(/-dark/i, 'Dark')
        .replace(/contrast/i, 'Contrast')
    );
    
  }

}
