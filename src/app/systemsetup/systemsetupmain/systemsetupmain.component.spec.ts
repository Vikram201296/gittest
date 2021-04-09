import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SystemsetupmainComponent } from './systemsetupmain.component';

describe('SystemsetupmainComponent', () => {
  let component: SystemsetupmainComponent;
  let fixture: ComponentFixture<SystemsetupmainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SystemsetupmainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SystemsetupmainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
