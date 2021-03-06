/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AmountTableComponent } from './amount-table.component';

describe('AmountTableComponent', () => {
  let component: AmountTableComponent;
  let fixture: ComponentFixture<AmountTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AmountTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AmountTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
