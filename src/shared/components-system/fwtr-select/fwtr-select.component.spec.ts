import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FwtrSelectComponent } from './fwtr-select.component';

describe('FwtrSelectComponent', () => {
  let component: FwtrSelectComponent;
  let fixture: ComponentFixture<FwtrSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FwtrSelectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FwtrSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
