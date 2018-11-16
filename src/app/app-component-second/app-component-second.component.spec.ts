import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppComponentSecondComponent } from './app-component-second.component';

describe('AppComponentSecondComponent', () => {
  let component: AppComponentSecondComponent;
  let fixture: ComponentFixture<AppComponentSecondComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppComponentSecondComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponentSecondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
