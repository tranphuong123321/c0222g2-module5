import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FacilityCreateVillaComponent } from './facility-create-villa.component';

describe('FacilityCreateVillaComponent', () => {
  let component: FacilityCreateVillaComponent;
  let fixture: ComponentFixture<FacilityCreateVillaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacilityCreateVillaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacilityCreateVillaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
