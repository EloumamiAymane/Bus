import { Component, OnInit } from '@angular/core';
import { ChartTheme, ILoadedEventArgs } from '@syncfusion/ej2-angular-charts';
import { Browser } from '@syncfusion/ej2-base';
@Component({
  selector: 'app-status-tournee',
  templateUrl: './status-tournee.component.html',
  styleUrls: ['./status-tournee.component.css']
})
export class StatusTourneeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  public data: Object[] = [
    { ConsumerName: "Bus01 Allez", TotalCount: 10, Presents: 5, Absents: 4, DataLabelMappingName: "Total 10" },
    { ConsumerName: "Bus01 Retour", TotalCount: 9, Presents: 5, Absents: 4, DataLabelMappingName: "Total 9" },
    { ConsumerName: "Bus01 Retour", TotalCount: 9, Presents: 5, Absents: 4, DataLabelMappingName: "Total 9" },
    { ConsumerName: "Bus01 Retour", TotalCount: 9, Presents: 5, Absents: 4, DataLabelMappingName: "Total 9" },
    { ConsumerName: "Bus01 Retour", TotalCount: 9, Presents: 5, Absents: 4, DataLabelMappingName: "Total 9" },
    { ConsumerName: "Bus01 Retour", TotalCount: 9, Presents: 5, Absents: 4, DataLabelMappingName: "Total 9" },
    { ConsumerName: "Bus02 Allez", TotalCount: 11, Presents: 5, Absents: 4, DataLabelMappingName: "Total 11" },
    { ConsumerName: "Bus02 Retour", TotalCount: 8, Presents: 5, Absents: 4, DataLabelMappingName: "Total 8" },
    { ConsumerName: "Bus03 Allez", TotalCount: 10, Presents: 5, Absents: 4, DataLabelMappingName: "Total 10" },
    { ConsumerName: "Bus03 Retour", TotalCount: 10, Presents: 5, Absents: 4, DataLabelMappingName: "Total 10" },
    { ConsumerName: "Bus04 Allez", TotalCount: 10, Presents: 5, Absents: 4, DataLabelMappingName: "Total 10" },
    { ConsumerName: "Bus04 Retour", TotalCount: 10, Presents: 5, Absents: 4, DataLabelMappingName: "Total 10" },
    { ConsumerName: "Bus05 Allez", TotalCount: 10, Presents: 5, Absents: 4, DataLabelMappingName: "Total 10" },
    { ConsumerName: "Bus05 Retour", TotalCount: 10, Presents: 5, Absents: 4, DataLabelMappingName: "Total 10" },
    { ConsumerName: "Bus06 Allez", TotalCount: 10, Presents: 5, Absents: 4, DataLabelMappingName: "Total 10" },

    { ConsumerName: "Bus06 Retour", TotalCount: 10, Presents: 5, Absents: 4, DataLabelMappingName: "Total 10" },
    { ConsumerName: "Bus07 Allez", TotalCount: 9, Presents: 5, Absents: 4, DataLabelMappingName: "Total 9" },
    { ConsumerName: "Bus07 Allez", TotalCount: 9, Presents: 5, Absents: 4, DataLabelMappingName: "Total 9" },
    { ConsumerName: "Bus07 Allez", TotalCount: 9, Presents: 5, Absents: 4, DataLabelMappingName: "Total 9" },
    { ConsumerName: "Bus07 Allez", TotalCount: 9, Presents: 5, Absents: 4, DataLabelMappingName: "Total 9" },
    { ConsumerName: "Bus07 Allez", TotalCount: 9, Presents: 5, Absents: 4, DataLabelMappingName: "Total 9" },
    { ConsumerName: "Bus07 Retour", TotalCount: 11, Presents: 5, Absents: 4, DataLabelMappingName: "Total 11" },
    { ConsumerName: "Bus08 Allez", TotalCount: 8, Presents: 5, Absents: 4, DataLabelMappingName: "Total 8" },
    { ConsumerName: "Bus08 Retour", TotalCount: 10, Presents: 5, Absents: 4, DataLabelMappingName: "Total 10" },
    { ConsumerName: "Bus09 Allez", TotalCount: 10, Presents: 5, Absents: 4, DataLabelMappingName: "Total 10" },
    { ConsumerName: "Bus09 Retour", TotalCount: 10, Presents: 5, Absents: 4, DataLabelMappingName: "Total 10" },
    { ConsumerName: "Bus10 Allez", TotalCount: 10, Presents: 5, Absents: 4, DataLabelMappingName: "Total 10" },
    { ConsumerName: "Bus10 Retour", TotalCount: 10, Presents: 5, Absents: 4, DataLabelMappingName: "Total 10" },

  ];

  //Initializing Primary X Axis
  public primaryXAxis: Object = {
    valueType: 'Category',
    interval: 1,
    majorGridLines: { width: 0 },
    majorTickLines: { width: 0 },
    minorTickLines: { width: 0 },
    labelRotation: -90,

  };
  //Initializing Primary Y Axis
  public primaryYAxis: Object = {
    title: `Nombre d'Etudiants`,
    majorTickLines: { width: 0 }, lineStyle: { width: 0 },
  };
  public marker: Object = { dataLabel: { visible: true, position: 'Top', font: { fontWeight: '600', color: '#ffffff' } } };
  public dataLebelMarker: Object = { dataLabel: { visible: true, name: '', enableRotation: Browser.isDevice ? true : false, angle: -90, position: 'Top', font: { fontWeight: '600', color: '#ffffff' } } }
  public title: string = `Bus de l'ecole`;
  public tooltip: Object = {
    enable: true,
    shared: true
  };
  public chartArea: Object = {
    border: {
      width: 0
    }
  };
  public placement: boolean = false;
  public legendPosition: string = 'Top';
  public width: string = '900px';
  // custom code start
  public load(args: ILoadedEventArgs): void {
    let selectedTheme: string = location.hash.split('/')[1];
    selectedTheme = selectedTheme ? selectedTheme : 'Material';
    args.chart.theme = <ChartTheme>(selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)).replace(/-dark/i, "Dark").replace(/contrast/i, 'Contrast');
  };
}
