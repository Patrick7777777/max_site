import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopartnersComponent } from './topartners.component';

describe('TopartnersComponent', () => {
  let component: TopartnersComponent;
  let fixture: ComponentFixture<TopartnersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopartnersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopartnersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
