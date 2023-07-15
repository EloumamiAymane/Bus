import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusCapacityComponent } from './bus-capacity.component';

describe('BusCapacityComponent', () => {
  let component: BusCapacityComponent;
  let fixture: ComponentFixture<BusCapacityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BusCapacityComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BusCapacityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
