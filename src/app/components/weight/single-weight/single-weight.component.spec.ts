import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleWeightComponent } from './single-weight.component';

describe('SingleWeightComponent', () => {
  let component: SingleWeightComponent;
  let fixture: ComponentFixture<SingleWeightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleWeightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleWeightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
