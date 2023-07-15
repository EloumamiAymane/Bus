import { Component, OnInit } from '@angular/core';
import { AccumulationTheme, ChartAnnotationSettingsModel, IAccLoadedEventArgs } from '@syncfusion/ej2-angular-charts';
import { Browser } from '@syncfusion/ej2-base';

@Component({
  selector: 'app-bus-status',
  templateUrl: './bus-status.component.html',
  styleUrls: ['./bus-status.component.css']
})
export class BusStatusComponent implements OnInit {
  public palette?: string[] = ['#1F8A70', '#F2BE22', '#6FAAB0'];
  public data: Object[] = [
    { x: 'Terminé', y: 5, text: '5' },
    { x: 'en cours', y: 1, text: '2' },
    { x: 'non demarré', y: 4, text: '4' },
  ];
  //Initializing Legend
  public legendSettings: Object = {
    visible: true,
    toggleVisibility: false,
    position: Browser.isDevice ? 'Bottom' : 'Right',
    height: Browser.isDevice ? '20%' : '30%',
    width: Browser.isDevice ? '80%' : '20%',
    textWrap: 'Wrap',
    maximumLabelWidth: 66,
  };
  public title: string = Browser.isDevice ? 'Statut du Bus' : '';
  public innerRadius: string = '43%';
  public startAngle: number = 30;
  public radius: string = '80%';

  //Initializing Datalabel
  public dataLabel: Object = {
    name: 'text',
    visible: true,
    font: {
      fontWeight: '600',
      color: '#ffffff',
    },
  };
  public annotations: ChartAnnotationSettingsModel[] = [
    {
      content: Browser.isDevice
        ? ' '
        : "<div style='font-Weight:600;font-size:14px'>Statut<br>des<br>Bus</div>",
      region: 'Series',
      x: '51%',
      y: '50%',
    },
  ];

  // custom code start
  public load(args: IAccLoadedEventArgs): void {
    let selectedTheme: string = location.hash.split('/')[1];
    selectedTheme = selectedTheme ? selectedTheme : 'Material';
    args.accumulation.theme = <AccumulationTheme>(
      (selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1))
        .replace(/-dark/i, 'Dark')
        .replace(/contrast/i, 'Contrast')
    );
  }
  public tooltip: Object = {
    enable: true,
    format: '<b>${point.x}: <b>${point.y} bus</b>',
    header: '',
  };
  constructor() { }

  ngOnInit(): void {
  }

}
