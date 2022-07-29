import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NhaxeCreateComponent } from './nhaxe-create.component';

describe('NhaxeCreateComponent', () => {
  let component: NhaxeCreateComponent;
  let fixture: ComponentFixture<NhaxeCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NhaxeCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NhaxeCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
