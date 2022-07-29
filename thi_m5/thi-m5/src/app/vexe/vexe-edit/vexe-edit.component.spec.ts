import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VexeEditComponent } from './vexe-edit.component';

describe('VexeEditComponent', () => {
  let component: VexeEditComponent;
  let fixture: ComponentFixture<VexeEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VexeEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VexeEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
