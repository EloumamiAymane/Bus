import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ChartTheme, ILoadedEventArgs } from '@syncfusion/ej2-angular-charts';
import { Chart, registerables } from 'node_modules/chart.js';
import { Browser } from '@syncfusion/ej2-base';
Chart.register(...registerables)
@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css']
})
export class ChartsComponent implements OnInit, AfterViewInit {


  constructor() { }


  ngOnInit(): void {

  }





  lotsOfTabs = new Array(3).fill(0).map((_, index) => `Tab ${index}`);
  ngAfterViewInit() {

    const ctx1 = document.getElementById('piy1') as HTMLCanvasElement;
    const chart1 = new Chart(ctx1, {
      type: 'pie',
      data: {
        labels: ['Place disponible', 'Place remplies', 'none'],
        datasets: [
          {
            data: [8, 22, 0],
            backgroundColor: [
              ' rgba(255, 255, 0, 1)',
              'rgba(255, 165, 0, 0.8)',
              'rgba(128, 128, 128, 0.5)',
            ],
            borderWidth: 5
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,


        plugins: {

          tooltip: {
            callbacks: {
              label: function (tooltipItem: any) {
                var label = tooltipItem.label;
                // var value = 5
                console.log(tooltipItem) // Get the index of the hovered slice
                // var label = tooltipItem.label data.labels[dataIndex]; // Get the label for the hovered slice
                var value = tooltipItem.dataset.data[tooltipItem.dataIndex]  // Get the data value for the hovered slice
                return label + ': ' + value + ' places';
              }
            }
          }
        }
      }
    });
  }


}
