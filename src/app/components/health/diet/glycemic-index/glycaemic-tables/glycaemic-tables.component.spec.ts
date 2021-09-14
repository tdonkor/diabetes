import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GlycaemicTablesComponent } from './glycaemic-tables.component';

describe('GlycaemicTablesComponent', () => {
  let component: GlycaemicTablesComponent;
  let fixture: ComponentFixture<GlycaemicTablesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GlycaemicTablesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GlycaemicTablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
