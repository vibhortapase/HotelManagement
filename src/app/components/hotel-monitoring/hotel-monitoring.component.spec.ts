import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelMonitoringComponent } from './hotel-monitoring.component';

describe('HotelMonitoringComponent', () => {
  let component: HotelMonitoringComponent;
  let fixture: ComponentFixture<HotelMonitoringComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HotelMonitoringComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HotelMonitoringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
