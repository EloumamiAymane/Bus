import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatusTourneeComponent } from './status-tournee.component';

describe('StatusTourneeComponent', () => {
  let component: StatusTourneeComponent;
  let fixture: ComponentFixture<StatusTourneeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatusTourneeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StatusTourneeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
