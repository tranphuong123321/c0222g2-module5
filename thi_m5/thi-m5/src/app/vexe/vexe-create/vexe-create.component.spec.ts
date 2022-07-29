import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VexeCreateComponent } from './vexe-create.component';

describe('VexeCreateComponent', () => {
  let component: VexeCreateComponent;
  let fixture: ComponentFixture<VexeCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VexeCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VexeCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
