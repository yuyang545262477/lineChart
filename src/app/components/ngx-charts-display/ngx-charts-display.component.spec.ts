import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxChartsDisplayComponent } from './ngx-charts-display.component';

describe('NgxChartsDisplayComponent', () => {
  let component: NgxChartsDisplayComponent;
  let fixture: ComponentFixture<NgxChartsDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxChartsDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxChartsDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
