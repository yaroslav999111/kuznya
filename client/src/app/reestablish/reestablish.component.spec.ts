import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReestablishComponent } from './reestablish.component';

describe('ReestablishComponent', () => {
  let component: ReestablishComponent;
  let fixture: ComponentFixture<ReestablishComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReestablishComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReestablishComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
