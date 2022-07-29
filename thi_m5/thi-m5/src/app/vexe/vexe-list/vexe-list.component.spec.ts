import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VexeListComponent } from './vexe-list.component';

describe('VexeListComponent', () => {
  let component: VexeListComponent;
  let fixture: ComponentFixture<VexeListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VexeListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VexeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
