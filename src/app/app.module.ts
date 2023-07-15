import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CardItemsComponent } from './card-items/card-items.component';
import { BusDetailsComponent } from './bus-details/bus-details.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatStepperModule } from '@angular/material/stepper';
import { ChartsComponent } from './charts/charts.component';
import { MatListModule } from '@angular/material/list';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatRadioModule } from '@angular/material/radio';
import { MatTabsModule } from '@angular/material/tabs';
import {
  CategoryService, AccumulationChartAllModule, ScrollBarService, ColumnSeriesService, LineSeriesService,
  ChartAnnotationService, RangeColumnSeriesService, StackingColumnSeriesService, LegendService, TooltipService, BarSeriesService, ChartAllModule, StackingBarSeriesService
} from '@syncfusion/ej2-angular-charts';
import { RetardChartComponent } from './retard-chart/retard-chart.component';
import { DistanceChartComponent } from './distance-chart/distance-chart.component';
import { BusStatusComponent } from './bus-status-chart/bus-status.component';
import { GridAllModule } from '@syncfusion/ej2-angular-grids';
import { StatusTourneeComponent } from './status-tournee/status-tournee.component';
import { MatTableModule } from '@angular/material/table'
  ;
import { MatPaginator } from '@angular/material/paginator';
import { BusCapacityComponent } from './bus-capacity/bus-capacity.component'
@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    NavbarComponent,
    CardItemsComponent,
    BusDetailsComponent,
    ChartsComponent,
    RetardChartComponent,
    DistanceChartComponent,
    BusStatusComponent,
    StatusTourneeComponent,
    BusCapacityComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatStepperModule,
    MatListModule,
    MatGridListModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    FormsModule,
    ReactiveFormsModule,
    MatRadioModule,
    MatTabsModule,
    ChartAllModule,
    AccumulationChartAllModule,
    GridAllModule,
    MatTableModule
  ],
  providers: [CategoryService,
    LegendService, TooltipService, StackingBarSeriesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
