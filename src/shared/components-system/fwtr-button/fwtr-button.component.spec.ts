import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FwtrButtonComponent } from './fwtr-button.component';

describe('FwtrButtonComponent', () => {
  let component: FwtrButtonComponent;
  let fixture: ComponentFixture<FwtrButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FwtrButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FwtrButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
