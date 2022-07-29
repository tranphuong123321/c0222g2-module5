import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NhaxeListComponent } from './nhaxe-list.component';

describe('NhaxeListComponent', () => {
  let component: NhaxeListComponent;
  let fixture: ComponentFixture<NhaxeListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NhaxeListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NhaxeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
