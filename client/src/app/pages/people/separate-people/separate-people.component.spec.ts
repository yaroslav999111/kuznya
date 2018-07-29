import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeparatePeopleComponent } from './separate-people.component';

describe('SeparatePeopleComponent', () => {
  let component: SeparatePeopleComponent;
  let fixture: ComponentFixture<SeparatePeopleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeparatePeopleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeparatePeopleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
