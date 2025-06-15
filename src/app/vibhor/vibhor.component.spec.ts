import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VibhorComponent } from './vibhor.component';

describe('VibhorComponent', () => {
  let component: VibhorComponent;
  let fixture: ComponentFixture<VibhorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VibhorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VibhorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
