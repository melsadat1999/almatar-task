import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FwtrCheckboxComponent } from './fwtr-checkbox.component';

describe('FwtrCheckboxComponent', () => {
  let component: FwtrCheckboxComponent;
  let fixture: ComponentFixture<FwtrCheckboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FwtrCheckboxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FwtrCheckboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
