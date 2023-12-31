import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'node_modules/chart.js';
Chart.register(...registerables)
@Component({
  selector: 'app-bus-details',
  templateUrl: './bus-details.component.html',
  styleUrls: ['./bus-details.component.css']
})
export class BusDetailsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    // Pie chart
    this.PieChart()


  }
  PieChart() {
    const ctx = document.getElementById('pie') as HTMLCanvasElement;
    const chart = new Chart(ctx, {
      type: 'pie',
      data: {
        labels: ['Place disponible', 'Place remplies'],
        datasets: [
          {
            data: [8, 22],
            backgroundColor: [
              'rgb(128, 128, 128)',
              'rgb(0, 128,  0)',
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
