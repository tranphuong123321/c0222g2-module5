import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FacilityCreateRoomComponent } from './facility-create-room.component';

describe('FacilityCreateRoomComponent', () => {
  let component: FacilityCreateRoomComponent;
  let fixture: ComponentFixture<FacilityCreateRoomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacilityCreateRoomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacilityCreateRoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
