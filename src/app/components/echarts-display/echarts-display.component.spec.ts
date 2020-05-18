import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EchartsDisplayComponent } from './echarts-display.component';

describe('EchartsDisplayComponent', () => {
  let component: EchartsDisplayComponent;
  let fixture: ComponentFixture<EchartsDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EchartsDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EchartsDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
