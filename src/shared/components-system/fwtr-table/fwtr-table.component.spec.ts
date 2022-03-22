import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FwtrTableComponent } from './fwtr-table.component';

describe('FwtrTableComponent', () => {
  let component: FwtrTableComponent;
  let fixture: ComponentFixture<FwtrTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FwtrTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FwtrTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
