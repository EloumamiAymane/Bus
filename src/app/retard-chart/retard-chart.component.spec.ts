import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RetardChartComponent } from './retard-chart.component';

describe('RetardChartComponent', () => {
  let component: RetardChartComponent;
  let fixture: ComponentFixture<RetardChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RetardChartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RetardChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
