import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUnitsComponent } from './add-units.component';

describe('AddUnitsComponent', () => {
  let component: AddUnitsComponent;
  let fixture: ComponentFixture<AddUnitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddUnitsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddUnitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
