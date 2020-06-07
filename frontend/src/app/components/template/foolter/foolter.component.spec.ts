import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoolterComponent } from './foolter.component';

describe('FoolterComponent', () => {
  let component: FoolterComponent;
  let fixture: ComponentFixture<FoolterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoolterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoolterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
