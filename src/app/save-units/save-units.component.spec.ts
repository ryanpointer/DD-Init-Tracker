import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaveUnitsComponent } from './save-units.component';

describe('SaveUnitsComponent', () => {
  let component: SaveUnitsComponent;
  let fixture: ComponentFixture<SaveUnitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaveUnitsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SaveUnitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
