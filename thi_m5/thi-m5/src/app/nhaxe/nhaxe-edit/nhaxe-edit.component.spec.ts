import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NhaxeEditComponent } from './nhaxe-edit.component';

describe('NhaxeEditComponent', () => {
  let component: NhaxeEditComponent;
  let fixture: ComponentFixture<NhaxeEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NhaxeEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NhaxeEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
